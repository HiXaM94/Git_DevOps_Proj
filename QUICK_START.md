# 🚀 Guide de Démarrage Rapide - TP2

## ✅ Ce qui a été fait automatiquement

### 📄 Fichiers créés

Tous les fichiers nécessaires pour le TP2 ont été créés :

```
Git_DevOps_Proj/
├── .github/workflows/          ✅ GitHub Actions CI/CD
│   ├── html-validation.yml     ✅ Validation HTML/CSS
│   ├── nodejs-ci.yml           ✅ Tests Node.js
│   └── ci-cd.yml               ✅ Pipeline complet
├── CONTRIBUTING.md             ✅ Guide de contribution
├── GIT_COMMANDS.md             ✅ Commandes Git
├── GITHUB_GUIDE.md             ✅ Guide GitHub
├── NOTES.md                    ✅ Résolution de conflits
├── README.md                   ✅ Documentation principale
├── LICENSE                     ✅ Licence MIT
└── TP2_RECAP.md                ✅ Récapitulatif complet
```

### 🌿 Branches créées

Toutes les branches ont été créées et poussées sur GitHub :

```
✅ main                      (branche de production)
✅ develop                   (branche de développement)
✅ feat/contact-form         (issue #1)
✅ feat/logging-system       (issue #2)
✅ fix/footer-responsive     (issue #3)
```

**Vérification :** Allez sur GitHub → Votre dépôt → Branches
Vous devriez voir toutes ces branches !

---

## 📋 Ce qu'il reste à faire sur GitHub

### 1️⃣ Créer les Issues (5 minutes)

📍 **Où :** GitHub → Onglet "Issues" → "New issue"

**Créer 3 issues :**

#### Issue #1
```
Titre: feat: Ajouter une section contact
Labels: enhancement, good first issue
Assigné à: Vous-même ou un collaborateur
Branche: feat/contact-form
```

#### Issue #2
```
Titre: feat: Mettre en place un système de logs
Labels: enhancement, backend
Assigné à: Vous-même ou un collaborateur
Branche: feat/logging-system
```

#### Issue #3
```
Titre: fix: Corriger le responsive du footer
Labels: bug, css, responsive
Assigné à: Vous-même ou un collaborateur
Branche: fix/footer-responsive
```

📖 **Guide détaillé :** Voir `GITHUB_GUIDE.md` (Partie 2)

---

### 2️⃣ Créer le Project Board (3 minutes)

📍 **Où :** GitHub → Onglet "Projects" → "New project"

**Étapes :**
1. Cliquer sur "New project"
2. Choisir le template "Board"
3. Nommer : "TP2 - Gestion des tâches"
4. Créer les colonnes :
   - 📝 To do
   - 🚧 In progress
   - ✅ Done
5. Ajouter les 3 issues au board

📖 **Guide détaillé :** Voir `GITHUB_GUIDE.md` (Partie 4)

---

### 3️⃣ Créer une Pull Request (10 minutes)

**Exemple : Travailler sur l'issue #1 (Contact Form)**

```bash
# 1. Se placer sur la branche
git checkout feat/contact-form

# 2. Créer un fichier contact.html (exemple)
echo "<h1>Contact Form</h1>" > contact.html

# 3. Commiter
git add contact.html
git commit -m "feat(contact): add basic contact form structure"

# 4. Pousser
git push origin feat/contact-form
```

**Sur GitHub :**
1. Vous verrez un bandeau jaune "Compare & pull request"
2. Cliquez dessus
3. Remplissez :
   - Titre : `feat(contact): Add contact form`
   - Description : `Closes #1` (pour lier à l'issue)
4. Assignez un reviewer
5. Créez la PR

📖 **Guide détaillé :** Voir `GITHUB_GUIDE.md` (Partie 5)

---

### 4️⃣ Simuler et résoudre un conflit (15 minutes)

**Scénario simple :**

```bash
# 1. Sur develop : modifier README.md
git checkout develop
echo "Version develop" >> README.md
git add README.md
git commit -m "docs(readme): update from develop"

# 2. Sur main : modifier la même ligne
git checkout main
echo "Version main" >> README.md
git add README.md
git commit -m "docs(readme): update from main"

# 3. Tenter de merger develop dans main
git merge develop
# ⚠️ CONFLIT !

# 4. Résoudre le conflit dans README.md
# Éditer le fichier, choisir la version à garder

# 5. Marquer comme résolu
git add README.md
git commit -m "merge: resolve conflict in README.md"
```

📖 **Guide détaillé :** Voir `NOTES.md` (Partie 6)

---

## 🎯 Checklist Finale

### Automatisé ✅
- [x] Documentation créée (CONTRIBUTING.md, README.md, etc.)
- [x] GitHub Actions configuré (3 workflows)
- [x] Branche `develop` créée et poussée
- [x] Branches de fonctionnalités créées et poussées
- [x] Commits avec convention Conventional Commits

### À faire manuellement 📝
- [ ] Créer 3 issues sur GitHub
- [ ] Ajouter les labels aux issues
- [ ] Assigner les issues
- [ ] Créer le Project Board Kanban
- [ ] Lier les issues au board
- [ ] Créer au moins 1 Pull Request
- [ ] Faire reviewer la PR
- [ ] Merger la PR
- [ ] Simuler et résoudre un conflit

---

## 📚 Ressources

### Fichiers de documentation
- **[README.md](README.md)** - Vue d'ensemble du projet
- **[TP2_RECAP.md](TP2_RECAP.md)** - Récapitulatif complet du TP2
- **[GITHUB_GUIDE.md](GITHUB_GUIDE.md)** - Guide étape par étape pour GitHub
- **[GIT_COMMANDS.md](GIT_COMMANDS.md)** - Commandes Git essentielles
- **[NOTES.md](NOTES.md)** - Résolution de conflits
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guide de contribution

### Workflows GitHub Actions
- `.github/workflows/html-validation.yml` - Validation HTML/CSS
- `.github/workflows/nodejs-ci.yml` - Tests Node.js
- `.github/workflows/ci-cd.yml` - Pipeline CI/CD complet

---

## 🆘 Besoin d'aide ?

### Pour Git
```bash
# Voir l'état actuel
git status

# Voir les branches
git branch -a

# Voir l'historique
git log --oneline --graph --all
```

### Pour GitHub
1. Consultez `GITHUB_GUIDE.md` pour les étapes détaillées
2. Regardez les exemples dans chaque section
3. Suivez les checklists

### En cas de problème
- Consultez `GIT_COMMANDS.md` (section "Résolution de problèmes")
- Consultez `NOTES.md` (pour les conflits)
- Ouvrez une issue sur le dépôt

---

## 🎓 Ordre recommandé

1. **Lire la documentation** (15 min)
   - README.md
   - TP2_RECAP.md
   - GITHUB_GUIDE.md

2. **Créer les Issues** (5 min)
   - Suivre GITHUB_GUIDE.md (Partie 2)

3. **Créer le Project Board** (3 min)
   - Suivre GITHUB_GUIDE.md (Partie 4)

4. **Travailler sur une fonctionnalité** (20 min)
   - Choisir une branche (ex: feat/contact-form)
   - Faire des modifications
   - Créer une Pull Request

5. **Review et Merge** (10 min)
   - Faire reviewer la PR
   - Merger dans develop

6. **Simuler un conflit** (15 min)
   - Suivre NOTES.md (Partie 6)
   - Résoudre le conflit
   - Documenter la démarche

---

## 🎉 Félicitations !

Vous avez maintenant :
- ✅ Un projet Git bien structuré
- ✅ Une documentation complète
- ✅ Un workflow CI/CD fonctionnel
- ✅ Des branches organisées selon Git Flow
- ✅ Tous les outils pour réussir le TP2

**Prochaine étape :** Allez sur GitHub et créez vos Issues !

---

**Bon courage ! 🚀**

*Dernière mise à jour : 2026-02-03*
