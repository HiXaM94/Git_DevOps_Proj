# Guide GitHub - Issues et Project Board

Ce guide vous accompagne pour compléter les **Parties 2 et 4** du TP2 qui nécessitent l'interface web de GitHub.

---

## 📋 Partie 2 : Mise en place des Issues

### Étape 1 : Accéder à l'onglet Issues

1. Rendez-vous sur votre dépôt GitHub : `https://github.com/VOTRE-USERNAME/Git_DevOps_Proj`
2. Cliquez sur l'onglet **"Issues"** en haut de la page
3. Cliquez sur le bouton vert **"New issue"**

---

### Étape 2 : Créer les 3 Issues requises

#### Issue #1 : Ajouter une section contact

**Titre :**
```
feat: Ajouter une section contact
```

**Description :**
```markdown
## 📝 Description
Ajouter une section contact avec un formulaire permettant aux utilisateurs de nous contacter.

## ✅ Critères d'acceptation
- [ ] Formulaire avec champs : nom, email, message
- [ ] Validation côté client
- [ ] Design responsive
- [ ] Bouton d'envoi fonctionnel

## 🏷️ Labels
- enhancement
- good first issue

## 🔗 Branche associée
`feat/contact-form`
```

**Labels à ajouter :**
- `enhancement`
- `good first issue`

**Assignation :**
- Assignez cette issue à un collaborateur ou à vous-même

---

#### Issue #2 : Mettre en place un système de logs

**Titre :**
```
feat: Mettre en place un système de logs
```

**Description :**
```markdown
## 📝 Description
Implémenter un système de logging pour tracer les actions importantes de l'application.

## ✅ Critères d'acceptation
- [ ] Logger les erreurs serveur
- [ ] Logger les actions utilisateur importantes
- [ ] Rotation des fichiers de logs
- [ ] Niveaux de logs : INFO, WARN, ERROR

## 🏷️ Labels
- enhancement
- backend

## 🔗 Branche associée
`feat/logging-system`

## 📚 Ressources
- [Winston](https://github.com/winstonjs/winston) pour Node.js
- [Morgan](https://github.com/expressjs/morgan) pour HTTP logging
```

**Labels à ajouter :**
- `enhancement`
- `backend`

---

#### Issue #3 : Corriger le responsive du footer

**Titre :**
```
fix: Corriger le responsive du footer
```

**Description :**
```markdown
## 🐛 Description du bug
Le footer ne s'affiche pas correctement sur mobile (< 768px).

## 🔍 Comportement actuel
- Les éléments se chevauchent
- Le texte dépasse du conteneur
- Les liens ne sont pas cliquables

## ✅ Comportement attendu
- Footer responsive sur tous les écrans
- Éléments bien alignés
- Tous les liens accessibles

## 📱 Appareils concernés
- Mobile (< 768px)
- Tablette (768px - 1024px)

## 🏷️ Labels
- bug
- css
- responsive

## 🔗 Branche associée
`fix/footer-responsive`
```

**Labels à ajouter :**
- `bug`
- `css`
- `responsive`

---

### Étape 3 : Créer les labels personnalisés (si nécessaire)

Si les labels n'existent pas encore :

1. Dans l'onglet **Issues**, cliquez sur **"Labels"**
2. Cliquez sur **"New label"**
3. Créez les labels suivants :

| Nom | Couleur | Description |
|-----|---------|-------------|
| `enhancement` | `#a2eeef` | Nouvelle fonctionnalité |
| `bug` | `#d73a4a` | Quelque chose ne fonctionne pas |
| `good first issue` | `#7057ff` | Bon pour les débutants |
| `backend` | `#0e8a16` | Backend / Serveur |
| `css` | `#fbca04` | Styles CSS |
| `responsive` | `#d4c5f9` | Design responsive |

---

### Étape 4 : Lier les Issues aux branches

Pour chaque issue, créez la branche correspondante :

```bash
# Issue #1 : Contact form
git checkout develop
git checkout -b feat/contact-form
git push origin feat/contact-form

# Issue #2 : Logging system
git checkout develop
git checkout -b feat/logging-system
git push origin feat/logging-system

# Issue #3 : Footer responsive
git checkout develop
git checkout -b fix/footer-responsive
git push origin fix/footer-responsive
```

**Astuce :** Dans la description de votre commit ou PR, utilisez :
- `Closes #1` pour fermer automatiquement l'issue #1 lors du merge
- `Fixes #3` pour fermer l'issue #3
- `Resolves #2` pour fermer l'issue #2

---

## 📊 Partie 4 : GitHub Project Board

### Étape 1 : Activer l'onglet Projects

1. Allez dans **Settings** de votre dépôt
2. Descendez jusqu'à la section **Features**
3. Cochez la case **"Projects"** si elle n'est pas déjà activée

---

### Étape 2 : Créer un nouveau projet

1. Cliquez sur l'onglet **"Projects"** en haut
2. Cliquez sur **"New project"**
3. Choisissez **"Board"** comme template
4. Nommez votre projet : `TP2 - Gestion des tâches`
5. Cliquez sur **"Create project"**

---

### Étape 3 : Configurer les colonnes du Kanban

Par défaut, GitHub crée 3 colonnes : **Todo**, **In Progress**, **Done**.

**Personnalisation (optionnelle) :**

1. Cliquez sur les **"⋮"** à côté du nom de la colonne
2. Renommez si nécessaire :
   - `📝 To do` → Tâches à faire
   - `🚧 In progress` → En cours
   - `✅ Done` → Terminé

3. Ajoutez une colonne supplémentaire (optionnel) :
   - Cliquez sur **"+ Add column"**
   - Nommez-la `🔍 Review` (pour les PR en review)

---

### Étape 4 : Lier les Issues au Project Board

**Méthode 1 : Depuis le Project Board**

1. Dans votre projet, cliquez sur **"+ Add item"** dans la colonne **To do**
2. Tapez `#` pour voir la liste des issues
3. Sélectionnez les issues #1, #2, #3
4. Elles apparaissent maintenant dans la colonne **To do**

**Méthode 2 : Depuis une Issue**

1. Ouvrez une issue (ex: #1)
2. Dans la barre latérale droite, cherchez **"Projects"**
3. Cliquez sur l'icône d'engrenage
4. Sélectionnez votre projet `TP2 - Gestion des tâches`
5. L'issue est automatiquement ajoutée à la colonne **To do**

---

### Étape 5 : Organiser le board

Déplacez les cartes selon leur statut :

```
📝 To do                    🚧 In progress              ✅ Done
├─ #2 Logging system       ├─ #1 Contact form          ├─ (vide pour l'instant)
└─ #3 Footer responsive    └─                          └─
```

**Astuce :** Vous pouvez glisser-déposer les cartes entre les colonnes.

---

### Étape 6 : Automatisation (optionnel)

GitHub Projects peut automatiser certaines actions :

1. Cliquez sur **"⋮"** en haut à droite du projet
2. Sélectionnez **"Workflows"**
3. Activez les workflows suivants :
   - **Auto-add to project** : Ajoute automatiquement les nouvelles issues
   - **Auto-archive** : Archive automatiquement les issues fermées dans "Done"

---

## 🔄 Partie 5 : Créer une Pull Request liée à une Issue

### Étape 1 : Travailler sur une branche

```bash
# Exemple : Travailler sur l'issue #1 (contact form)
git checkout feat/contact-form

# Faire vos modifications
# ...

# Commiter
git add .
git commit -m "feat(contact): add contact form with validation"

# Pousser
git push origin feat/contact-form
```

---

### Étape 2 : Créer la Pull Request

1. Allez sur GitHub, vous verrez un bandeau jaune : **"Compare & pull request"**
2. Cliquez dessus
3. Remplissez le formulaire :

**Titre :**
```
feat(contact): Add contact form
```

**Description :**
```markdown
## 📝 Description
Ajout d'un formulaire de contact avec validation côté client.

## 🔗 Issue liée
Closes #1

## ✅ Checklist
- [x] Code testé localement
- [x] Design responsive
- [x] Validation fonctionnelle
- [ ] Review demandée

## 📸 Screenshots
![Contact Form](url-de-screenshot)

## 🧪 Comment tester
1. Aller sur la page contact
2. Remplir le formulaire
3. Vérifier la validation
```

4. Dans **"Reviewers"**, assignez un collaborateur
5. Dans **"Projects"**, sélectionnez votre projet
6. Cliquez sur **"Create pull request"**

---

### Étape 3 : Review de la PR

**En tant que reviewer :**

1. Ouvrez la PR
2. Allez dans l'onglet **"Files changed"**
3. Ajoutez des commentaires sur les lignes de code
4. Cliquez sur **"Review changes"**
5. Choisissez :
   - **Comment** : Juste un commentaire
   - **Approve** : Approuver la PR
   - **Request changes** : Demander des modifications

**En tant qu'auteur :**

1. Répondez aux commentaires
2. Faites les modifications demandées
3. Poussez les nouveaux commits (la PR se met à jour automatiquement)

---

### Étape 4 : Merger la PR

Une fois approuvée :

1. Cliquez sur **"Merge pull request"**
2. Choisissez le type de merge :
   - **Create a merge commit** : Garde l'historique complet
   - **Squash and merge** : Combine tous les commits en un seul
   - **Rebase and merge** : Rebase les commits
3. Confirmez le merge
4. L'issue #1 se ferme automatiquement (grâce à `Closes #1`)
5. La carte se déplace automatiquement dans **"Done"** sur le board

---

## 📊 Résultat attendu

À la fin, vous devriez avoir :

- ✅ 3 Issues créées et assignées
- ✅ 3 Branches correspondantes
- ✅ 1 Project Board Kanban actif
- ✅ Issues liées au board
- ✅ Au moins 1 PR créée et reviewée
- ✅ Workflow GitHub Actions fonctionnel

---

## 🎯 Checklist finale

- [ ] Issues créées (#1, #2, #3)
- [ ] Labels ajoutés aux issues
- [ ] Issues assignées à des collaborateurs
- [ ] Branches créées selon la convention `type/description`
- [ ] Project Board créé avec colonnes Kanban
- [ ] Issues liées au Project Board
- [ ] Au moins 1 PR créée et liée à une issue
- [ ] PR reviewée par au moins 1 personne
- [ ] PR mergée avec succès
- [ ] GitHub Actions configuré et fonctionnel

---

## 📚 Ressources

- [GitHub Issues Documentation](https://docs.github.com/en/issues)
- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Pull Requests](https://docs.github.com/en/pull-requests)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Bon courage ! 🚀**
