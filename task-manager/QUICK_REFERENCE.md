# 🚀 TP4 Quick Reference Guide

## 📋 Git Commands Cheat Sheet

### Initial Setup

```bash
# Navigate to project
cd "c:\Users\Lenovo ideapad V14\Git_DevOps_Proj\tp4-task-manager"

# Check current branch
git branch

# Check status
git status

# View commit history
git log --oneline --graph --all
```

### Branch Management

```bash
# Create and switch to dev branch
git checkout -b dev
git push origin dev

# Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feat/dark-mode

# List all branches
git branch -a

# Switch branches
git checkout main
git checkout dev

# Delete local branch
git branch -d feat/dark-mode

# Delete remote branch
git push origin --delete feat/dark-mode
```

### Making Changes

```bash
# Check what changed
git status
git diff

# Stage all changes
git add .

# Stage specific file
git add app.js

# Commit with conventional commit message
git commit -m "feat(ui): add dark mode toggle"

# Amend last commit (if you forgot something)
git commit --amend -m "feat(ui): add dark mode toggle with persistence"

# Push to remote
git push origin feat/dark-mode

# Force push (use carefully!)
git push origin feat/dark-mode --force
```

### Syncing with Remote

```bash
# Fetch latest changes
git fetch origin

# Pull latest changes
git pull origin dev

# Pull with rebase
git pull --rebase origin dev

# Update all branches
git fetch --all
```

### Merging

```bash
# Merge feature into dev
git checkout dev
git merge feat/dark-mode

# Merge dev into main
git checkout main
git merge dev

# Abort merge if conflicts
git merge --abort
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- app.js

# Unstage file
git reset HEAD app.js

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert <commit-hash>
```

---

## 🎯 Conventional Commit Messages

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples
```bash
git commit -m "feat(ui): add dark mode toggle"
git commit -m "fix(tasks): resolve delete button not working"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(css): improve button hover effects"
git commit -m "test(app): add tests for task priority"
git commit -m "chore(deps): update dependencies"
git commit -m "ci(actions): add deployment workflow"
```

### With Body
```bash
git commit -m "feat(ui): add dark mode toggle

- Add CSS variables for theming
- Create toggle button in header
- Implement localStorage persistence
- Update icon based on current theme

Closes #1"
```

---

## 📝 npm Commands

### Package Management

```bash
# Install all dependencies
npm install

# Install specific package
npm install eslint --save-dev

# Install and save to package.json
npm install --save package-name

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Remove package
npm uninstall package-name
```

### Scripts

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run linter
npm run lint

# Auto-fix linting issues
npx eslint *.js --fix

# Start development server
npm start

# Build for production (if configured)
npm run build
```

### Troubleshooting

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Install with clean slate
npm ci
```

---

## 🔧 GitHub CLI Commands (Optional)

If you have GitHub CLI installed:

```bash
# Create PR
gh pr create --base dev --head feat/dark-mode --title "feat: Add dark mode toggle"

# List PRs
gh pr list

# View PR
gh pr view 1

# Merge PR
gh pr merge 1

# Create issue
gh issue create --title "Add task priority levels" --body "Description here"

# List issues
gh issue list

# Close issue
gh issue close 1

# View workflow runs
gh run list

# View specific run
gh run view <run-id>
```

---

## 🎨 VS Code Shortcuts

### Git Integration

- `Ctrl+Shift+G` - Open Source Control panel
- `Ctrl+Enter` - Commit staged changes
- `Ctrl+K Ctrl+P` - Push
- `Ctrl+K Ctrl+F` - Pull

### Editing

- `Ctrl+/` - Toggle comment
- `Ctrl+D` - Select next occurrence
- `Alt+Up/Down` - Move line up/down
- `Shift+Alt+Up/Down` - Copy line up/down
- `Ctrl+Shift+K` - Delete line

### Navigation

- `Ctrl+P` - Quick file open
- `Ctrl+Shift+F` - Search in files
- `Ctrl+G` - Go to line
- `F12` - Go to definition
- `Alt+Left/Right` - Navigate back/forward

---

## 🧪 Testing Commands

### Jest

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- app.test.js

# Run with coverage
npm test -- --coverage

# Run tests matching pattern
npm test -- --testNamePattern="addTask"
```

---

## 🌐 GitHub Pages Deployment

### Manual Deployment

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# "deploy": "gh-pages -d ./"

# Deploy
npm run deploy
```

### Check Deployment

1. Go to repository Settings → Pages
2. Verify source is set to `gh-pages` branch
3. Check deployment URL
4. Wait 2-5 minutes for changes to propagate

---

## 🔍 Debugging

### Check Workflow Status

```bash
# View GitHub Actions logs
# Go to: https://github.com/HiXaM94/Git_DevOps_Proj/actions

# Check specific workflow
# Click on workflow run → View job logs
```

### Common Issues

**Issue**: Tests fail in CI but pass locally
```bash
# Ensure package-lock.json is committed
git add package-lock.json
git commit -m "chore: add package-lock.json"
git push
```

**Issue**: Linting fails
```bash
# Run linter locally
npm run lint

# Auto-fix
npx eslint *.js --fix

# Commit fixes
git add .
git commit -m "fix: resolve linting issues"
```

**Issue**: Merge conflicts
```bash
# Update your branch with latest dev
git checkout feat/dark-mode
git fetch origin
git merge origin/dev

# Resolve conflicts in files
# Then:
git add .
git commit -m "chore: resolve merge conflicts"
git push
```

---

## 📊 Project Board Workflow

### Creating Issues

1. Go to GitHub → Issues → New Issue
2. Fill in title and description
3. Add labels (enhancement, bug, etc.)
4. Assign to yourself or collaborator
5. Link to project board

### Moving Cards

- **To Do** → When issue is created
- **In Progress** → When you start working (create branch)
- **In Review** → When PR is created
- **Done** → When PR is merged and issue is closed

### Linking Issues to PRs

In PR description:
```markdown
Closes #1
Fixes #2
Resolves #3
```

---

## 🎯 Daily Workflow

### Morning Routine

```bash
# 1. Sync with remote
git checkout dev
git pull origin dev

# 2. Check what you're working on
git branch
git status

# 3. Create/switch to feature branch
git checkout feat/dark-mode
```

### During Development

```bash
# 1. Make changes
# 2. Test frequently
npm test

# 3. Commit often
git add .
git commit -m "feat: add theme toggle button"

# 4. Push regularly
git push origin feat/dark-mode
```

### End of Day

```bash
# 1. Ensure all changes are committed
git status

# 2. Push to remote
git push origin feat/dark-mode

# 3. Update project board
# Move card to appropriate column
```

---

## 🚀 Feature Development Workflow

### Complete Feature Cycle

```bash
# 1. Start from dev
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feat/task-priority

# 3. Move issue to "In Progress" on board

# 4. Develop feature
# ... make changes ...

# 5. Test
npm test
npm run lint

# 6. Commit
git add .
git commit -m "feat(tasks): add priority levels with color coding

- Add priority field to task object
- Create priority selector UI
- Add color badges (high/medium/low)
- Update tests for priority functionality

Closes #2"

# 7. Push
git push origin feat/task-priority

# 8. Create PR on GitHub
# - Base: dev
# - Compare: feat/task-priority
# - Link issue with "Closes #2"

# 9. Move issue to "In Review"

# 10. Request review (or self-review)

# 11. Merge PR

# 12. Move issue to "Done"

# 13. Delete feature branch
git branch -d feat/task-priority
git push origin --delete feat/task-priority
```

---

## 📚 Useful Links

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Jest Documentation](https://jestjs.io/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

**Quick Tip**: Bookmark this file for easy reference! 🔖
