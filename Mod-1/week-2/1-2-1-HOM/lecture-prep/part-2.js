/** forEach  */

const letters = [1, 2, 3];
const callback = (val, idx, arr) => {
  val++;
  console.log('Value at index:', val);
  console.log('Current index:', idx);
  console.log('Original array:', arr);
};

letters.forEach((val) => {
  val++;
  console.log('Value at index:', val);
  console.log('Current index:', idx);
  console.log('Original array:', arr);
});
// Value at index: a
// Current index: 0
// Original array: [ 'a', 'b', 'c' ]
// Value at index: b
// Current index: 1
// Original array: [ 'a', 'b', 'c' ]
// Value at index: c
// Current index: 2
// Original array: [ 'a', 'b', 'c' ]

/** What's essentially happening under the hood  */
const fakeForEach = (arr, callbackFunction) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFunction(arr[i]);
  }
}
