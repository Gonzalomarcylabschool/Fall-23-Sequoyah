const doubleArrayNumbers = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2
    newArr.push(result)
  }
  return newArr;
}

const multiplyArrayNumberByIndex = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * i
    newArr.push(result)
  }
  return newArr;
}

/* convert to an HOF and callback */
const doubleNum = (num) => num * 2;
const multiply2Nums = (num1, num2) => num1 * num2;

const doSomethingWithArr = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i);
    newArr.push(result);
  }
  return newArr;
}

const myArr = [1, 5, 10, 20];
console.log('* 2:', doSomethingWithArr(myArr, doubleNum));
console.log('* i:', doSomethingWithArr(myArr, multiply2Nums));
console.log('inline:', doSomethingWithArr(myArr, (num) => num / 2));