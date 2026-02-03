const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Route - Hello World
app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Hello World! 🌍',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
    🚀 Server is running!
    
    📍 Local:    http://localhost:${PORT}
    📍 API:      http://localhost:${PORT}/api/hello
    
    Press Ctrl+C to stop the server
    `);
});
