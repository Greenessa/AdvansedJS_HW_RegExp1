export class Validator {
  constructor (name) {
    this.name = name;
  }
  
  validateUsername() {
    if (/^\D([a-zA-Z_\-]+\d{0,3}[_]*[\-]*)[a-zA-Z]+$/gm.test(this.name)) {
      console.log('Имя соответствует условиям');
    } else {
      console.log('Необходимо изменить имя пользователя в соответствии с требованиями')
    }
  }
}
const hero = new Validator('Pavel-135_Borisov');
hero.validateUsername();

const hero1 = new Validator('Павел-134Борисов');
hero1.validateUsername();

