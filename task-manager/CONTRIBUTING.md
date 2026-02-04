# Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet ! Ce document décrit les conventions et les étapes à suivre pour contribuer efficacement.

---

## 📋 Table des matières

- [Règles de nommage des branches](#règles-de-nommage-des-branches)
- [Convention de commits](#convention-de-commits)
- [Processus de contribution](#processus-de-contribution)
- [Politique de validation](#politique-de-validation)
- [Vérification de l'intégrité du code](#vérification-de-lintégrité-du-code)

---

## 🌿 Règles de nommage des branches

Nous utilisons une convention de nommage stricte pour les branches afin de maintenir un historique Git clair et organisé.

### Format général
```
<type>/<description-courte>
```

### Types de branches

| Type | Description | Exemple |
|------|-------------|---------|
| `feat/` | Nouvelle fonctionnalité | `feat/contact-form` |
| `fix/` | Correction de bug | `fix/navbar-responsive` |
| `docs/` | Documentation uniquement | `docs/api-readme` |
| `style/` | Changements de style/CSS | `style/button-colors` |
| `refactor/` | Refactorisation du code | `refactor/auth-module` |
| `test/` | Ajout ou modification de tests | `test/login-validation` |
| `chore/` | Tâches de maintenance | `chore/update-dependencies` |

### Branches principales

- **`main`** : Branche de production, toujours stable
- **`develop`** : Branche de développement, intégration des nouvelles fonctionnalités

### Exemples
```bash
feat/navbar
fix/footer-alignment
docs/contributing-guide
style/responsive-design
refactor/database-queries
test/user-authentication
chore/ci-setup
```

---

## 💬 Convention de commits

Nous suivons la convention **Conventional Commits** pour des messages de commit clairs et cohérents.

### Format
```
<type>(<scope>): <description>

[corps optionnel]

[footer optionnel]
```

### Types de commits

| Type | Description |
|------|-------------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage, style (pas de changement de code) |
| `refactor` | Refactorisation du code |
| `test` | Ajout ou modification de tests |
| `chore` | Tâches de maintenance |
| `perf` | Amélioration des performances |
| `ci` | Changements CI/CD |

### Exemples
```bash
feat(contact): add contact form with validation
fix(navbar): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(css): improve button hover effects
refactor(auth): simplify login logic
test(api): add unit tests for user endpoints
chore(deps): update dependencies to latest versions
ci(actions): add HTML validation workflow
```

### Règles importantes
- Utiliser l'impératif présent ("add" et non "added")
- Première lettre en minuscule
- Pas de point à la fin de la description
- Limiter la description à 72 caractères maximum
- Ajouter un corps de commit pour les changements complexes

---

## 🔄 Processus de contribution

### 1. Fork et Clone

```bash
# Fork le projet sur GitHub (via l'interface web)

# Clone votre fork
git clone https://github.com/VOTRE-USERNAME/Git_DevOps_Proj.git
cd Git_DevOps_Proj

# Ajouter le dépôt original comme remote
git remote add upstream https://github.com/ORIGINAL-OWNER/Git_DevOps_Proj.git
```

### 2. Créer une branche

```bash
# Synchroniser avec develop
git checkout develop
git pull upstream develop

# Créer une nouvelle branche
git checkout -b feat/ma-nouvelle-fonctionnalite
```

### 3. Développer et commiter

```bash
# Faire vos modifications

# Vérifier les fichiers modifiés
git status

# Ajouter les fichiers
git add .

# Commiter avec un message conventionnel
git commit -m "feat(module): add new feature description"
```

### 4. Pousser et créer une Pull Request

```bash
# Pousser votre branche
git push origin feat/ma-nouvelle-fonctionnalite

# Créer une Pull Request sur GitHub (via l'interface web)
```

### 5. Synchroniser avec upstream

```bash
# Récupérer les dernières modifications
git fetch upstream

# Merger les changements dans votre branche locale
git checkout develop
git merge upstream/develop

# Rebaser votre branche de travail
git checkout feat/ma-nouvelle-fonctionnalite
git rebase develop
```

---

## ✅ Politique de validation

### Critères de validation d'une Pull Request

1. **Code Review** : Au moins **1 reviewer** doit approuver la PR
2. **Tests** : Tous les tests doivent passer (CI/CD)
3. **Conflits** : Aucun conflit avec la branche cible
4. **Convention** : Respect des conventions de nommage et de commits
5. **Documentation** : Mise à jour de la documentation si nécessaire

### Checklist avant de soumettre une PR

- [ ] Le code suit les conventions du projet
- [ ] Les tests passent localement
- [ ] La documentation est à jour
- [ ] Les commits suivent la convention Conventional Commits
- [ ] La branche est à jour avec `develop`
- [ ] Aucun fichier sensible n'est inclus (.env, credentials, etc.)

### Processus de review

1. **Soumission** : Le contributeur crée une PR
2. **Review** : Un ou plusieurs reviewers examinent le code
3. **Modifications** : Le contributeur apporte les corrections demandées
4. **Approbation** : Le reviewer approuve la PR
5. **Merge** : Un mainteneur merge la PR dans `develop`

---

## 🔍 Vérification de l'intégrité du code

### Tests locaux

Avant de pousser votre code, assurez-vous de vérifier :

#### Pour un projet HTML/CSS
```bash
# Validation HTML (si vous avez html5validator installé)
html5validator --root . --also-check-css
```

#### Pour un projet Node.js
```bash
# Installer les dépendances
npm install

# Linter
npm run lint

# Tests
npm test

# Build
npm run build
```

### GitHub Actions

Notre CI/CD vérifie automatiquement :
- ✅ Validation HTML/CSS
- ✅ Tests unitaires
- ✅ Linting du code
- ✅ Build réussi

Les Pull Requests ne peuvent être mergées que si tous les checks passent.

---

## 🆘 Besoin d'aide ?

- Consultez les [Issues](../../issues) existantes
- Créez une nouvelle issue pour signaler un bug ou proposer une fonctionnalité
- Contactez les mainteneurs du projet

---

## 📜 Licence

En contribuant à ce projet, vous acceptez que vos contributions soient sous la même licence que le projet.

---

**Merci pour vos contributions ! 🎉**
