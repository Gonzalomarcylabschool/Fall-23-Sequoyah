export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = '';

  books.forEach(({ title, coverUrl, author }) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
      <img src="${coverUrl}" alt="An old cover of ${title}" />
      <p>Title: ${title}</p>
      <button data-author-url-key=${author.urlKey}>View ${author.name}</button>
    `;
    bookListEl.appendChild(bookItem);
  });
}

export const renderAuthorInfo = (authorInfoEl, { pictureUrl, name, bio, birthDate, wikipediaUrl }) => {
  authorInfoEl.innerHTML = `
    <h2>${name}</h2>
    <img src="${pictureUrl}" alt="A picture of ${name}" />
    <p>Born: ${birthDate}</p>
    <p>${bio}</p>
    <a href="${wikipediaUrl}">Wikipedia Link</a>
  `;
}

export const renderNewUserForm = (newUserFormEl) => {
  const languages = ['None', 'JavaScript', 'Python', 'Ruby'];
  newUserFormEl.innerHTML = `
    <label for="username">Username</label>
    <input id="username" type="text" name="username" />

    <label for="is-cool">Is this user cool?</label>
    <input id="is-cool" name="isCool" type="checkbox" />

    <label for="favorite-language">Favorite Language</label>
    <select id="favorite-language" name="favoriteLanguage">
      ${ languages.map(lang => `<option value=${lang}>${lang}</option>`).join('') }
    </select>

    <button>Create User</button>
  `;
}

export const renderNewUser = (newUserEl, { id, username, isCool, favoriteLanguage }) => {
  newUserEl.innerHTML = '';

  const headingEl = document.createElement('h2')
  const coolStatusEl = document.createElement('p')
  const favLanguageEl = document.createElement('p')

  headingEl.textContent = username
  headingEl.dataset.userId = id
  coolStatusEl.textContent = isCool ? 'The hippest in the house!' : "A real square."
  favLanguageEl.textContent = `Favorite Language: ${favoriteLanguage}`;

  newUserEl.append(headingEl, coolStatusEl, favLanguageEl);
}