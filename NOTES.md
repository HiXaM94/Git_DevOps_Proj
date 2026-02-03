# Notes de Développement - TP2

## 📅 Date : 2026-02-03

---

## 🎯 Objectifs du TP2

- [x] Documenter les contributions avec `CONTRIBUTING.md`
- [x] Configurer une intégration continue simple avec GitHub Actions
- [x] Structurer les branches avec conventions
- [x] Apprendre à résoudre un conflit lors du merge

---

## 📝 Partie 6 : Résolution de Conflits Git

### Qu'est-ce qu'un conflit Git ?

Un conflit Git se produit lorsque deux branches modifient la même ligne d'un fichier de manière différente. Git ne peut pas décider automatiquement quelle version conserver, il demande donc une intervention manuelle.

---

### Scénario de simulation de conflit

#### Étape 1 : Créer un conflit intentionnel

**Sur la branche `develop` :**
```bash
# Se placer sur develop
git checkout develop

# Modifier une ligne dans README.md
echo "Version develop - Ligne modifiée" >> README.md

# Commiter
git add README.md
git commit -m "docs(readme): update from develop branch"
```

**Sur la branche `main` :**
```bash
# Se placer sur main
git checkout main

# Modifier la MÊME ligne dans README.md
echo "Version main - Ligne modifiée" >> README.md

# Commiter
git add README.md
git commit -m "docs(readme): update from main branch"
```

---

### Étape 2 : Tenter de merger et déclencher le conflit

```bash
# Se placer sur main
git checkout main

# Tenter de merger develop dans main
git merge develop
```

**Résultat attendu :**
```
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

---

### Étape 3 : Identifier le conflit

```bash
# Vérifier l'état
git status
```

**Sortie :**
```
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   README.md
```

---

### Étape 4 : Examiner le fichier en conflit

Ouvrir `README.md` dans un éditeur. Vous verrez quelque chose comme :

```markdown
# Projet Git DevOps

<<<<<<< HEAD
Version main - Ligne modifiée
=======
Version develop - Ligne modifiée
>>>>>>> develop
```

**Explication des marqueurs :**
- `<<<<<<< HEAD` : Début de la version actuelle (main)
- `=======` : Séparateur entre les deux versions
- `>>>>>>> develop` : Fin de la version à merger (develop)

---

### Étape 5 : Résoudre le conflit manuellement

**Option 1 : Garder la version de `main`**
```markdown
# Projet Git DevOps

Version main - Ligne modifiée
```

**Option 2 : Garder la version de `develop`**
```markdown
# Projet Git DevOps

Version develop - Ligne modifiée
```

**Option 3 : Combiner les deux versions**
```markdown
# Projet Git DevOps

Version main - Ligne modifiée
Version develop - Ligne modifiée (ajout depuis develop)
```

**Option 4 : Réécrire complètement**
```markdown
# Projet Git DevOps

Version finale après résolution du conflit
```

---

### Étape 6 : Marquer le conflit comme résolu

```bash
# Ajouter le fichier résolu
git add README.md

# Vérifier l'état
git status
```

**Sortie :**
```
On branch main
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   README.md
```

---

### Étape 7 : Finaliser le merge

```bash
# Commiter le merge
git commit -m "merge: resolve conflict between main and develop in README.md"

# Vérifier l'historique
git log --oneline --graph --all
```

---

## 🛠️ Outils pour faciliter la résolution de conflits

### 1. Git Mergetool

```bash
# Configurer un outil de merge (ex: VS Code)
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Utiliser l'outil lors d'un conflit
git mergetool
```

### 2. VS Code (Interface graphique)

VS Code détecte automatiquement les conflits et propose des boutons :
- **Accept Current Change** : Garder la version actuelle (HEAD)
- **Accept Incoming Change** : Garder la version entrante (develop)
- **Accept Both Changes** : Garder les deux versions
- **Compare Changes** : Comparer côte à côte

### 3. GitHub Desktop

GitHub Desktop offre une interface visuelle pour résoudre les conflits facilement.

---

## 📊 Résolution de conflit via Pull Request

### Scénario : Conflit dans une PR

1. **Créer une branche et faire des modifications**
```bash
git checkout -b feat/contact-form
# Modifier un fichier
git add .
git commit -m "feat(contact): add contact form"
git push origin feat/contact-form
```

2. **Créer une Pull Request sur GitHub**

3. **Si un conflit apparaît :**
   - GitHub affichera : "This branch has conflicts that must be resolved"
   - Cliquer sur "Resolve conflicts"
   - Éditer directement dans l'interface GitHub
   - Marquer comme résolu
   - Commiter le merge

4. **Alternative : Résoudre localement**
```bash
# Synchroniser avec main
git checkout feat/contact-form
git fetch origin
git merge origin/main

# Résoudre les conflits
# ...

# Pousser la résolution
git push origin feat/contact-form
```

---

## ✅ Bonnes pratiques pour éviter les conflits

1. **Synchroniser régulièrement**
   ```bash
   git fetch origin
   git merge origin/develop
   ```

2. **Communiquer avec l'équipe**
   - Informer quand vous travaillez sur un fichier critique
   - Utiliser les Issues pour coordonner le travail

3. **Faire des commits atomiques**
   - Commits petits et fréquents
   - Un commit = une fonctionnalité/correction

4. **Utiliser des branches de courte durée**
   - Merger rapidement les branches
   - Éviter les branches qui vivent trop longtemps

5. **Rebase avant de merger**
   ```bash
   git checkout feat/ma-branche
   git rebase develop
   ```

---

## 🚨 Commandes utiles en cas de problème

### Annuler un merge en cours
```bash
git merge --abort
```

### Voir les fichiers en conflit
```bash
git diff --name-only --diff-filter=U
```

### Voir les différences
```bash
git diff
```

### Utiliser la version d'une branche spécifique
```bash
# Garder la version de main
git checkout --ours README.md

# Garder la version de develop
git checkout --theirs README.md

# Marquer comme résolu
git add README.md
```

---

## 📚 Ressources supplémentaires

- [Documentation Git - Résolution de conflits](https://git-scm.com/book/fr/v2/Les-branches-avec-Git-Branches-et-fusions%C2%A0%3A-les-bases)
- [Atlassian - Merge Conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
- [GitHub - Resolving a merge conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)

---

## 🎓 Exercice pratique

**Objectif :** Simuler et résoudre un conflit

1. Créer deux branches depuis `develop`
2. Modifier la même ligne dans un fichier sur les deux branches
3. Merger la première branche dans `develop`
4. Tenter de merger la seconde branche
5. Résoudre le conflit
6. Documenter votre démarche

---

**Date de dernière mise à jour :** 2026-02-03
