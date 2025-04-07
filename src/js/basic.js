export class Validator {
  constructor (name) {
    this.name = name;
  }
  
  validateUsername() {
    let res = '';
    if (/^\D([a-zA-Z_-]+\d{0,3}[_]*[-]*)[a-zA-Z]+$/gm.test(this.name)) {
      res = 'Имя соответствует условиям';
      console.log(res);
    } else {
      res = 'Необходимо изменить имя пользователя в соответствии с требованиями';
      console.log(res)
    }
    return res;
  }
}
const hero = new Validator('Pavel-135_Borisov');
hero.validateUsername();

const hero1 = new Validator('Павел-134Борисов');
hero1.validateUsername();

