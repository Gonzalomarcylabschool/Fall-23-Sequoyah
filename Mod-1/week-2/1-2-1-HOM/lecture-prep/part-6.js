/** Reduce  */

const lunchCosts = [5, 10, 7, 9, 15, 8, 12];
const startingVal = 0;
const addUpCosts = (accumulator, currentVal) => accumulator + currentVal;

const totalCost = lunchCosts.reduce((accumulator, currentVal) => accumulator + currentVal);
console.log('totalCost', totalCost);
// totalCost 66

// reduce is tricky, always use good names!
const addUpCostsBetter = (total, dailyExpense) => total + dailyExpense;