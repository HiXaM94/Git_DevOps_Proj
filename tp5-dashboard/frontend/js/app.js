// API Configuration
const API_URL = 'http://localhost:3000';

// Check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    // Load user info
    loadUserInfo();

    // Load dashboard data
    loadDashboardStats();
    loadRecentActivities();

    // Set current date
    setCurrentDate();

    // Logout handler
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

// Load user information
function loadUserInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = user.name;
    }
}

// Set current date
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

// Load dashboard statistics
async function loadDashboardStats() {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API_URL}/api/stats`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();

            // Update stat cards
            document.getElementById('total-users').textContent = data.totalUsers.toLocaleString();
            document.getElementById('total-revenue').textContent = `$${data.totalRevenue.toLocaleString()}`;
            document.getElementById('total-orders').textContent = data.totalOrders.toLocaleString();
            document.getElementById('active-users').textContent = data.activeUsers.toLocaleString();
        } else if (response.status === 401) {
            // Token expired, redirect to login
            logout();
        }
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// Load recent activities
async function loadRecentActivities() {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API_URL}/api/stats/recent`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            displayActivities(data.activities);
        }
    } catch (error) {
        console.error('Error loading activities:', error);
    }
}

// Display activities
function displayActivities(activities) {
    const activitiesList = document.getElementById('activities-list');

    if (!activities || activities.length === 0) {
        activitiesList.innerHTML = '<p class="loading">No recent activities</p>';
        return;
    }

    activitiesList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-info">
                <strong>${activity.user}</strong>
                <p>${activity.action}</p>
            </div>
            ${activity.amount ? `<div class="activity-amount">${activity.amount}</div>` : ''}
            <div class="activity-time">${formatTime(activity.timestamp)}</div>
        </div>
    `).join('');
}

// Format timestamp
function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // difference in seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
}

// Logout function
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}
