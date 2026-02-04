// API Configuration
const API_URL = 'http://localhost:3000';

// Login Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loginBtn = document.getElementById('login-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Disable button during request
            loginBtn.disabled = true;
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';

            try {
                const response = await fetch(`${API_URL}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Save token to localStorage
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));

                    // Redirect to dashboard
                    window.location.href = 'dashboard.html';
                } else {
                    // Show error message
                    showError(data.error || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                showError('Unable to connect to server. Please try again.');
            } finally {
                // Re-enable button
                loginBtn.disabled = false;
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
            }
        });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';

        // Hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
});

// Check if user is already logged in
function checkAuth() {
    const token = localStorage.getItem('token');
    if (token && window.location.pathname.includes('login.html')) {
        window.location.href = 'dashboard.html';
    }
}

checkAuth();
