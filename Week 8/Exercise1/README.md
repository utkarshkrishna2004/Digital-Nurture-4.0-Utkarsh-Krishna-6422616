# Exercise 1 — Git basics

**Objective:** Create a file, commit it, and push it to a remote repository.

**Commands used:**
```bash
echo "Welcome to Git HOL - Week 8" > welcome.txt
git add welcome.txt
git commit -m "Exercise1: Added welcome.txt"
git log --oneline --graph --decorate -n 5
git status
git push -u origin main
