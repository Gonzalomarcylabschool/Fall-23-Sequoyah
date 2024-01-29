const renderFriendsList = (friends) => {
  // empty the list
  const friendsListEl = document.querySelector('#friends-list')
  friendsListEl.innerHTML = '';

  // re-render all friends
  friends.forEach((friend) => {
    const li = document.createElement('li');
    li.textContent = friend;
    friendsListEl.append(li);
  })
}

// A factory function
const makeFriendsManager = () => {
  const friends = ['ahmad', 'brandon', 'carmen'];

  // Because we create new functions, a closure is created and
  // addFriend and getFriends "remember" their environment after 
  // they are returned from makeFriendsManager
  const friendsManager = {
    addFriend(newFriend) {
      friends.push(newFriend);
    },
    getFriends() {
      return [...friends]; // return a copy to protect the original
    }
  }

  // the object and the new methods with their closures are sent out
  return friendsManager
}

/*
Through closure, the methods within friendsManager can
still access and mutate the friends array 

However, users of the friendsManager can only use the 
addFriend or getFriends method. Direct access to friends
is blocked.

Trying friendsManager.friends will return undefined so
we can't directly push into it from the console, even though
this is a global variable.
*/
const friendsManager = makeFriendsManager();

const main = () => {
  // to access the friends list, we need to use getFriends()
  renderFriendsList(friendsManager.getFriends());

  document.querySelector('#new-friend-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;

    // add the friend name from the form to the list
    friendsManager.addFriend(form.name.value)

    renderFriendsList(friendsManager.getFriends());

    form.reset();
  });
}

main();