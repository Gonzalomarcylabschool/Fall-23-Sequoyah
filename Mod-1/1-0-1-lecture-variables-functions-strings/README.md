# Variables,Functions,and Strings

### Resources
* [Slides](https://docs.google.com/presentation/d/178eHpZ4_17Osdocypd6_4nEiFJ1kJBXPj8t49P3jfHU/edit#slide=id.g28b48f17088_0_238)

### Lecture Objectives

- `const` vs `let` vs `var` keyword and avoid variable hoisting.
- Primitive Data Types 
- Understand how Functions work in all aspects
- Introductions to scope
- Learn how strings work and methods that we can use to manipulate/ work with them.

### Key Terms / Commands / Code

**Main terms**
Variable
Function
String
Method
Scope
Expression 
Statement
**Commands**

**Code**

```js
const = 'value'
let = 'value'
```

**Other terms**
Hoisting
declare
assign
reassign

## let, const, and var. VARIABLES!

What is a variable? You may remember this from your math class. X, Y, Z, and so on. If you remember in math they are a representation of value that we can eventually plug in to do some sort of calculation. Variables when were are writing our programs do just that. There will be 3 things you can do with them: 

1. Declare
2. Assign
3. Reassign

There are 4 ways to declare a variable but **we will only use two**:

const = will never reassign
let = can be reassigned
var = a bad idea
no keyword = implicit global. AWFUL.

ALWAYS USE let OR const

```js
// const === constant, let === can change
const myName = 'John';
// myName = 'Johnny'; // ERROR

let myAge = 101;
myAge = 102; // OK

// No vars
var status = 'happy';

// Accidentally global, also don't do
globalStatus = 'sad';

```

You can declare and assign a variable in the same line. 

## Why not var? Hoisting.

Hoisting (like most weird JS things) stems from the fact that when JS was invented eons ago, there was a desire that JS should never crash a site. **Ever.** So bugs that would normally get caught in development would sneak through. So the page wouldn’t crash, but it also wouldn’t work properly. Nowadays, we prefer to find these errors in development, so crashing is ok.

* It’s not clear if we intend it to be redefined
var has weird scope
* var is hoisted (const/let are not)
* Hoisting means “declarations move to the top”
Translation: we can reference a variable that hasn't yet been declared.


```js
console.log(`Hi ${name}!`); // ERROR
const name = 'Jane';

console.log(`I'm ${age}.`); // ERROR
let age = 101;

// This doesn't error OR say their name
console.log(`Hi, ${weird}?`); // Hi, undefined?
var weird = 'Tom';

// This DOES throw an error despite hoisting
console.log(str.toUpperCase()); // ERROR
var str = 'Some string';
```

## Expression and Statements

An expression is a fragment of code that evaluates to a single value.

```js
5 + 10 //15
'hi' + '!' // hi!
20 > 18 // true
```

All of these expression evaluate but they don't get stored anywhere. 
A statement is a complete piece of code that instructs the program what to do, but has no value

```js
const age = 5;

console.log("hi");

for (let i = 0; i < 5; i++) {
	console.log("hi");
}

```

## Data types

Data Types tell us “meta” information

5 main “primitive” data types:
number, string, boolean, undefined, null

Technically 1 “reference” data type: object 
arrays and function are subsets of objects


const string = "I'm text";

const number = 10;
const float = 1.5;
const integer = 1;
const negative = -1;

```js
let boolean = true;
boolean = false;

// Undefined is a type with only one value: undefined
let undefinedVariable;
let explicitUndefined = undefined;

// Null is a type with only one value: null
let nullVariable = null;

// NaN means Not a Number,
// but it's technically a number type
let notANumber = NaN;
```


## Functions

Small functions keep our code readable
There are “function declarations” and “function expressions”
We’ll use arrow function expressions
Functions can have return values and take parameters 
Functions can have “default parameters”


```js
// Traditional function declaration
function add(x, y) { // x and y are parameters
  return x + y;
}

add(3, 4); // 3 and 4 are arguments

// Traditional Function expression
const add2 = function(x, y) {
  return x + y;
}

// Arrow function expression
const add3 = (x, y) => {
  return x + y;
}

// Arrow function expression with implicit return
const add4 = (x, y) => x + y;

// For style and code reasons we will use the arrow function
// Except for a few cases where we will use the traditional functions
// (we will talk about in later modules)
```

**Function Hoisting**

Declarations get hoisted
Expressions do not
That’s why we use expressions
Function declaration hoisting creates 
inconsistent behavior

```js
// console.log(noHoist) // ERROR
const noHoist = "Remember, const/let don't hoist"

// sayHi() // ERROR
const sayHi = () => {
  console.log('hi');
}

// sayHi2() // ERROR
const sayHi2 = function() {
  console.log('hi');
}

sayHi3(); // This is ...totally fine?
function sayHi3() {
  console.log('hi');
}

// Scoping only makes more complications
const totallyFine = 'Scope is cool!';

// hoisting + scope suddenly creates errors
realIssue(); // called here is an error now

function realIssue() {
  console.log(totallyFine);
  console.log(problem);
}

const problem = 'This breaks though';
realIssue(); // called here, it's fine
```

## Scope

Scope refers to where variables are “visible”
Code blocks { } create a new scope
as long as we’re not using var
Lower scopes CAN see higher scopes
Higher scopes CAN’T see into lower scopes
Scoping lets us do private variables and closures 


```js
// friend is highest "global scope"
const friend = 'John';

// function greetFriend is global too
const greetFriend = (myName) => {
  // inside greetFriend, now 1 scope down
  console.log(`Hi, ${friend}, I'm ${myName}`);
}

greetFriend('Jane'); // Hi, John, I'm Jane

// can't see into scopes
const secretValues = () => {
  const private = 'shhhhh!';
  return private;
}

console.log(private) // ERROR 'private is not defined'
console.log(secretValues()) // 'shhhhh!'

```

## Strings

Strings are just text

JS doesn’t care about single vs double quotes
Backticks create “String templates”
Strings have indexes that start on 0
Strings have a .length property

```js
const string1 = "I'm using doubles to capture the 'single' quotes";
const string2 = 'I am doing the "opposite" here';
const string3 = `Backticks can catch " and ' easily`;

const escape = 'I\'m';

const myName = 'Sara';
const template = `I'm ${myName}`;

console.log(string1.length); // 48
console.log(string2.length); // 30
console.log(string3.length); // 34
console.log(escape.length); // 3, the \ doesn't count

console.log(template.length); // 8, the code doesn't count

console.log(string1[0]); // I
console.log(string1[string1.length - 1]); // s
console.log(string1[3]); // a space character

const preserveLines = `backticks
retain new line information
in context`;
console.log('preserveLines:', preserveLines);
const specialChars = "special characters \t\nmake spaces";
console.log('specialChars:', specialChars);
```

## Built in String Methods

Let’s start with some “read only” methods. This means that the string will be read index by index to see what is in each one:
.includes()
.startsWith(), .endsWith()
.indexOf(), .lastIndexOf()
First three return booleans
Index methods return number
If no index is found, return -1

```js
const str = "Look, here I am!";

console.log(str.includes('I')); // true
console.log(str.includes('i')); // false
console.log(str.includes('here')); // true
console.log(str.includes('here i')); // false

console.log(str.startsWith('Look')); // true
console.log(str.startsWith('look')); // false
console.log(str.endsWith('am!')); // true
console.log(str.endsWith('am')); // false

console.log(str.indexOf('I')); // 11
console.log(str.indexOf('i')); // -1
console.log(str.indexOf('here')); // 6
console.log(str.indexOf('here i')); // -1

console.log(str.indexOf('e')); // 7
console.log(str.lastIndexOf('e')); // 9
```
## Copy Methods

Strings are immutable. This means they can’t change. To “edit” a string, you make a copy of it and you can  save/reassign the copy.

Let’s look at some “copy” methods:
.slice()
.toUpperCase(), .toLowerCase()
.replace(), .replaceAll()


```js
const str1 = "Example One";
console.log(str1.slice(0)) // Example one
console.log(str1.slice(0, 7)) // Example
console.log(str1.slice(8)) // One
console.log(str1.slice(-1)) // e
console.log(str1.slice(-3)) // One
console.log(str1.slice(-3, -1)) // On

const str2 = "eXaMpLe TwO";
console.log(str2.toLowerCase()) // example two
console.log(str2.toUpperCase()) // EXAMPLE TWO

const str3 = "example three";
console.log(str3.replace('three', '3')) // Example 3
console.log(str3.replace('e', 'E*')) // E*xample Three
console.log(str3.replaceAll('e', 'E*')) // E*xamplE* thrE*E*

// You can also use Regular Expressions to get all
console.log(str3.replace(/e/g, 'E*')) // E*xamplE* thrE*E*


// Know how I said always templates? I lied.
// Use concatenation when ONLY combining
// str1 + str2      WINNER
// `${str1}${str2}` LOSER
// `Hi ${str1} ${str2}.`           WINNER
// 'Hi ' + str1 + ' ' + str2 + '.' YIKES
const uppercase = str2[0].toUpperCase() + str2.slice(1).toLowerCase();
console.log(`"${uppercase}," is the proper case for "${str2}"`)
```