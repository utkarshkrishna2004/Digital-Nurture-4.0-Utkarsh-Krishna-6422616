
---

## **Exercise3/README.md**
```md
# Exercise 3 — Branching & merging

**Objective:** Create a new branch, add a file in it, merge it into the main branch, and delete the branch.

**Commands used:**
```bash
git checkout -b GitNewBranch
git branch
echo "This file is in GitNewBranch" > branchfile.txt
git add branchfile.txt
git commit -m "Exercise3: Added branchfile.txt in GitNewBranch"
git checkout main
git merge GitNewBranch
git branch -d GitNewBranch
git log --oneline --graph --decorate -n 10
git push
