/* 
* 
* This is good but it could be better. Let's add
* lets add an _ to password and see if that helps to solve our problem?
* 
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this._password = null;
  }

  setPassword(newPassword) {
    this._password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this._password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this._password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
}

const ben = new User('ben', 'ben@mail.com');
ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!
console.log(ben._password)
ben._password = 1212;
ben.validatePassword('1234')

