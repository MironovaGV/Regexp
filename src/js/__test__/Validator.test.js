import Validator from '../Validator';

test('Проверка корректного имени', () => {
  expect(Validator.validateUsername('userName')).toBe(true);
});

test('Проверка имени с числом в начале', () => {
  expect(Validator.validateUsername('2userName')).toBe(false);
});

test('Проверка имени с числом в конце', () => {
  expect(Validator.validateUsername('userName2')).toBe(false);
});

test('Проверка имени с подчерчиванием в начале', () => {
  expect(Validator.validateUsername('_userName')).toBe(false);
});

test('Проверка имени, в котором больше 3х цифр подряд', () => {
  expect(Validator.validateUsername('user33333Name')).toBe(false);
});

test('Проверка имени, в котором 3 цифры подряд', () => {
  expect(Validator.validateUsername('user333Name')).toBe(true);
});

test('Проверка имени, в котором 3 цифры подряд', () => {
  expect(Validator.validateUsername('user+=Name')).toBe(false);
});

test('Проверка имени, начинающегося с тире', () => {
  expect(Validator.validateUsername('-user333Name')).toBe(false);
});
