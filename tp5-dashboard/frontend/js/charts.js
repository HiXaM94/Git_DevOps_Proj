// API Configuration
const API_URL = 'http://localhost:3000';

// Initialize chart on page load
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    if (token) {
        loadChartData();
    }
});

// Load and display chart data
async function loadChartData() {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API_URL}/api/stats/chart`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            createChart(data);
        }
    } catch (error) {
        console.error('Error loading chart data:', error);
    }
}

// Create Chart.js chart
function createChart(data) {
    const ctx = document.getElementById('statsChart');

    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6,
                borderWidth: 2
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 12,
                            family: 'Inter'
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1e293b',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: '#475569',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                if (context.dataset.label === 'Revenue') {
                                    label += '$' + context.parsed.y.toLocaleString();
                                } else {
                                    label += context.parsed.y.toLocaleString();
                                }
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#334155',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 11
                        },
                        callback: function (value) {
                            return value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 11
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}
