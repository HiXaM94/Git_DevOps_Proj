# 🎓 Guide Pratique TP3 : Simulation de vie de projet

Ce guide vous accompagne pour réaliser la partie collaborative du TP3.

## 1. Initialisation
Avant de commencer, assurez-vous d'avoir poussé les fichiers sur GitHub :

```bash
git add .
git commit -m "feat(tp3): init portfolio project with CI/CD"
git push origin main
```

Vérifiez dans l'onglet **Actions** de GitHub que le workflow `TP3 Portfolio CI/CD` s'est lancé et a réussi.

---

## 2. Simulation d'une "Bad PR" (Test qui échoue)

Vous allez simuler un développeur qui casse le code.

1. **Créer une branche** :
   ```bash
   git checkout -b fix/calcul-error
   ```

2. **Modifier le code pour faire échouer le test** :
   Ouvrez `tp3-portfolio/script.js` et modifiez la fonction `add` :
   ```javascript
   function add(a, b) {
       return a - b; // Oups, une erreur !
   }
   ```

3. **Commiter et Pousser** :
   ```bash
   git add tp3-portfolio/script.js
   git commit -m "fix: attempt to optimize calculation"
   git push origin fix/calcul-error
   ```

4. **Créer la Pull Request** :
   - Allez sur GitHub
   - Créez la PR de `fix/calcul-error` vers `main`
   - **Observez** : Le check CI va passer au rouge ❌ (Tests failed)
   - Le bouton "Merge" devrait être bloqué ou déconseillé.

---

## 3. Correction et Merge

1. **Réparer en local** :
   Corrigez `tp3-portfolio/script.js` :
   ```javascript
   function add(a, b) {
       return a + b; // Correction
   }
   ```

2. **Pousser la correction** :
   ```bash
   git add tp3-portfolio/script.js
   git commit -m "fix: resolve calculation bug"
   git push origin fix/calcul-error
   ```

3. **Vérifier** :
   - Retournez sur la PR dans GitHub.
   - Le check CI va relancer les tests.
   - Il devrait passer au vert ✅.

4. **Merger** :
   - Cliquez sur "Merge Pull Request".
   - Le workflow de déploiement (CD) va se lancer sur `main`.
   - Votre site sera mis à jour !

---

## 4. Travail Collaboratif (Binôme)

Pour la partie "Feature X" et "Feature Y" :

**Développeur A (Feature X - Dark Mode) :**
1. `git checkout -b feat/dark-mode`
2. Modifier `style.css` pour ajouter un mode sombre.
3. Push & PR.

**Développeur B (Feature Y - Header dynamique) :**
1. `git checkout -b feat/dynamic-header`
2. Modifier `script.js` pour changer le titre au clic.
3. Push & PR.

Chacun doit reviewer la PR de l'autre !
