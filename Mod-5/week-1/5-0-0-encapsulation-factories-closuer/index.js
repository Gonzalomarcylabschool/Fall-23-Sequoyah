// 

const makeFriendsManager = () => {
  // this variable is in the "outer" function
  // and referenced in addFriend and getFriends
  const friends = [];

  const friendsManager = {
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
    },
    getFriends() {
      return [...friends]; 
    },
  }
  return friendsManager;
}

const bensFriendsManager = makeFriendsManager();
console.log(bensFriendsManager);
// bensFriendsManager.addFriend('zo')
// bensFriendsManager.addFriend('motun')
// console.log(bensFriendsManager.friends) // undefined
// console.log(bensFriendsManager.getFriends()) // ['zo', 'motun']
// bensFriendsManager.addFriend('Alexa')
// bensFriendsManager.addFriend('Izzy')
// bensFriendsManager.addFriend('cris')

// console.log(bensFriendsManager.getFriends())

const gonzoGoonz = makeFriendsManager();

console.log(gonzoGoonz)
// gonzoGoonz.addFriend('nicole')
// gonzoGoonz.addFriend('rafi')
// console.log(gonzoGoonz.getFriends());
// // gonzoGoonz.friends.push(42)
// console.log(gonzoGoonz.getFriends());

const allanFriendsManager = makeFriendsManager();

console.log(allanFriendsManager);