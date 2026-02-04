const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const db = require('../data/db.json');

// GET /api/stats - Get dashboard statistics (protected)
router.get('/', authMiddleware, (req, res) => {
    res.json({
        totalUsers: db.stats.totalUsers,
        totalRevenue: db.stats.totalRevenue,
        totalOrders: db.stats.totalOrders,
        activeUsers: db.stats.activeUsers,
        lastUpdated: new Date().toISOString()
    });
});

// GET /api/stats/chart - Get chart data (protected)
router.get('/chart', authMiddleware, (req, res) => {
    res.json({
        labels: db.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: db.chartData.revenue,
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)'
            },
            {
                label: 'Orders',
                data: db.chartData.orders,
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.1)'
            }
        ]
    });
});

// GET /api/stats/recent - Get recent activities (protected)
router.get('/recent', authMiddleware, (req, res) => {
    res.json({
        activities: db.recentActivities
    });
});

module.exports = router;
