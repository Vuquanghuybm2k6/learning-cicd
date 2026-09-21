const { add } = require('./index');

test('add 2 numbers', () => {
  expect(add(2, 3)).toBe(5);
});