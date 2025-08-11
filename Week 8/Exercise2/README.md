
---

## **Exercise2/README.md**
```md
# Exercise 2 — .gitignore

**Objective:** Create a `.gitignore` file to ignore unwanted files and folders.

**Commands used:**
```bash
echo "sample log data" > sample.log
mkdir log && echo "log entry" > log/log1.txt
cat > .gitignore <<'IGN'
*.log
log/
IGN
git status --short --ignored
git add .gitignore
git commit -m "Exercise2: Add .gitignore to ignore logs"
git push
