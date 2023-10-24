const sendUsersForInitiation = (usersArr) => {
  const maximumAmountOfUsers = 32;
  if (!usersArr || !Array.isArray(usersArr)) {
    throw new Error('You must pass in an array of users');
  } else if (!usersArr.length) {
    throw new Error('You must have more than 0 users to start');
  } else if (usersArr.length > maximumAmountOfUsers) {
    throw new Error('Users list is too big');
  }
  const luckyUsers = usersArr
    .map((user, idx) => {
      maximumAmountOfUsers
      user.isLucky = Math.floor(Math.random() * 11) > 5 && idx < usersArr.length / 2;
      return user;
    })
    .filter(user => user.isLucky);

  if (luckyUsers.length) {
    luckyUsers.forEach(user => {
      console.log(`${user.name.toUpperCase()} Shall be initiated into the hall of the lucky`);
    });
    return { initiatedUsers: luckyUsers };
  }
  return { initiatedUsers: [] };
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