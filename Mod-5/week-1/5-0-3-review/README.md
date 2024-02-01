# 5-0-3-oop-review

OOP can be defined by its 4 pillars:
* **Encapsulation** - every object should control its own state
* **Abstraction** - hiding complexity through functions and prototypes
* **Inheritance** - sharing behavior between objects
* **Polymorphism** - similar objects can be used interchangeably

## Encapsulation 

In OOP, we store data in objects and give those objects methods to manipulate their own data. This is called **encapsulation**.

```js
// Object Oriented Programming encapsulates data with functionality
const friendsManager = {
  friends: [],
  addFriend(newFriend) {
    this.friends.push(newFriend);
    // `this` refers to the "owner" of the method. 
  }
}
```

## Factory Functions

We can make many instances of objects that have the same properties
```js
const makeGonzaloShoes = () => {
  let id = 0;
  const gonzaloShoes = {
    shoes: [],
    addShoe(brand, model, size, colors ){
      this.shoes.push({
        id,
        brand,
        model,
        size,
        colors,
      })
      id++
    },
    removeShoe(id) {
      const index = this.shoes.findIndex(shoe => shoe.id === id);
      if (index !== -1) {
        this.shoes.splice(index, 1);
      }
    },
  }
  return gonzaloShoes
}
const gonzaloShoeOne = makeGonzaloShoes();
console.log(gonzaloShoeOne);

```

This has its some issues...

**<details><summary style="color: purple">Q: What issues does factory functions have?</summary>**

* No Inheritance
* No Constructors
* Memory Conception
* No Private Properties

</details><br>

## Closure

```js
const createCounter = () => {
  let count = 0;

  const counter = {
    increment: () => {
      count++;
      console.log(`Count: ${count}`);
    },
    reset: () => {
      count = 0;
      console.log('Count reset to 0.');
    },
  };

  return counter;
};

const myCounter = createCounter();
myCounter.increment(); // Count: 1
myCounter.increment(); // Count: 2
myCounter.reset();     // Count reset to 0

```

## Classes

To achieve true **inheritance** where objects can be created that share a set of methods, we define a **class**.

A **class** defines a type of object. 
* It has a **constructor function** for defining the default properties that every **instance** of that class (objects of that type) will have. 
* All instances of that class inherit the class' methods. 


```js
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


ben.addStudent(nico);
Gonzalo.addStudent(nicoleB);

motun.addStudent(nicoleB);
motun.addStudent(nicoleJ);


ben.listStudents();
gonzalo.listStudents();
motun.listStudents();

```


# Challenge

## Library Class

### Instructions:

### Private Properties:

* Utilize private properties using the # notation for encapsulation.
Public Properties:

### Include public properties:

* name: the name of the library.
  * location: the location of the library.
  * books: an array to store book objects.

### Methods:

* Implement an instance method addBook(title, author, genre) that adds a book to the library. Each book should have a unique ID.
* Implement an instance method removeBook(bookID) that removes a book from the library based on its ID.
* Implement an instance method listBooks() that logs information about all books in the library.
* Implement a static method generateLibraryName() that generates a random library name.

```js

const cityLibrary = new Library('City Library', '123 Main St');

// Adding books to the library
cityLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic');
cityLibrary.addBook('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
cityLibrary.addBook('1984', 'George Orwell', 'Dystopian');

// Listing all books
cityLibrary.listBooks();

// Removing a book by ID
cityLibrary.removeBook(2);

// Listing books after removal
cityLibrary.listBooks();

```
Additional Notes:
* Use a private method for generating unique book IDs.
* Feel free to add any additional methods or properties that you think would enhance the functionality of the Library class.
* Ensure that the methods access and manipulate private properties where necessary for encapsulation.