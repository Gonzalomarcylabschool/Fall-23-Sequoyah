class User {
  #password;  // Declare the private field here

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = null;
    this.isAdmin = false;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.#password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.#password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
  //add static method here
  static makeAdmin(user) {
    user.isAdmin = true;
    console.log(`${user.name} is now an admin.`);
  }
}

const ben = new User('ben', 'ben@mail.com');
const bryant = new User('bryant', 'bryant@gmail.com')
const mohammad = new User('mohammad', 'mo@mgail.com')
console.log(ben);
console.log(bryant);
User.makeAdmin(ben);
console.log(ben);

const newArr = new Array()