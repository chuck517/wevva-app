import {
  Capitalize,
} from '../helpers.js';

it('should capitalize first letter of a string', () => {
  expect(Capitalize('citytown')).toBe('Citytown')
});