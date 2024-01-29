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

/* 
friendsManager below is a global variable. You should avoid making
global data for this exact reason. However, it provides an opportunity
to show the protective powers of factory functions and closures.

Because friendsManager.friends is directly accessible, we can't control
how it will be modified.

Test it out:
- Open the index.html with live server
- Open the console
- Type: friendsManager.friends.push('george')
- Use the form to add another friend
*/
const friendsManager = {
  friends: ['ahmad', 'brandon', 'carmen'],
  addFriend(newFriend) {
    this.friends.push(newFriend);
  }
}

const main = () => {
  // directly pass in the friends list
  renderFriendsList(friendsManager.friends);

  document.querySelector('#new-friend-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;

    // add the friend name from the form to the list
    friendsManager.addFriend(form.name.value)

    // render
    renderFriendsList(friendsManager.friends);

    form.reset();
  });
}

main();