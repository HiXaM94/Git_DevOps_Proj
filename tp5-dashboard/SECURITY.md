# Politique de Sécurité - Nexus Dashboard

## 🛡️ Gestion des Secrets

Ce projet utilise des données sensibles qui ne doivent JAMAIS être commises dans le dépôt Git.

### Secrets utilisés
| Nom | Description | Environnement |
|-----|-------------|---------------|
| `API_KEY` | Clé d'API externe (simulée) | Tous |
| `DB_PASSWORD` | Mot de passe base de données | Prod uniquement |
| `SESSION_SECRET` | Signature des cookies de session | Tous |

### Où stocker les secrets ?
1. **Localement** : Dans un fichier `.env` (ajouté au `.gitignore`).
2. **GitHub Actions** : Dans `Settings > Secrets and variables > Actions`.
3. **Production** : Dans les variables d'environnement de l'hébergeur (Railway/Render).

## 🔐 Accès et Autorisations

- La branche `main` est protégée : Code Review obligatoire.
- Seuls les mainteneurs peuvent merger sur `main` et déployer en production.
- Les dépendances sont scannées via `npm audit` à chaque build.

## 🚨 Signaler une faille

Merci d'ouvrir une Issue avec le label `security` ou de contacter directement les mainteneurs.
