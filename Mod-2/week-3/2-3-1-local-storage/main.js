import { getLocalStorageKey, setLocalStorageKey } from "./local-storage.js";
const instructors = ['ben', 'gonzalo', 'motun', 'zo', 'carmen'];
const user = {
  name: 'ben',
  canCode: true
}
const num = 1;
// localStorage.setItem('instructors', JSON.stringify(instructors));
// localStorage.setItem('user', JSON.stringify(user));
// localStorage.setItem('number', 1);

const storedInstructors = JSON.parse(localStorage.getItem('instructors'));
const storedUser = JSON.parse(localStorage.getItem('user'));
const storedNumber = JSON.parse(localStorage.getItem('number'));
console.log('stored Instructor: ', storedInstructors);
// console.log(localStorage.getItem('user'));
// console.log(storedNumber);


//helper function:


setLocalStorageKey('instructors', instructors);
const storedInstructors2 = getLocalStorageKey('instructors');
console.log(storedInstructors2);