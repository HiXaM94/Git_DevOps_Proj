# Script de Configuration Git - TP2

## 🚀 Partie 1 : Mise à jour du projet

Ce script contient toutes les commandes Git nécessaires pour configurer votre projet selon les exigences du TP2.

---

## Étape 1 : Vérifier l'état actuel

```bash
# Vérifier la branche actuelle
git branch

# Vérifier l'état du dépôt
git status

# Voir l'historique
git log --oneline --graph --all
```

---

## Étape 2 : Créer la branche develop

```bash
# Se placer sur main (si ce n'est pas déjà fait)
git checkout main

# S'assurer que main est à jour
git pull origin main

# Créer la branche develop à partir de main
git checkout -b develop

# Vérifier que vous êtes bien sur develop
git branch
# La branche avec * devrait être develop
```

---

## Étape 3 : Pousser develop sur GitHub

```bash
# Pousser la branche develop sur le dépôt distant
git push origin develop

# Configurer le suivi de la branche distante
git push --set-upstream origin develop
```

---

## Étape 4 : Définir develop comme branche par défaut (optionnel)

Sur GitHub :
1. Allez dans **Settings** > **Branches**
2. Dans **Default branch**, cliquez sur le bouton avec les deux flèches
3. Sélectionnez `develop`
4. Cliquez sur **Update**
5. Confirmez le changement

---

## Étape 5 : Créer les branches pour les issues

```bash
# Retourner sur develop
git checkout develop

# Créer la branche pour l'issue #1 (Contact form)
git checkout -b feat/contact-form
git push origin feat/contact-form

# Retourner sur develop
git checkout develop

# Créer la branche pour l'issue #2 (Logging system)
git checkout -b feat/logging-system
git push origin feat/logging-system

# Retourner sur develop
git checkout develop

# Créer la branche pour l'issue #3 (Footer responsive)
git checkout -b fix/footer-responsive
git push origin fix/footer-responsive

# Retourner sur develop
git checkout develop
```

---

## Étape 6 : Vérifier les branches créées

```bash
# Lister toutes les branches locales
git branch

# Lister toutes les branches (locales et distantes)
git branch -a

# Visualiser l'arbre des branches
git log --oneline --graph --all --decorate
```

---

## 📊 Structure des branches attendue

```
main (production)
  │
  └─── develop (développement)
         │
         ├─── feat/contact-form
         │
         ├─── feat/logging-system
         │
         └─── fix/footer-responsive
```

---

## 🔄 Workflow de développement

### Travailler sur une fonctionnalité

```bash
# 1. Se placer sur develop et mettre à jour
git checkout develop
git pull origin develop

# 2. Créer une branche de fonctionnalité
git checkout -b feat/ma-fonctionnalite

# 3. Faire vos modifications
# ... éditer les fichiers ...

# 4. Commiter les changements
git add .
git commit -m "feat(module): description de la fonctionnalité"

# 5. Pousser la branche
git push origin feat/ma-fonctionnalite

# 6. Créer une Pull Request sur GitHub
# (via l'interface web)

# 7. Après merge, supprimer la branche locale
git checkout develop
git branch -d feat/ma-fonctionnalite

# 8. Mettre à jour develop
git pull origin develop
```

---

## 🛠️ Commandes utiles

### Changer de branche
```bash
git checkout nom-de-branche
```

### Créer et basculer sur une nouvelle branche
```bash
git checkout -b nouvelle-branche
```

### Voir les différences
```bash
# Différences non commitées
git diff

# Différences entre deux branches
git diff main..develop
```

### Mettre à jour une branche avec develop
```bash
# Se placer sur votre branche de travail
git checkout feat/ma-fonctionnalite

# Récupérer les dernières modifications de develop
git fetch origin
git merge origin/develop

# Ou avec rebase (pour un historique linéaire)
git rebase origin/develop
```

### Annuler des modifications
```bash
# Annuler les modifications non commitées d'un fichier
git checkout -- fichier.txt

# Annuler le dernier commit (garder les modifications)
git reset --soft HEAD~1

# Annuler le dernier commit (supprimer les modifications)
git reset --hard HEAD~1
```

---

## 🚨 Résolution de problèmes

### Erreur : "fatal: A branch named 'develop' already exists"

```bash
# La branche existe déjà, basculez simplement dessus
git checkout develop
```

### Erreur : "Your branch is behind 'origin/develop'"

```bash
# Mettre à jour votre branche locale
git pull origin develop
```

### Conflit lors du merge

```bash
# 1. Identifier les fichiers en conflit
git status

# 2. Éditer les fichiers pour résoudre les conflits
# (voir NOTES.md pour plus de détails)

# 3. Marquer comme résolu
git add fichier-resolu.txt

# 4. Finaliser le merge
git commit -m "merge: resolve conflicts"
```

---

## 📝 Checklist Partie 1

- [ ] Branche `main` existe et est à jour
- [ ] Branche `develop` créée à partir de `main`
- [ ] Branche `develop` poussée sur GitHub
- [ ] Branches de fonctionnalités créées :
  - [ ] `feat/contact-form`
  - [ ] `feat/logging-system`
  - [ ] `fix/footer-responsive`
- [ ] Toutes les branches sont visibles sur GitHub
- [ ] Configuration du suivi des branches distantes

---

## 🎯 Prochaines étapes

1. ✅ Créer les Issues sur GitHub (voir `GITHUB_GUIDE.md`)
2. ✅ Configurer le Project Board (voir `GITHUB_GUIDE.md`)
3. ✅ Travailler sur les fonctionnalités
4. ✅ Créer des Pull Requests
5. ✅ Résoudre les conflits si nécessaire (voir `NOTES.md`)

---

**Bon développement ! 🚀**
