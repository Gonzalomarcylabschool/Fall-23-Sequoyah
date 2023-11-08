const addToFrontOrBack = (arr, value, isBack) => {
  if (value === undefined || value === null) return arr;
  isBack ? arr.push(value) : arr.unshift(value);
};



const obliterate = (obj) => {
  for (const key of Object.keys(obj)) {
    delete obj[key];
  }
  obj.wasObliterated = true;
};

const getNamesOfGreedyGnomes = (gnomes) => {
  return gnomes.filter(gnome => gnome.stolenDecorations.length > 1)
    .map(({ name }) => name);
};



const getAllXCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(([x]) => x);
};


const doubleAllItemsPurely = (arr) => {
  return arr.map(num => num * 2); // This is probably more likely answer
  // const newArr = [...arr];
  // for (let i = 0; i < newArr.length; i++) {
  //   newArr[i] *= 2;
  // }
  // return newArr;
};

const isLongArray = (arr) => arr.length > 10;