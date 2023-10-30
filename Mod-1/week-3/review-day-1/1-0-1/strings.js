const text = 'hello';
// the value at the index in the argument
const char = text.charAt(0); // Output: "h";
const { length } = text; // 5
/*
text.toUpperCase(); // HELLO
text.toUppercase().toLowerCase(); // hello
*/
const textTwo = 'Hello dear old World, I love you!';
const newText = text.replace('hello', 'good bye'); // good bye
const newTextTwo = text.replace('Hello', 'Hi');

const newArray = text.split(''); // ['h', 'e', 'l', 'l', 'o' ]
const newSplit = textTwo.split('o'); //
const newString = newArray.join(''); // 'hello'
const including = textTwo.includes('World'); // we get a boolean

const slicedText = text.slice(0, 3);

console.log(slicedText);

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));
