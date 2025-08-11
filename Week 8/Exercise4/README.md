
---

## **Exercise4/README.md**
```md
# Exercise 4 — Conflict resolution

**Objective:** Create a merge conflict between two branches, resolve it, and push the resolved changes.

**Commands used:**
```bash
git checkout -b GitWork
cat > hello.xml <<'XML'
<!-- hello.xml from GitWork branch -->
<message>Hello from branch</message>
XML
git add hello.xml
git commit -m "Exercise4: Added hello.xml in GitWork"

git checkout main
cat > hello.xml <<'XML'
<!-- hello.xml from main branch -->
<message>Hello from main</message>
XML
git add hello.xml
git commit -m "Exercise4: Added hello.xml in main"

git merge GitWork
# Resolve conflict manually in hello.xml
git add hello.xml
git commit -m "Exercise4: Resolved merge conflict in hello.xml"

echo "*~" >> .gitignore
git add .gitignore
git commit -m "Exercise4: Ignore backup files"

git branch -d GitWork
git push
