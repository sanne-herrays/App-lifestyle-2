#!/bin/bash
set -e

MAX_RETRIES=3
RETRY_COUNT=0

while grep -q '"status": "pending"' tasks.json; do
  echo "=========================================="
  echo "Starting next task at $(date)"
  echo "=========================================="

  claude --dangerously-skip-permissions -p "
You are the Principal Product Builder & Strategist executing an overnight build for HerRays.

INSTRUCTIONS:
1. Read CLAUDE.md, PRD.md, tasks.json, and PROGRESS.md.
2. Identify the FIRST task in tasks.json where \"status\" is \"pending\".
3. Execute ONLY that single task completely:
   - If it is a research/strategy deliverable, write a thorough, publication-grade markdown document in docs/strategy/ or docs/research/ grounded in behavioral science and the PRD.
   - If it is a prototype feature, build clean, interactive, Apple-craft UI components inside prototype/src/ using React, TypeScript, and CSS/Tailwind with smooth micro-interactions.
4. Run \`cd prototype && npm run build\` to verify TypeScript strict mode and bundling pass with exit code 0. Fix all errors immediately.
5. Set that task's status in tasks.json to \"in_review\".
6. Do NOT commit yet. Exit immediately.
"

  if ! (cd prototype && npm run build); then
    echo "Build failed! Reverting uncommitted changes and retrying..."
    git checkout -- .
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ "$RETRY_COUNT" -ge "$MAX_RETRIES" ]; then
      echo "Task failed $MAX_RETRIES times. Marking as blocked."
      python3 -c '
import json
with open("tasks.json", "r") as f: data = json.load(f)
tasks = data if isinstance(data, list) else data.get("tasks", [])
for t in tasks:
    if t.get("status") in ("in_review", "pending"):
        t["status"] = "blocked"
        break
with open("tasks.json", "w") as f: json.dump(data, f, indent=2)
'
      RETRY_COUNT=0
    fi
    continue
  fi

  REVIEW_RESULT=$(claude --dangerously-skip-permissions -p "
You are a ruthless Apple Design Award Judge and Principal Engineer reviewing uncommitted changes.

INSTRUCTIONS:
1. Read CLAUDE.md, PRD.md, and check \`git status\` and \`git diff\` (plus any untracked files in docs/ or prototype/src/).
2. Inspect the task marked \"in_review\" in tasks.json against its acceptance criteria and CLAUDE.md rules:
   - Are there any TODOs, placeholders, shallow filler, or fake mock logic?
   - Does it violate zero-guilt behavioral design or Apple-level craft?
   - Is the TypeScript clean without \`any\` or \`@ts-ignore\`?
3. IF IT PASSES:
   - Update the task status in tasks.json from \"in_review\" to \"completed\".
   - Append a 3-bullet summary of the completed work to PROGRESS.md.
   - Output the exact word: APPROVED
4. IF IT FAILS:
   - Change the task status in tasks.json back from \"in_review\" to \"pending\".
   - Append a section \`## Review Rejection Notes\` to PROGRESS.md explaining exact defects the Builder must fix on the next pass.
   - Output the exact word: REJECTED
")

  echo "$REVIEW_RESULT"

  if echo "$REVIEW_RESULT" | grep -q "APPROVED"; then
    git add -A
    git commit -m "feat: complete autonomous task"
    git push origin main
    RETRY_COUNT=0
    echo "Task approved, committed, and pushed."
  else
    echo "Task rejected by Reviewer. Retrying..."
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ "$RETRY_COUNT" -ge "$MAX_RETRIES" ]; then
      python3 -c '
import json
with open("tasks.json", "r") as f: data = json.load(f)
tasks = data if isinstance(data, list) else data.get("tasks", [])
for t in tasks:
    if t.get("status") == "pending":
        t["status"] = "blocked"
        break
with open("tasks.json", "w") as f: json.dump(data, f, indent=2)
'
      git add tasks.json PROGRESS.md
      git commit -m "chore: mark stuck task as blocked after 3 rejections"
      RETRY_COUNT=0
    fi
  fi

  sleep 5
done

echo "All tasks processed! Overnight run finished at $(date)."
