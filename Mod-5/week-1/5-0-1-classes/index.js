// // Generic Class Syntax
// class ClassName {
//   constructor(prop1, prop2) {
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }

//   methodName() {
//     console.log(this.prop1, this.prop2)
//   }
// }

// const instance = new ClassName('a', 'b');
// instance.methodName();


// class GonzoGoon {
//   constructor(name, age, ) {
//     this.name = name;
//     this.age = age;
//     this.programmingLanguages = [] ;
//   }

//   displayGoon(){;
//     return`name: ${this.name} age: ${this.age} Programming Languages: ${this.programmingLanguages}`;
//   }

//   addLanguage(lang){
//     this.programmingLanguages.push(lang);
//   }
// }

// const nicole = new GonzoGoon('Nicole', 11.5)
// console.log(nicole);
// console.log(nicole.name);
// console.log(nicole.displayGoon());
// console.log(nicole.programmingLanguages);
// nicole.addLanguage('javaScript');
// console.log(nicole.programmingLanguages);
// console.log(nicole.displayGoon());

// const rafi= new GonzoGoon('rafi', 72)
// console.log(rafi);
// console.log(rafi.name);
// console.log(rafi.displayGoon());
// console.log(rafi.programmingLanguages);
// rafi.addLanguage('css');
// console.log(rafi.programmingLanguages);
// console.log(rafi.displayGoon());

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null;
  }
  
  // notice that we don't have commas between methods

  setPassword(newPassword) {
    this.password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
}