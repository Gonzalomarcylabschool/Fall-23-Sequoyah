# Private Properties and Static Methods

- [Private Properties](#private-properties)
  - [Naming Convention](#naming-convention)
  - [Using `#` Notation](#using--notation)
- [Static Methods](#static-methods)
- [Quiz!](#quiz)
- [Challenge](#challenge-car-class)
- [Summary](#summary)

## Private Properties
In the previous lectures, we've been creating classes and instances, but we've left some of our properties open to direct manipulation. For example, in the `User` class, we have a `password` property:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null;
  }

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
ben.password = '1212';// what will this do?
ben.validatePassword('1234'); // is this true?
ben.validatePassword('1212');// what about this one?
```
Ideally, we wouldn't want the `password` property to be directly accessible and modifiable. This is where the concept of __private properties__ comes in.

**<details><summary style="color: purple">Q. What happens when were try to access the password property?</summary>**

The password property is a public property, meaning it can be accessed from outside the class instances. 

You can still directly modify it from outside the class instance. This is generally not recommended for sensitive information like passwords.

</details>

# Naming Convention

JavaScript, prior to ES6, didn't have built-in support for private properties. Developers often used a naming convention to indicate that a property should be treated as private. Conventionally, a property that's intended to be private is prefixed with an underscore `_`. This serves as a signal to other developers that the property shouldn't be accessed directly.

Here's an example using the `_` convention:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this._password = null;// here
  }

  setPassword(newPassword) {
    this._password = newPassword;// here
  }

  validatePassword(passwordToCheck) {
    if (!this._password) {// here
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this._password) {// here
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

While this convention is widely used, it's important to note that it doesn't provide true encapsulation or prevent access to the property. It's more of a suggestion to other developers.

# Using `#` Notation

Starting from ECMAScript 2019, JavaScript introduced a # notation for denoting private fields directly within the class body. This provides a cleaner and more explicit way to declare private properties. In the User class example, the #password is used as a private property.

```js
class User {
  #password;  // Declare the private field here

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = null;
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
}

const ben = new User('ben', 'ben@mail.com');
ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!
```

# Static Methods

So far, all the methods we've defined in our classes are instance methods. This means they operate on instances of the class. However, there are cases where it's more appropriate to define methods that are associated with the class itself rather than its instances. These are called static methods.

Static methods are defined using the `static` keyword before the method name. They are invoked on the class itself, not on instances of the class. Here's an example:

```js
class User {
  #password;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = null;
    this.isAdmin = false; // Default value for isAdmin
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

  // Static method to make a user an admin
  static makeAdmin(user) {
    user.isAdmin = true;
    console.log(`${user.name} is now an admin.`);
  }
}

const ben = new User('ben', 'ben@mail.com');
ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!

console.log(ben.isAdmin); // false
User.makeAdmin(ben);
console.log(ben.isAdmin); // true

```
**<details><summary style="color: purple">Q. Why would it be better for `makeAdmin` to be a static method rather than a instance method?</summary>**
Clarity of Intent:

* Using a static method clearly communicates that the operation is related to the User class itself, not to a specific user instance.
* Enhances code readability by indicating that the method affects the class's behavior at a higher level.

Avoiding Unnecessary Instantiation:

* Making makeAdmin an instance method would require creating an instance just to make a user an admin.
* As a static method, it avoids unnecessary instantiation for this specific operation.

In general we would want to avoid the following:
```js
ben.makeAdmin();
gonzalo.makeAdmin();
zae.makeAdmin();
// If we want to make an admin it should be:
User.makeAdmin(ben);
User.makeAdmin(gonzalo);
User.makeAdmin(zae);
```
</details>
# Quiz!

Consider the following code snippet:

```js
class Counter {
  #value = 0;

  increment() {
    this.#value++;
  }

  getValue() {
    return this.#value;
  }

  static reset() {
    this.#value = 0;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increment();
counter1.increment();

console.log(counter1.getValue()); // ?
console.log(counter2.getValue()); // ?

Counter.reset();

console.log(counter1.getValue()); // ?
console.log(counter2.getValue()); // ?

```
### What do you think will log to the console?
<details><summary>Answer</summary>

```js
console.log(counter1.getValue()); // 2
console.log(counter2.getValue()); // 0

console.log(counter1.getValue()); // TypeError: Cannot read private member #value from an object whose class did not declare it
console.log(counter2.getValue()); // TypeError: Cannot read private member #value from an object whose class did not declare it

```

Explanation:

`counter1` has its own private #value property, which is different from the one in `counter2`.
When `Counter.reset()` is called, it tries to access the private `#value` property on the class itself, resulting in a TypeError.
</details>

### What is the purpose of using the # notation for a property in a class?
<details><summary>Answer</summary>

It indicates a private property.

The `#` notation in JavaScript is used to indicate private fields within a class. It means that the property is intended to be private and not directly accessible from outside the class. This helps in encapsulation, ensuring that the property is not accidentally or intentionally modified from external code.

</details>

### How do you call a static method on a class?

<details><summary>Answer</summary>

`ClassName.staticMethod()`

To call a static method in JavaScript, you use the class name followed by the method name. Static methods are associated with the class itself, not with instances of the class. Therefore, you don't need to create an instance to call a static method. The correct syntax is `ClassName.staticMethod()`.

</details>

## Challenge: Car Class

Lets create a class called `Car` that has the following:

* Utilize a private property #licensePlate for encapsulation.
* Include public properties: `make`, `model`, and `year`.
* Implement an instance method `displayInfo()` that logs information about the car.
* Implement another instance method `honkHorn()` to simulate honking the car's horn in the console.
* Use a static method called `generateLicensePlate()` that a license plate `'ABC123'`.


## Summary

In this lecture, we covered the concept of private properties in JavaScript classes using naming conventions and the `#` notation. We also explored static methods and their use cases, creating a makeAdmin static method for the User class. Static methods provide a way to define utility functions associated with a class itself, rather than with instances of the class.