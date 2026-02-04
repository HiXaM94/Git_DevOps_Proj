const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../data/db.json');

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user in database
    const user = db.users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.json({
        message: 'Login successful',
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = db.users.find(u => u.email === email);

    if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user (in real app, save to database)
    const newUser = {
        id: db.users.length + 1,
        name,
        email,
        password: hashedPassword,
        role: 'user',
        createdAt: new Date().toISOString()
    };

    res.status(201).json({
        message: 'User registered successfully',
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        }
    });
});

// GET /api/auth/verify
router.get('/verify', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.substring(7);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, user: decoded });
    } catch (error) {
        res.status(401).json({ valid: false, error: 'Invalid token' });
    }
});

module.exports = router;
