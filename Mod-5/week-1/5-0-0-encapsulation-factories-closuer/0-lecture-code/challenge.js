/* 
Below is a `counter` object. The problem is that the `counter.value` 
property is not private — it can be directly mutated. Your challenge 
is to create a factory function `makeCounter` that will protect the 
value of the counter while still allowing us to `increment()`, 
`decrement()`, and get the current value of the counter.
*/

const counter = {
  value: 0,
  increment() {
    this.value++;
  },
  decrement() {
    this.value--;
  }
}

console.log(counter.value); // 0
counter.increment();
counter.increment();
console.log(counter.value); // 2
counter.decrement();
console.log(counter.value); // 1
counter.value = 10; // BAD