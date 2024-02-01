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

class Teacher {
  #id; // Private variable
  #students = []; // Private variable

  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.#id = Teacher.generateId();
  }

  static generateId() {
    return Math.floor(Math.random() * 1000);
  }

  addStudent(student) {
    this.#students.push(student);
    console.log(`${student.name} with ID ${student.getId()} has been added to ${this.name}'s class.`);
  }

  listStudents() {
    console.log(`Students in ${this.name}'s class:`);
    this.#students.forEach(student => {
      console.log(`${student.name} with ID ${student.getId()} - Grade: ${student.grade}`);
    });
  }
}

// Creating instances
const ben = new Teacher('Ben', 'Technical');
const gonzalo = new Teacher('Gonzalo', 'Technical');
const motun = new Teacher('Motun', 'L&D');

const nicoleB = new Student('Nicole', 8);
const nicoleJ = new Student('Nicole', 7);
const nico = new Student('nico', 9);

// Building the one-to-many relationship
ben.addStudent(nico);
gonzalo.addStudent(nicoleB);

motun.addStudent(nicoleB);
motun.addStudent(nicoleJ);


ben.listStudents();
gonzalo.listStudents();
motun.listStudents();