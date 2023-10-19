const { handleIncorrectUsers, findLuckyUsers, announceInitiatedUsers } = require('./8-functions-module');

const sendUsersForInitiation = (usersArr) => {
  handleIncorrectUsers(usersArr);
  const luckyUsers = findLuckyUsers(usersArr)
  if (!luckyUsers) return { initiatedUsers: [] };

  announceInitiatedUsers(luckyUsers);
  return { initiatedUsers: luckyUsers };
}

console.log(sendUsersForInitiation([
  {name: 'trent'},
  {name: 'bo'},
  {name: 'jack'},
  {name: 'sara'},
  {name: 'bri'},
  {name: 'sam'},
  {name: 'tom'},
  {name: 'jill'},
  {name: 'nora'},
  {name: 'kate'},
  {name: 'cal'},
]));












