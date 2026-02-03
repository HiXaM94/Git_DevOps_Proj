# 🚀 Git DevOps Project - TP2

[![HTML Validation](https://github.com/VOTRE-USERNAME/Git_DevOps_Proj/actions/workflows/html-validation.yml/badge.svg)](https://github.com/VOTRE-USERNAME/Git_DevOps_Proj/actions/workflows/html-validation.yml)
[![Node.js CI](https://github.com/VOTRE-USERNAME/Git_DevOps_Proj/actions/workflows/nodejs-ci.yml/badge.svg)](https://github.com/VOTRE-USERNAME/Git_DevOps_Proj/actions/workflows/nodejs-ci.yml)
[![CI/CD Pipeline](https://github.com/VOTRE-USERNAME/Git_DevOps_Proj/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/VOTRE-USERNAME/Git_DevOps_Proj/actions/workflows/ci-cd.yml)

> Projet de travaux pratiques sur Git, GitHub et les pratiques DevOps

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Workflow Git](#workflow-git)
- [Contribution](#contribution)
- [CI/CD](#cicd)
- [Documentation](#documentation)
- [Licence](#licence)

---

## 🎯 À propos

Ce projet est réalisé dans le cadre du **TP2 - Git & DevOps**. Il met en pratique :

- ✅ Gestion des branches avec Git Flow
- ✅ Utilisation des Issues GitHub
- ✅ Project Board Kanban
- ✅ Pull Requests et Code Review
- ✅ Intégration Continue avec GitHub Actions
- ✅ Résolution de conflits Git
- ✅ Documentation collaborative

---

## ✨ Fonctionnalités

### Projets inclus

1. **Color Alchemy** - Application de gestion de couleurs
2. **Price Sniper** - Outil de surveillance de prix

### Fonctionnalités à venir (Issues)

- [ ] Section contact avec formulaire (#1)
- [ ] Système de logs (#2)
- [ ] Amélioration du responsive (#3)

---

## 📁 Structure du projet

```
Git_DevOps_Proj/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── html-validation.yml
│       ├── nodejs-ci.yml
│       └── ci-cd.yml
├── color-alchemy/          # Projet 1
├── price-sniper/           # Projet 2
├── .gitignore
├── CONTRIBUTING.md         # Guide de contribution
├── GIT_COMMANDS.md         # Commandes Git utiles
├── GITHUB_GUIDE.md         # Guide GitHub (Issues, Projects)
├── NOTES.md                # Notes sur la résolution de conflits
└── README.md               # Ce fichier
```

---

## 🚀 Installation

### Prérequis

- Git 2.x ou supérieur
- Node.js 16.x ou supérieur (pour les projets Node.js)
- Un éditeur de code (VS Code recommandé)

### Cloner le projet

```bash
# Cloner le dépôt
git clone https://github.com/VOTRE-USERNAME/Git_DevOps_Proj.git

# Accéder au répertoire
cd Git_DevOps_Proj

# Installer les dépendances (si applicable)
npm install
```

---

## 💻 Utilisation

### Développement local

```bash
# Se placer sur la branche develop
git checkout develop

# Créer une branche de fonctionnalité
git checkout -b feat/ma-fonctionnalite

# Faire vos modifications
# ...

# Commiter
git add .
git commit -m "feat(module): description"

# Pousser
git push origin feat/ma-fonctionnalite
```

### Lancer les tests

```bash
# Tests unitaires
npm test

# Linter
npm run lint

# Build
npm run build
```

---

## 🌿 Workflow Git

### Structure des branches

```
main (production)
  │
  └─── develop (développement)
         │
         ├─── feat/contact-form
         ├─── feat/logging-system
         └─── fix/footer-responsive
```

### Convention de nommage

| Type | Description | Exemple |
|------|-------------|---------|
| `feat/` | Nouvelle fonctionnalité | `feat/navbar` |
| `fix/` | Correction de bug | `fix/footer` |
| `docs/` | Documentation | `docs/readme` |
| `style/` | Style/CSS | `style/buttons` |
| `refactor/` | Refactorisation | `refactor/auth` |
| `test/` | Tests | `test/login` |
| `chore/` | Maintenance | `chore/deps` |

### Convention de commits

Nous suivons **Conventional Commits** :

```bash
feat(scope): add new feature
fix(scope): resolve bug
docs(scope): update documentation
style(scope): format code
refactor(scope): refactor module
test(scope): add tests
chore(scope): update dependencies
```

**Exemples :**
```bash
git commit -m "feat(contact): add contact form with validation"
git commit -m "fix(navbar): resolve mobile menu toggle"
git commit -m "docs(readme): update installation instructions"
```

---

## 🤝 Contribution

Nous accueillons toutes les contributions ! Veuillez consulter notre [Guide de Contribution](CONTRIBUTING.md) pour plus de détails.

### Processus rapide

1. **Fork** le projet
2. **Clone** votre fork
3. **Créez** une branche (`git checkout -b feat/amazing-feature`)
4. **Commitez** vos changements (`git commit -m 'feat: add amazing feature'`)
5. **Poussez** vers la branche (`git push origin feat/amazing-feature`)
6. **Ouvrez** une Pull Request

### Code Review

- Au moins **1 reviewer** requis
- Tous les tests CI/CD doivent passer
- Respect des conventions de code

---

## 🔄 CI/CD

### GitHub Actions

Nous utilisons GitHub Actions pour l'intégration continue :

#### Workflows actifs

1. **HTML Validation** (`html-validation.yml`)
   - Valide le HTML et CSS
   - Déclenché sur push/PR vers `main` et `develop`

2. **Node.js CI** (`nodejs-ci.yml`)
   - Tests sur Node.js 16.x, 18.x, 20.x
   - Lint, tests, build
   - Déclenché sur push/PR vers `main` et `develop`

3. **CI/CD Pipeline** (`ci-cd.yml`)
   - Pipeline complet avec :
     - Vérification qualité du code
     - Validation HTML/CSS
     - Tests Node.js
     - Scan de sécurité
     - Notifications

### Badges de statut

Les badges en haut de ce README indiquent l'état des builds :
- ✅ Vert : Tous les tests passent
- ❌ Rouge : Des tests échouent
- 🟡 Jaune : Build en cours

---

## 📚 Documentation

### Guides disponibles

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guide de contribution complet
- **[GIT_COMMANDS.md](GIT_COMMANDS.md)** - Commandes Git essentielles
- **[GITHUB_GUIDE.md](GITHUB_GUIDE.md)** - Utilisation des Issues et Projects
- **[NOTES.md](NOTES.md)** - Résolution de conflits Git

### Ressources externes

- [Documentation Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Conventional Commits](https://www.conventionalcommits.org)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🎓 Objectifs pédagogiques

Ce projet permet d'apprendre :

- ✅ **Git Flow** : Gestion des branches main/develop
- ✅ **Issues** : Suivi des tâches et bugs
- ✅ **Project Board** : Organisation Kanban
- ✅ **Pull Requests** : Revue de code collaborative
- ✅ **CI/CD** : Automatisation avec GitHub Actions
- ✅ **Résolution de conflits** : Gestion des merges
- ✅ **Documentation** : Bonnes pratiques de documentation

---

## 📊 Statistiques du projet

- **Branches actives** : 4 (main, develop, feat/*, fix/*)
- **Issues ouvertes** : 3
- **Pull Requests** : En cours
- **Contributors** : [Voir sur GitHub](../../graphs/contributors)

---

## 🏆 Livrables TP2

- [x] Fichier `CONTRIBUTING.md` créé
- [x] Issues créées et assignées
- [x] Project Board Kanban configuré
- [x] Pull Request avec review
- [x] Workflow GitHub Actions fonctionnel
- [x] Documentation de résolution de conflits

---

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👥 Auteurs

- **Votre Nom** - *Développeur principal* - [@VotreUsername](https://github.com/VotreUsername)

Voir aussi la liste des [contributeurs](../../contributors) qui ont participé à ce projet.

---

## 🙏 Remerciements

- Merci aux enseignants pour ce TP enrichissant
- Merci à la communauté GitHub pour les outils
- Merci aux contributeurs pour leur aide

---

## 📞 Contact

Pour toute question, n'hésitez pas à :
- Ouvrir une [Issue](../../issues)
- Consulter les [Discussions](../../discussions)
- Contacter les mainteneurs

---

<div align="center">

**⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile ! ⭐**

Made with ❤️ for learning Git & DevOps

</div>
