const doubleAllItemsPurely = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};
const doubleAllItemsPurelyAnswer = (arr) =>  arr.map(num => num * 2);


const getAllXCoordinates = (arrOfCoords) => {
  const newArr = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][0])
  }
  return newArr;
};


const getAllXCoordinatesMap = (arrOfCoords) => arrOfCoords.map(cord => cord[0]);




const addToFrontOrBack = (arr, value, isBack) => {
  if (!value) return arr;
  isBack ? arr.push(value) : arr.unshift(value);
};



const isLongArray = (arr) => arr.length > 10;