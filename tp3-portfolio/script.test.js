const { add } = require('./script');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds negative numbers correctly', () => {
    expect(add(-1, -2)).toBe(-3);
});
