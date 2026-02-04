# Guide de Déploiement - TP5

Ce projet utilise un pipeline CI/CD automatisé pour déployer sur deux environnements distincts.

## 🏗️ Architecture de Déploiement

- **Staging** : Branche `dev` (ou `staging`) → Déploiement automatique sur environnement de test.
- **Production** : Branche `main` → Déploiement automatique après validation des tests.

## 🚀 Déploiement Automatique (Recommandé)

Le déploiement est géré par GitHub Actions (`.github/workflows/tp5-pipeline.yml`).

### Pré-requis GitHub Secrets
Configurer les secrets suivants dans le repo GitHub :
- `PROD_DEPLOY_HOOK` (URL de webhook pour trigger le déploiement prod)
- `STAGING_DEPLOY_HOOK` (URL de webhook pour staging)
- `SLACK_WEBHOOK` (Optionnel, pour les notifications)

### Workflow
1. Pousser sur `dev` → Déploie en **Staging**.
2. Faire une Pull Request `dev` → `main`.
3. Merger sur `main` → Déploie en **Production**.

## 🛠️ Déploiement Manuel

Si le CI/CD échoue, voici comment déployer manuellement.

### 1. Build
```bash
npm install
npm run build
```

### 2. Configuration Env
Créer un fichier `.env` avec :
```env
PORT=3000
NODE_ENV=production
API_KEY=votre_cle
```

### 3. Lancer
```bash
npm start
```

## 🔙 Rollback (Procédure d'urgence)

En cas de problème critique en production :

**Option A : Via GitHub Actions**
1. Aller dans l'onglet **Actions**.
2. Sélectionner le dernier workflow réussi sur `main`.
3. Cliquer sur **"Re-run jobs"**.

**Option B : Via Git**
1. Revert le commit :
   ```bash
   git revert HEAD
   git push origin main
   ```
2. Le pipeline se relancera automatiquement avec l'ancienne version.
