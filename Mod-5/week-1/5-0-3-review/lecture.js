const obj = new Object({});
console.log(obj)
 const str = new String('this');
 const arr = new Array([]);
 console.log(arr)
 console.log(str)

 class Student {
  #id; 

  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.#id = Student.generateId(); 
  }

  static generateId() {
    return Math.floor(Math.random() * 1000); 
  }

  getId() {
    return this.#id;
  }
}

const nicoleB = new Student('Nicole', 8);
const nicoleJ = new Student('Nicole', 7);
const nico = new Student('nico', 9);

console.log(nicoleB);
console.log(nicoleJ);
console.log(nico);
