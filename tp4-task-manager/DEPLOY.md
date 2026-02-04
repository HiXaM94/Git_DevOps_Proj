# 🚀 Deployment Guide - TaskMaster Pro

## Automatic Deployment (Recommended)

The application is automatically deployed to GitHub Pages when code is pushed to the `main` branch.

**Live URL**: https://HiXaM94.github.io/Git_DevOps_Proj/tp4-task-manager/

### How it works:

1. **Push to main**: Code is pushed to the `main` branch
2. **Trigger**: GitHub Actions workflow automatically starts
3. **Test**: All tests run automatically
4. **Lint**: Code quality checks are performed
5. **Deploy**: If all checks pass, code is deployed to GitHub Pages
6. **Live**: Site is updated in ~2-3 minutes

### Workflow Status

Check the deployment status in the [Actions tab](https://github.com/HiXaM94/Git_DevOps_Proj/actions).

---

## Manual Deployment

If you need to deploy manually or troubleshoot:

### Prerequisites

```bash
# Ensure you have all dependencies
npm install

# Run tests locally
npm test

# Run linter
npm run lint
```

### Deploy Steps

1. **Merge dev into main**:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   ```

2. **Push to trigger deployment**:
   ```bash
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to GitHub → Actions tab
   - Watch the "TP4 TaskMaster CI/CD" workflow
   - Wait for green checkmark ✅

4. **Verify deployment**:
   - Visit: https://HiXaM94.github.io/Git_DevOps_Proj/tp4-task-manager/
   - Clear cache if needed (Ctrl+Shift+R)

---

## Local Development

### Quick Start

```bash
# Navigate to project
cd tp4-task-manager

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Development Workflow

1. **Create feature branch**:
   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make changes and test**:
   ```bash
   npm test
   npm run lint
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add my feature"
   git push origin feat/my-feature
   ```

4. **Create Pull Request** on GitHub

---

## Environment Configuration

### GitHub Pages Setup

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **root**
4. Save

### Alternative: Vercel Deployment

If you prefer Vercel:

1. **Connect Repository**:
   - Go to [Vercel](https://vercel.com)
   - Import Git Repository
   - Select `Git_DevOps_Proj`

2. **Configure Build**:
   - Framework Preset: **Other**
   - Root Directory: `tp4-task-manager`
   - Build Command: (leave empty)
   - Output Directory: `./`

3. **Deploy**:
   - Click "Deploy"
   - Get your live URL

### Alternative: Netlify Deployment

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - New site from Git
   - Select repository

2. **Configure**:
   - Base directory: `tp4-task-manager`
   - Build command: (leave empty)
   - Publish directory: `./`

3. **Deploy**

---

## Troubleshooting

### Issue: Deployment Fails

**Symptoms**: Red X in GitHub Actions

**Solutions**:
1. Check the Actions log for specific errors
2. Ensure all tests pass locally: `npm test`
3. Ensure linting passes: `npm run lint`
4. Check that package-lock.json is committed

### Issue: Tests Fail in CI

**Symptoms**: Test job fails in GitHub Actions

**Solutions**:
```bash
# Run tests locally to debug
npm test

# Check for environment-specific issues
# Ensure all dependencies are in package.json
npm ci
npm test
```

### Issue: Site Not Updating

**Symptoms**: Changes not visible on live site

**Solutions**:
1. **Clear browser cache**: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. **Wait**: GitHub Pages can take 2-5 minutes to update
3. **Check deployment**: Verify workflow completed successfully
4. **Hard refresh**: Open in incognito/private mode

### Issue: 404 Error on GitHub Pages

**Symptoms**: Page not found error

**Solutions**:
1. Verify GitHub Pages is enabled in Settings
2. Check that `gh-pages` branch exists
3. Ensure workflow has `destination_dir: tp4-task-manager`
4. Wait a few minutes for DNS propagation

### Issue: Lint Errors

**Symptoms**: Lint job fails

**Solutions**:
```bash
# Run linter locally
npm run lint

# Auto-fix simple issues
npx eslint *.js --fix

# Commit fixes
git add .
git commit -m "fix: resolve linting issues"
```

---

## CI/CD Pipeline Details

### Jobs Overview

1. **Test Job**:
   - Runs Jest tests
   - Ensures code functionality
   - Must pass before deployment

2. **Lint Job**:
   - Runs ESLint
   - Checks code quality
   - Enforces coding standards

3. **Deploy Job**:
   - Only runs on `main` branch
   - Requires test and lint to pass
   - Deploys to GitHub Pages

### Workflow Triggers

The workflow runs on:
- **Push** to `main` or `dev` branches
- **Pull Request** to `main` or `dev` branches
- Only when files in `tp4-task-manager/` change

---

## Performance Optimization

### Before Deployment

- ✅ Minimize CSS/JS files
- ✅ Optimize images (use WebP)
- ✅ Remove console.logs
- ✅ Test on multiple browsers
- ✅ Test on mobile devices

### Lighthouse Scores

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

Run Lighthouse in Chrome DevTools to check.

---

## Security Considerations

- ✅ No sensitive data in code
- ✅ No API keys committed
- ✅ Use environment variables for secrets
- ✅ HTTPS enabled by default on GitHub Pages
- ✅ Content Security Policy headers

---

## Monitoring

### Check Deployment Status

```bash
# View recent deployments
gh run list --workflow="TP4 TaskMaster CI/CD"

# View specific run
gh run view [run-id]
```

### Analytics

Consider adding:
- Google Analytics
- Plausible Analytics
- Simple Analytics

---

## Rollback Procedure

If a deployment introduces bugs:

1. **Quick Rollback**:
   ```bash
   # Revert the last commit
   git revert HEAD
   git push origin main
   ```

2. **Rollback to Specific Version**:
   ```bash
   # Find the good commit
   git log --oneline
   
   # Revert to that commit
   git revert <commit-hash>
   git push origin main
   ```

3. **Emergency Rollback**:
   ```bash
   # Reset to previous working state
   git reset --hard <good-commit-hash>
   git push origin main --force
   ```

---

## Support

For issues or questions:
- 📝 Create an [Issue](https://github.com/HiXaM94/Git_DevOps_Proj/issues)
- 📧 Contact the maintainers
- 📖 Check the [README](./README.md)
- 🤝 Review [CONTRIBUTING](./CONTRIBUTING.md)

---

**Last Updated**: 2026-02-04  
**Deployment Platform**: GitHub Pages  
**CI/CD**: GitHub Actions
