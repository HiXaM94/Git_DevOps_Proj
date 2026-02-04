# TP3 - Portfolio CI/CD 🚀

Ce projet est une démonstration d'intégration et de déploiement continu (CI/CD) avec GitHub Actions.

## 🔗 Liens

- **URL de déploiement** : [À compléter après déploiement]
- **Status CI** : [![TP3 CI/CD](https://github.com/HiXaM94/Git_DevOps_Proj/actions/workflows/tp3-deploy.yml/badge.svg)](https://github.com/HiXaM94/Git_DevOps_Proj/actions/workflows/tp3-deploy.yml)

## 🛠️ Installation locale

1. Cloner le repo :
   ```bash
   git clone https://github.com/HiXaM94/Git_DevOps_Proj.git
   cd Git_DevOps_Proj/tp3-portfolio
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer les tests :
   ```bash
   npm test
   ```

## 🔄 Pipeline CI/CD

Le workflow `.github/workflows/tp3-deploy.yml` effectue les actions suivantes :
1. **Trigger** : À chaque push sur `main` ou Pull Request modifiant le dossier `tp3-portfolio/`.
2. **Build & Test** : Installe les dépendances et lance `npm test`.
3. **Deploy** : Si les tests passent (sur la branche `main` uniquement), déploie sur GitHub Pages.

## 👥 Collaboration

Pour contribuer :
1. Créer une branche `feature/ma-feature`
2. Faire une Pull Request
3. Attendre que les tests passent ✅
