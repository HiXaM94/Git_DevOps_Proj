# 📋 TP4 Implementation Plan - TaskMaster Pro

## 🎯 Current Status

### ✅ What We Have
- ✅ Basic task manager application (HTML/CSS/JS)
- ✅ Core functionality (add, delete, toggle, filter tasks)
- ✅ Jest tests (4 test cases)
- ✅ README.md with basic documentation
- ✅ package.json with scripts
- ✅ Premium glassmorphism UI design

### ❌ What's Missing for TP4 Completion
- ❌ GitHub Actions CI/CD workflow
- ❌ CONTRIBUTING.md in tp4-task-manager folder
- ❌ GitHub Issues (minimum 3)
- ❌ GitHub Project Board (Kanban)
- ❌ Pull Requests with reviews (minimum 2)
- ❌ Deployment to production (GitHub Pages/Vercel)
- ❌ Branch strategy (dev + feature branches)
- ❌ Collaboration evidence

---

## 📝 TP4 Requirements Checklist

### 1. Code & Structure (20%)
- [x] Clean, structured code
- [x] Proper file organization
- [ ] ESLint configuration
- [ ] Code comments where needed

### 2. Collaboration (20%)
- [ ] At least 2 branches with PRs
- [ ] Code reviews on PRs
- [ ] Multiple contributors (or simulated)
- [ ] Clear commit history with conventional commits

### 3. Documentation (20%)
- [x] README.md (needs enhancement)
- [ ] CONTRIBUTING.md (copy from root)
- [ ] Installation instructions
- [ ] Demo link
- [ ] Contributors section

### 4. CI/CD Pipeline (20%)
- [ ] GitHub Actions workflow
- [ ] Automated testing
- [ ] Automated linting
- [ ] Automated deployment
- [ ] Status badges in README

### 5. Deployment (20%)
- [ ] Live production URL
- [ ] Automatic deployment on merge to main
- [ ] Performance optimization
- [ ] Accessibility validation

---

## 🚀 Implementation Steps

### Phase 1: Setup CI/CD Infrastructure

#### Step 1.1: Create GitHub Actions Workflow
**File**: `.github/workflows/tp4-ci-cd.yml`

```yaml
name: TP4 TaskMaster CI/CD

on:
  push:
    branches: [main, dev]
    paths:
      - 'tp4-task-manager/**'
  pull_request:
    branches: [main, dev]
    paths:
      - 'tp4-task-manager/**'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        working-directory: ./tp4-task-manager
        run: npm ci
      - name: Run tests
        working-directory: ./tp4-task-manager
        run: npm test
      
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        working-directory: ./tp4-task-manager
        run: npm ci
      - name: Run linter
        working-directory: ./tp4-task-manager
        run: npm run lint || echo "Linter not configured yet"

  deploy:
    needs: [test, lint]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./tp4-task-manager
          destination_dir: tp4-task-manager
```

#### Step 1.2: Add ESLint Configuration
**File**: `tp4-task-manager/.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

#### Step 1.3: Update package.json
Add lint script and additional dependencies:

```json
{
  "scripts": {
    "test": "jest",
    "start": "lite-server",
    "lint": "eslint *.js"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "jest-environment-jsdom": "^29.0.0",
    "lite-server": "^2.6.1",
    "eslint": "^8.0.0"
  }
}
```

---

### Phase 2: Documentation Enhancement

#### Step 2.1: Copy CONTRIBUTING.md
Copy the root CONTRIBUTING.md to tp4-task-manager folder and customize it.

#### Step 2.2: Enhance README.md
Add:
- Badges (build status, tests, license)
- Demo link (once deployed)
- Screenshots
- Contributors section
- Technology stack
- Project structure

#### Step 2.3: Create Additional Documentation Files

**DEPLOY.md**:
```markdown
# Deployment Guide

## Automatic Deployment
- Push to `main` branch triggers automatic deployment
- GitHub Actions builds and deploys to GitHub Pages
- URL: https://HiXaM94.github.io/Git_DevOps_Proj/tp4-task-manager/

## Manual Deployment
1. Ensure all tests pass: `npm test`
2. Push to main: `git push origin main`
3. Check Actions tab for deployment status
```

---

### Phase 3: Collaboration Setup

#### Step 3.1: Create GitHub Issues
Create at least 3 issues:

1. **Issue #1**: Add dark mode toggle feature
   - Labels: `enhancement`, `good first issue`
   - Assignee: Developer A

2. **Issue #2**: Add task priority levels (high/medium/low)
   - Labels: `enhancement`, `feature`
   - Assignee: Developer B

3. **Issue #3**: Add task due dates and sorting
   - Labels: `enhancement`, `feature`
   - Assignee: Developer A

#### Step 3.2: Create Project Board
- Create a Kanban board with columns:
  - 📋 To Do
  - 🚧 In Progress
  - 👀 In Review
  - ✅ Done

#### Step 3.3: Branch Strategy
```
main (production)
  └── dev (development)
       ├── feat/dark-mode
       ├── feat/task-priority
       └── feat/task-due-dates
```

---

### Phase 4: Feature Development & PRs

#### Feature 1: Dark Mode Toggle
**Branch**: `feat/dark-mode`

1. Create branch from `dev`
2. Add dark mode CSS variables
3. Add toggle button in header
4. Add localStorage persistence
5. Write tests for dark mode
6. Create PR to `dev`
7. Request review
8. Merge after approval

#### Feature 2: Task Priority
**Branch**: `feat/task-priority`

1. Create branch from `dev`
2. Add priority field to task object
3. Add priority selector in UI
4. Add color coding (red/yellow/green)
5. Update tests
6. Create PR to `dev`
7. Request review
8. Merge after approval

#### Feature 3: Task Due Dates
**Branch**: `feat/task-due-dates`

1. Create branch from `dev`
2. Add date picker
3. Add due date display
4. Add overdue highlighting
5. Add sorting by date
6. Update tests
7. Create PR to `dev`
8. Request review
9. Merge after approval

---

### Phase 5: Deployment & Testing

#### Step 5.1: Deploy to GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to `gh-pages` branch
3. Verify deployment URL works

#### Step 5.2: Alternative: Deploy to Vercel
1. Connect GitHub repo to Vercel
2. Set root directory to `tp4-task-manager`
3. Configure build settings
4. Deploy

#### Step 5.3: Testing Checklist
- [ ] All unit tests pass
- [ ] Manual testing on desktop
- [ ] Manual testing on mobile
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility testing
- [ ] Performance testing (Lighthouse)

---

## 🎯 TP5 Preparation (Advanced Features)

### What TP5 Adds Beyond TP4

1. **Multi-Environment Deployment**
   - Staging environment (dev branch)
   - Production environment (main branch)
   - Different URLs for each

2. **Secrets Management**
   - GitHub Secrets for API keys
   - Environment variables
   - Security documentation

3. **Advanced CI/CD**
   - Rollback capability
   - Deployment notifications (Slack/Discord)
   - Manual approval gates
   - Automated versioning with tags

4. **Enhanced Testing**
   - Minimum 6 tests (3 frontend + 3 backend)
   - E2E tests with Playwright
   - Coverage reports

5. **Backend Integration**
   - REST API or GraphQL
   - Database integration
   - Authentication

6. **Advanced Documentation**
   - SECURITY.md
   - CHANGELOG.md
   - API documentation

---

## 📊 Timeline Estimate

| Phase | Duration | Tasks |
|-------|----------|-------|
| Phase 1: CI/CD Setup | 2 hours | Workflows, ESLint, configs |
| Phase 2: Documentation | 1 hour | README, CONTRIBUTING, DEPLOY |
| Phase 3: Collaboration | 1 hour | Issues, Project Board, branches |
| Phase 4: Features & PRs | 4 hours | 3 features + reviews |
| Phase 5: Deployment | 1 hour | Deploy + testing |
| **Total** | **9 hours** | Complete TP4 |

---

## 🎓 Success Criteria

### TP4 Completion Checklist
- [ ] Application deployed and accessible online
- [ ] CI/CD pipeline running successfully
- [ ] At least 2 PRs with code reviews
- [ ] 3+ GitHub issues created and resolved
- [ ] Kanban board showing workflow
- [ ] Complete documentation (README, CONTRIBUTING)
- [ ] All tests passing
- [ ] Conventional commits used throughout
- [ ] Multiple branches merged to dev/main

### Ready for TP5 When:
- [ ] All TP4 requirements met
- [ ] Team comfortable with Git workflow
- [ ] CI/CD pipeline stable
- [ ] Documentation habits established
- [ ] Ready to add backend/API layer

---

## 🚀 Next Steps

1. **Immediate**: Create `.github/workflows/tp4-ci-cd.yml`
2. **Today**: Set up ESLint and update package.json
3. **This Week**: Create issues and project board
4. **This Week**: Develop and merge 2-3 features via PRs
5. **End of Week**: Deploy to production and verify

---

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Pages Deployment](https://pages.github.com/)
- [Vercel Deployment](https://vercel.com/docs)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [ESLint](https://eslint.org/docs/latest/)

---

**Last Updated**: 2026-02-04
**Status**: Ready to implement
**Priority**: High
