const handleIncorrectUsers = (usersArr) => {
  const maximumAmountOfUsers = 32;
  if (!usersArr || !Array.isArray(usersArr)) {
    throw new Error('You must pass in an array of users');
  } else if (!usersArr.length) {
    throw new Error('You must have more than 0 users to start');
  } else if (usersArr.length > maximumAmountOfUsers) {
    throw new Error('Users list is too big');
  }
}

const setIsUserLucky = (user, userIdx, numOfUsers) => {
  user.isLucky = Math.floor(Math.random() * 11) > 5
    && userIdx < numOfUsers / 2;
  return user;
}

const findLuckyUsers = (usersArr) => usersArr
  .map((user, idx) => setIsUserLucky(user, idx, usersArr.length))
  .filter(user => user.isLucky);

const announceInitiatedUsers = (aboutToBeInitiatedUsers) => {
  aboutToBeInitiatedUsers.forEach(user => {
    console.log(`${user.name} Shall be initiated into the hall of the lucky`);
  });
}

module.exports = {
  handleIncorrectUsers,
  findLuckyUsers,
  announceInitiatedUsers,
}