# Classes - The Basics

[Fork Repo here](https://github.com/The-Marcy-Lab-School/5-0-1-classes-f23)

- [Intro](#intro)
- [Inheritance](#inheritance)
- [Classes](#classes)
  - [Class Constructor and `new`](#class-constructor-and-new)
  - [`this` in a Constructor](#this-in-a-constructor)
  - [Defining Class Methods](#defining-class-methods)
- [Quiz!](#quiz)
- [Challenge](#challenge)
- [Summary](#summary)


## Intro

In the last lecture, we learned about **encapsulation** - bundling data and methods that act on that data into an object. We learned about using **closures** to create **private variables**.

```js
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  return {
    getFriends() {
      return [...friends]; 
    },
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
    }
  }
}
```

While this certainly achieves the main objectives of **encapsulation**, the remaining pillars of Objct-Oriented Programming (OOP) are not satisfied:

* **Inheritance** - sharing behavior between objects
* **Abstraction** - hiding complexity through functions and prototypes
* **Polymorphism** - similar objects can be used interchangeably

## Inheritance

The pillar of **inheritance** is all about sharing behavior between objects.

The nice thing about encapsulation is that we can re-use `makeFriendsManager` to create multiple objects that look alike: each friends manager has `getFriends` and `addFriends` methods. 

This kind of function is called a **factory function** and each object created from this factory function is called an **instance**.

```js
// factory functions return objects
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  return {
    getFriends() {...},
    addFriend(newFriend) { ... },
  }
}

// instances of the factory function
const myFM = makeFriendsManager();
const yourFM = makeFriendsManager();
```

The objects `myFM` and `yourFM` definitely have the same behavior. But do they _share_ that behavior? That is, **are the methods that they each have referencing the same exact function?**

```js
// are these the same object?
console.log(myFM === yourFM)

// are the methods of these objects the same?
console.log(myFM.addFriend === yourFM.addFriend)
```

**<details><summary style="color: purple">Q: Are the methods that they each have referencing the same exact function?</summary>**
> No! They are not the same. Each time the factory function is invoked, a brand new object is made and the methods are recreated as well. 
> This is a waste of memory.
</details><br>

## Classes

To achieve true **inheritance** where objects can be created that share a set of methods, we define a **class**.

A **class** defines a type of object. 
* It has a **constructor function** for defining the default properties that every **instance** of that class (objects of that type) will have. 
* All instances of that class inherit the class' methods. 

**<details><summary style="color: purple">Q: Suppose we wanted to create a class to represent users. What would the default properties be? What methods would be shared by each instance? </summary>**

> * The `User` class would have a **constructor function** for making a `User` isntance with properties like `username`, `email`, and `password`
> * The `User` class might have methods like `changeUsername` or `setPassword`

</details><br>



### Class Constructor and `new`

Many languages implement classes in some manner. In JavaScript it starts with the `class` keyword and then an uppercase name, like this:

```js
class User {

}
```

Inside the curly braces we define a **constructor function** which allows us to create **instances** by invoking the name of the class with the `new` keyword.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null; // to be set later
  }
}
const ben = new User('ben', 'ben@mail.com');
const zo = new User('zo', 'zo@mail.com');
console.log(ben, zo);
// User { name: 'ben', email: 'ben@mail.com, password: null }
// User { name: 'zo', email: 'zo@mail.com, password: null }
```

Classes have some quirks to get used to:
* Invoking `new User` will invoke the `constructor` function inside of the `class`.
* You have to invoke that function with the `new` keyword (you'll get an error if you don't)

```js
// User is a function, but you can't just call it
console.log(typeof User); // function

User('ben', 'ben@mail.com'); // error: you must use the new keyword to invoke a constructor function
```


### `this` in a Constructor

`this` is one of the most complicated topics in JavaScript. It is very quirky. But to keep things simple, let's start here:

* `this` ALWAYS points to an object.
* When used as method of an object, **`this` refers to the object that invokes the method.**
* When a `constructor` function is invoked with the `new` keyword, a new object will be created and `this` will point to the newly created object.

```js
class User {
  constructor(name, email) {
    // this = {};
    this.name = name;
    this.email = email;
    this.password = null;
    console.log(this);
    // return this;
  }
}
const ben = new User('ben', 'ben@mail.com');
// User { name: 'ben', email: 'ben@mail.com, password: null }

const zo = new User('zo', 'zo@mail.com');
// User { name: 'zo', email: 'zo@mail.com, password: null}
```

### Defining Class Methods

Remember, **encapsulation** wants us to bundle data with methods that operate on that data.

Adding methods to a `class` definition looks like this:

```js
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
const ben = new User('ben', 'ben@mail.com');

ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!
```

When used in a method, the `this` keyword refers to the object that is invoking the method.

```js
const ben = new User('ben', 'ben@mail.com');
const zo = new User('zo', 'zo@mail.com');

// they are the same method
console.log(ben.setPassword === zo.setPassword); // true

// when we invoke the method, the value of `this` changes
ben.setPassword('1234');
zo.validatePassword('1234'); // No password set.
```

Next time, we'll look at making the password private.

## Quiz!

Can you spot the mistake(s) with the code below?

```js
const Animal = {
  constructor: (species, sound) => {
    this.owners = [];
    this.species = species;
    this.sound = sound;
  },
  makeSound() {
    console.log(sound)
  }
}

const dog = Animal('canine', 'woof');
```

**<details><summary style="color: purple">Q: Answer</summary>**
> The following mistakes are made:
> * `const` is used instead of `class` to define the `Animal` class
> * We don't need the `=` to create the class
> * The `constructor` function should be written like this: `constructor () {}` without the `:` and `=>`
> * We don't need a comma to separate the methods
> * `makeSound` should use `this.sound`
> * When creating an instance of `Animal`, the `new` keyword should be used.
>
> ```js
> class Animal {
>   constructor (species, sound) {
>     this.owners = [];
>     this.species = species;
>     this.sound = sound;
>   }
>   makeSound() {
>     console.log(this.sound)
>   }
> }
> 
> const dog = new Animal('canine', 'woof');
> ```

</details><br>

## Challenge

Create a class called `FoodItem`. Every instance of `FoodItem` should have the following properties and methods
* `name` — the name of the item
* `price` - the price of the item in US dollars
* `weight` - the weight of the item
* `getPricePerPound()` - returns the price / pound of the item

For example, I should be able to use this `FoodItem` class like so

```js
const apple = new FoodItem('apple', 1, 0.5);
console.log(apple); 
// FoodItem { name: 'apple', price: 1, weight: 0.5 }

console.log(apple.getPricePerPound());
// 2
```

**<details><summary style="color: purple">Q: Solution</summary>**

```js
class FoodItem {
  constructor(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
  getPricePerPound() {
    return this.price/this.weight;
  }
}
```
</details><br>

Now, create a second class called `ShoppingCart`. Every instance of `ShoppingCart` should have the following properties and methods:
* `items` — an array that starts empty. It should hold `FoodItem` instances.
* `addItem(FoodItem)` — takes in a `FoodItem` instance and adds it to the `items` array.
* `getTotalPrice()` - calculates the total price of all `FoodItems` in the `items` array

For example, I should be able to use this `ShoppingCart` class like so

```js
const myCart = new ShoppingCart();
console.log(myCart); // ShoppingCart { items: [] }

myCart.addItem(new FoodItem('apple', 1, 0.5)) // name, price, weight
myCart.addItem(new FoodItem('bread', 5, 1))
myCart.addItem(new FoodItem('cheese', 7, 2))
console.log(myCart); // ShoppingCart { items: Array(3) }

console.log(myCart.getTotalPrice()); // 13
```

**<details><summary style="color: purple">Q: Solution</summary>**

```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    // we can get fancy and ensure that the incoming item is a FoodItem with instanceof
    if (!(item instanceof FoodItem)) return;

    this.items.push(item);
  }
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0)
  }
}
```
</details><br>

## Summary

* **Inheritance** is a pillar of Object-Oriented Programming that focuses on objects sharing and inheriting methods from a class.
* A **class** defines a type of object. 
  * It has a **constructor function** for defining the default properties that every **instance** of that class (objects of that type) will have. 
  * All instances of that class inherit the class' methods. 
* Classes are defined using the `class` keyword
* Instances of a class are created using the `new` keyword and the class constructor.
* When used in a constructor function, `this` points to the newly created object
  * When used in a method, `this` points to the object invoking the method

```js
class Animal {
  constructor (species, sound) {
    this.owners = [];
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound)
  }
}

const dog = new Animal('canine', 'woof');
dog.makeSound(); // 'woof'

const cat = new Animal('feline', 'meow');
cat.makeSound(); // 'meow'
```