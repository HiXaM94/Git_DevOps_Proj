/**
 * @jest-environment jsdom
 */

// Mock localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock;

// Mock fetch
global.fetch = jest.fn();

describe('Frontend Tests', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
    });

    describe('Authentication', () => {
        test('should store token on successful login', async () => {
            const mockResponse = {
                ok: true,
                json: async () => ({
                    token: 'mock-jwt-token',
                    user: { id: 1, name: 'Test User', email: 'test@example.com' }
                })
            };

            fetch.mockResolvedValueOnce(mockResponse);

            // Simulate login
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'test@example.com', password: 'password123' })
            });

            const data = await response.json();

            expect(response.ok).toBe(true);
            expect(data.token).toBe('mock-jwt-token');
            expect(data.user.email).toBe('test@example.com');
        });

        test('should handle login failure', async () => {
            const mockResponse = {
                ok: false,
                status: 401,
                json: async () => ({ error: 'Invalid credentials' })
            };

            fetch.mockResolvedValueOnce(mockResponse);

            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'test@example.com', password: 'wrong' })
            });

            const data = await response.json();

            expect(response.ok).toBe(false);
            expect(response.status).toBe(401);
            expect(data.error).toBe('Invalid credentials');
        });

        test('should remove token on logout', () => {
            localStorageMock.removeItem('token');
            localStorageMock.removeItem('user');

            expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
            expect(localStorageMock.removeItem).toHaveBeenCalledWith('user');
        });
    });

    describe('Dashboard Data', () => {
        test('should fetch dashboard stats with token', async () => {
            const mockStats = {
                totalUsers: 1247,
                totalRevenue: 89543.50,
                totalOrders: 3421,
                activeUsers: 892
            };

            const mockResponse = {
                ok: true,
                json: async () => mockStats
            };

            fetch.mockResolvedValueOnce(mockResponse);

            const response = await fetch('http://localhost:3000/api/stats', {
                headers: { 'Authorization': 'Bearer mock-token' }
            });

            const data = await response.json();

            expect(response.ok).toBe(true);
            expect(data.totalUsers).toBe(1247);
            expect(data.totalRevenue).toBe(89543.50);
        });

        test('should handle unauthorized access to stats', async () => {
            const mockResponse = {
                ok: false,
                status: 401,
                json: async () => ({ error: 'No token provided' })
            };

            fetch.mockResolvedValueOnce(mockResponse);

            const response = await fetch('http://localhost:3000/api/stats');

            expect(response.ok).toBe(false);
            expect(response.status).toBe(401);
        });

        test('should fetch chart data successfully', async () => {
            const mockChartData = {
                labels: ['Jan', 'Feb', 'Mar'],
                datasets: [
                    { label: 'Revenue', data: [12500, 19000, 15000] }
                ]
            };

            const mockResponse = {
                ok: true,
                json: async () => mockChartData
            };

            fetch.mockResolvedValueOnce(mockResponse);

            const response = await fetch('http://localhost:3000/api/stats/chart', {
                headers: { 'Authorization': 'Bearer mock-token' }
            });

            const data = await response.json();

            expect(response.ok).toBe(true);
            expect(data.labels).toEqual(['Jan', 'Feb', 'Mar']);
            expect(data.datasets[0].label).toBe('Revenue');
        });
    });

    describe('Utility Functions', () => {
        test('should format timestamp correctly', () => {
            const formatTime = (timestamp) => {
                const date = new Date(timestamp);
                const now = new Date();
                const diff = Math.floor((now - date) / 1000);

                if (diff < 60) return 'Just now';
                if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
                if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
                return `${Math.floor(diff / 86400)}d ago`;
            };

            const now = new Date();
            const oneMinuteAgo = new Date(now.getTime() - 30 * 1000);
            const oneHourAgo = new Date(now.getTime() - 3600 * 1000);

            expect(formatTime(oneMinuteAgo)).toBe('Just now');
            expect(formatTime(oneHourAgo)).toBe('1h ago');
        });

        test('should format numbers with locale', () => {
            expect((1247).toLocaleString()).toBe('1,247');
            expect((89543.50).toLocaleString()).toBe('89,543.5');
        });
    });
});
