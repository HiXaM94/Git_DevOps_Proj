# 🚀 Quick Start Guide - Nexus Dashboard

## ⚡ 5-Minute Setup

### 1. Install Dependencies

```bash
# Backend
cd tp5-dashboard/backend
npm install

# Frontend (in new terminal)
cd tp5-dashboard/frontend
npm install
```

### 2. Configure Environment

```bash
# Create .env file
cd backend
cp .env.example .env

# Edit .env with your values (or use defaults for local testing)
```

### 3. Start Development Servers

```bash
# Terminal 1 - Backend (http://localhost:3000)
cd backend
npm run dev

# Terminal 2 - Frontend (http://localhost:3000)
cd frontend
npm run dev
```

### 4. Open Browser

Visit: `http://localhost:3000`

**Demo Login:**
- Email: `admin@nexus.com`
- Password: `password123`

---

## 🧪 Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# All tests with coverage
npm test -- --coverage
```

---

## 📦 Deploy to Production

### Option 1: Automatic (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "feat: deploy Nexus Dashboard"
git push origin main

# GitHub Actions will automatically:
# 1. Run tests
# 2. Deploy to Vercel (frontend)
# 3. Deploy to Render (backend)
# 4. Send notifications
```

### Option 2: Manual

See [DEPLOY.md](./DEPLOY.md) for detailed manual deployment instructions.

---

## 🔐 Configure Secrets

### GitHub Secrets (Required for CI/CD)

Go to: `Settings → Secrets and variables → Actions`

Add these secrets:
- `JWT_SECRET` - Your JWT signing key
- `SESSION_SECRET` - Your session secret
- `VERCEL_TOKEN` - From Vercel dashboard
- `RENDER_API_KEY` - From Render dashboard
- `DISCORD_WEBHOOK` - (Optional) For notifications

---

## 📚 Documentation

- [README.md](./README.md) - Complete project documentation
- [DEPLOY.md](./DEPLOY.md) - Deployment guide
- [SECURITY.md](./SECURITY.md) - Security policies
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [TP5_COMPLETE_SUMMARY.md](./TP5_COMPLETE_SUMMARY.md) - Implementation summary

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000

# Kill process if needed
taskkill /PID <PID> /F

# Or change port in .env
PORT=3001
```

### Frontend can't connect to backend
```bash
# Make sure backend is running on port 3000
# Check CORS settings in backend/server.js
# Verify API_URL in frontend/js/*.js files
```

### Tests failing
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Run tests with verbose output
npm test -- --verbose
```

---

## 🎯 Next Steps

1. ✅ Test locally
2. ✅ Push to GitHub
3. ✅ Configure secrets
4. ✅ Deploy automatically
5. ✅ Submit TP5!

---

**Need help?** Check [TP5_COMPLETE_SUMMARY.md](./TP5_COMPLETE_SUMMARY.md) for detailed information.
