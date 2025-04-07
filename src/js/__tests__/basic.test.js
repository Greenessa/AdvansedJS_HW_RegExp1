
import {Validator} from '../basic';

test('check name ok', () => {
  const result = new Validator('Pavel-135_Borisov');
  expect(result.validateUsername()).toBe('Имя соответствует условиям');
});

test('check name no', () => {
  const result = new Validator('Павел-134Борисов');
  expect(result.validateUsername()).toBe('Необходимо изменить имя пользователя в соответствии с требованиями');
});
