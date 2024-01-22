import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  // const books = []
  const books = await getFirstThreeFantasyBooks();
  // render out the books
  renderBookList(bookListEl, books);

  // bookListEl.addEventListener(() => {})
  bookListEl.addEventListener('click', async (event) => {
    if (event.target.matches('button')) {
      const author = await getAuthor(event.target.dataset.authorUrlKey)
      renderAuthorInfo(authorInfoEl, author);
    }
  });

  // newUserFormEl.addEventListener(() => {})
  newUserFormEl.addEventListener('submit', async (event) => {
    console.log('HI/????:', );
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = Object.fromEntries(formData);

    newUser.isCool = !!newUser.isCool
    const newUserDB = await createNewUser(newUser);
    renderNewUser(newUserEl, newUserDB);
  });
}
