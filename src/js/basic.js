export class Validator {
  constructor (name) {
    this.name = name;
  }
  
  validateUsername() {
    if (/[a-zA-Z]*+\d*+-*+_*/g.test(this.name)) {
      console.log('Имя соответствует условиям');
    } else {
      console.log('Необходимо изменить имя пользователя в соответствии с требованиями')
    }
  }
}
const hero = new Validator('Pavel-Borisov_134');
hero.validateUsername();

