# 🎓 Guide Pratique TP4 : TaskMaster Pro - Projet Collaboratif Complet

Ce guide vous accompagne pas à pas pour réaliser le TP4 avec toutes les exigences.

---

## 📋 Prérequis

Avant de commencer :
- Node.js et npm installés
- Git configuré
- Compte GitHub actif
- Éditeur de code (VS Code recommandé)

---

## 🚀 Phase 1 : Configuration Initiale

### 1.1 Vérifier l'état du projet

```bash
cd "c:\Users\Lenovo ideapad V14\Git_DevOps_Proj\tp4-task-manager"

# Vérifier que tout fonctionne
npm install
npm test
npm start
```

### 1.2 Créer la branche de développement

```bash
# Depuis main, créer dev
git checkout -b dev
git push origin dev
```

---

## 🔧 Phase 2 : Configuration CI/CD

### 2.1 Créer le workflow GitHub Actions

Créez le fichier `.github/workflows/tp4-ci-cd.yml` à la racine du projet :

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
    name: Run Tests
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./tp4-task-manager
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: './tp4-task-manager/package-lock.json'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test

  lint:
    name: Lint Code
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./tp4-task-manager
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: './tp4-task-manager/package-lock.json'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint

  deploy:
    name: Deploy to GitHub Pages
    needs: [test, lint]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./tp4-task-manager
          destination_dir: tp4-task-manager
```

### 2.2 Ajouter ESLint

```bash
# Installer ESLint
npm install --save-dev eslint

# Créer .eslintrc.json
```

Contenu de `.eslintrc.json` :

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

### 2.3 Mettre à jour package.json

Ajoutez le script lint :

```json
{
  "scripts": {
    "test": "jest",
    "start": "lite-server",
    "lint": "eslint *.js"
  }
}
```

### 2.4 Tester localement

```bash
npm run lint
npm test
```

### 2.5 Pousser les changements

```bash
git add .
git commit -m "ci: add GitHub Actions workflow and ESLint configuration"
git push origin dev
```

---

## 📝 Phase 3 : Documentation

### 3.1 Copier CONTRIBUTING.md

```bash
# Copier depuis la racine
cp ../CONTRIBUTING.md ./CONTRIBUTING.md
```

### 3.2 Améliorer README.md

Ajoutez des badges en haut du README :

```markdown
# TaskMaster Pro (TP4) 📝

![CI/CD](https://github.com/HiXaM94/Git_DevOps_Proj/workflows/TP4%20TaskMaster%20CI%2FCD/badge.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

[... reste du README ...]

## 👥 Contributors

- **HiXaM94** - Initial work and development
- **[Collaborator Name]** - Feature development

## 📸 Screenshots

![TaskMaster Pro Screenshot](./docs/screenshot.png)
```

### 3.3 Créer DEPLOY.md

```markdown
# 🚀 Deployment Guide - TaskMaster Pro

## Automatic Deployment (Recommended)

The application is automatically deployed to GitHub Pages when code is pushed to the `main` branch.

**Live URL**: https://HiXaM94.github.io/Git_DevOps_Proj/tp4-task-manager/

### How it works:
1. Push code to `main` branch
2. GitHub Actions workflow triggers
3. Tests run automatically
4. If tests pass, code is deployed
5. Site is live in ~2 minutes

## Manual Deployment

If you need to deploy manually:

1. Ensure all tests pass:
   ```bash
   npm test
   ```

2. Push to main:
   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```

3. Monitor deployment:
   - Go to GitHub Actions tab
   - Watch the workflow progress
   - Check for any errors

## Local Development

```bash
npm install
npm start
```

Open http://localhost:3000

## Troubleshooting

**Issue**: Deployment fails
**Solution**: Check GitHub Actions logs for errors

**Issue**: Tests fail
**Solution**: Run `npm test` locally to debug

**Issue**: Site not updating
**Solution**: Clear browser cache or wait 5 minutes
```

### 3.4 Commiter la documentation

```bash
git add .
git commit -m "docs: add CONTRIBUTING, improve README, add DEPLOY guide"
git push origin dev
```

---

## 🎯 Phase 4 : Gestion de Projet

### 4.1 Créer les Issues sur GitHub

Allez sur GitHub → Issues → New Issue

**Issue #1 : Dark Mode Toggle**
```
Title: Add dark mode toggle feature
Labels: enhancement, good first issue
Assignee: [Your username]

Description:
Add a dark mode toggle button that allows users to switch between light and dark themes.

Tasks:
- [ ] Add dark mode CSS variables
- [ ] Create toggle button in header
- [ ] Implement theme switching logic
- [ ] Save preference to localStorage
- [ ] Add tests for dark mode functionality
```

**Issue #2 : Task Priority Levels**
```
Title: Add task priority levels (high/medium/low)
Labels: enhancement, feature
Assignee: [Collaborator username]

Description:
Allow users to assign priority levels to tasks with visual indicators.

Tasks:
- [ ] Add priority field to task object
- [ ] Create priority selector UI
- [ ] Add color coding (red/yellow/green)
- [ ] Update task display with priority badge
- [ ] Add tests for priority functionality
```

**Issue #3 : Task Due Dates**
```
Title: Add task due dates and sorting
Labels: enhancement, feature
Assignee: [Your username]

Description:
Enable users to set due dates for tasks and sort by date.

Tasks:
- [ ] Add date picker to task input
- [ ] Display due date on tasks
- [ ] Highlight overdue tasks
- [ ] Add sort by date functionality
- [ ] Update tests
```

### 4.2 Créer un Project Board

1. Allez sur GitHub → Projects → New Project
2. Choisissez "Board" template
3. Nommez-le "TP4 TaskMaster Development"
4. Créez les colonnes :
   - 📋 To Do
   - 🚧 In Progress
   - 👀 In Review
   - ✅ Done

5. Ajoutez les 3 issues au board dans "To Do"

---

## 💻 Phase 5 : Développement des Features

### Feature 1 : Dark Mode Toggle

#### 5.1.1 Créer la branche

```bash
git checkout dev
git pull origin dev
git checkout -b feat/dark-mode
```

#### 5.1.2 Déplacer l'issue dans "In Progress"

Sur GitHub Project Board, glissez l'issue #1 vers "In Progress"

#### 5.1.3 Implémenter le Dark Mode

**Modifier `style.css`** - Ajouter en haut :

```css
:root {
    --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --bg-card: rgba(255, 255, 255, 0.1);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.8);
    --border-color: rgba(255, 255, 255, 0.2);
}

[data-theme="light"] {
    --bg-primary: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --bg-card: rgba(255, 255, 255, 0.9);
    --text-primary: #2d3748;
    --text-secondary: #4a5568;
    --border-color: rgba(0, 0, 0, 0.1);
}

body {
    background: var(--bg-primary);
    color: var(--text-primary);
}

.container {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
}

/* Ajouter le bouton de toggle */
.theme-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.3);
}
```

**Modifier `index.html`** - Ajouter dans le header :

```html
<header>
    <h1>TaskMaster <span class="badge">Pro</span></h1>
    <button class="theme-toggle" id="theme-toggle">
        <i class="fas fa-moon"></i>
    </button>
    <p id="date-display"></p>
</header>
```

**Modifier `app.js`** - Ajouter après l'initialisation :

```javascript
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Change icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
});

// Set initial icon
const icon = themeToggle.querySelector('i');
icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
```

#### 5.1.4 Tester

```bash
npm test
npm start
```

Vérifiez que le toggle fonctionne et que le thème persiste après rafraîchissement.

#### 5.1.5 Commiter et Pousser

```bash
git add .
git commit -m "feat(ui): add dark mode toggle with localStorage persistence

- Add CSS variables for theming
- Create theme toggle button
- Implement theme switching logic
- Save theme preference to localStorage
- Update icon based on current theme

Closes #1"
git push origin feat/dark-mode
```

#### 5.1.6 Créer la Pull Request

1. Allez sur GitHub
2. Cliquez sur "Compare & pull request"
3. Base: `dev` ← Compare: `feat/dark-mode`
4. Titre: `feat: Add dark mode toggle`
5. Description:
   ```markdown
   ## Changes
   - ✅ Added dark/light theme toggle
   - ✅ CSS variables for theming
   - ✅ localStorage persistence
   - ✅ Dynamic icon switching
   
   ## Screenshots
   [Add screenshots if possible]
   
   ## Testing
   - [x] Manual testing completed
   - [x] All tests passing
   - [x] Theme persists after refresh
   
   Closes #1
   ```
6. Déplacez l'issue dans "In Review" sur le Project Board
7. Demandez une review (ou auto-review si seul)
8. Une fois approuvé, mergez dans `dev`
9. Déplacez l'issue dans "Done"

---

### Feature 2 : Task Priority (Répétez le processus)

```bash
git checkout dev
git pull origin dev
git checkout -b feat/task-priority
```

**Modifications à faire** :

1. Ajouter un champ `priority` à l'objet task
2. Ajouter un sélecteur de priorité dans le formulaire
3. Afficher un badge de couleur selon la priorité
4. Mettre à jour les tests

**Commit et PR** comme pour la Feature 1

---

### Feature 3 : Task Due Dates (Répétez le processus)

```bash
git checkout dev
git pull origin dev
git checkout -b feat/task-due-dates
```

**Modifications à faire** :

1. Ajouter un champ `dueDate` à l'objet task
2. Ajouter un date picker
3. Afficher la date d'échéance
4. Mettre en évidence les tâches en retard
5. Ajouter un tri par date

**Commit et PR** comme pour les features précédentes

---

## 🚀 Phase 6 : Déploiement

### 6.1 Merger dev dans main

Une fois toutes les features mergées dans `dev` :

```bash
git checkout main
git pull origin main
git merge dev
git push origin main
```

### 6.2 Vérifier le déploiement

1. Allez sur GitHub → Actions
2. Regardez le workflow "TP4 TaskMaster CI/CD" s'exécuter
3. Attendez que le déploiement soit terminé (✅ vert)
4. Visitez : https://HiXaM94.github.io/Git_DevOps_Proj/tp4-task-manager/

### 6.3 Activer GitHub Pages (si pas déjà fait)

1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

---

## ✅ Checklist Finale TP4

### Code & Structure
- [x] Code propre et structuré
- [x] Fichiers bien organisés
- [x] ESLint configuré
- [x] Commentaires pertinents

### Collaboration
- [ ] Au moins 2 branches avec PRs
- [ ] Code reviews sur les PRs
- [ ] Historique de commits propre
- [ ] Conventional commits utilisés

### Documentation
- [ ] README.md complet avec badges
- [ ] CONTRIBUTING.md présent
- [ ] DEPLOY.md créé
- [ ] Lien de démo fonctionnel
- [ ] Section contributeurs

### CI/CD
- [ ] Workflow GitHub Actions fonctionnel
- [ ] Tests automatisés
- [ ] Linting automatisé
- [ ] Déploiement automatique
- [ ] Badges de statut

### Déploiement
- [ ] URL de production accessible
- [ ] Déploiement automatique sur merge
- [ ] Performance optimale
- [ ] Responsive design vérifié

### Gestion de Projet
- [ ] 3+ issues créées
- [ ] Project Board Kanban actif
- [ ] Issues liées aux PRs
- [ ] Workflow visible

---

## 🎯 Prochaines Étapes : TP5

Une fois TP4 terminé, vous serez prêt pour TP5 qui ajoute :

- 🔐 Gestion des secrets (API keys, tokens)
- 🌍 Déploiement multi-environnements (staging + prod)
- 🔄 Rollback automatique
- 📢 Notifications de déploiement
- 🏷️ Versioning avec tags Git
- 🧪 Tests E2E avec Playwright
- 🔌 Intégration backend/API
- 📊 Métriques et monitoring

---

## 📚 Ressources Utiles

- [GitHub Actions](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Pages](https://pages.github.com/)
- [Jest Documentation](https://jestjs.io/)
- [ESLint](https://eslint.org/)

---

**Bon courage ! 🚀**
