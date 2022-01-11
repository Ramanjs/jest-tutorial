const capitalize = require('./capitalize');

test('capitalize first char of raman', () => {
  expect(capitalize('raman')).toBe('Raman');
});

test('empty string', () => {
  expect(capitalize('')).toBeUndefined();
})
