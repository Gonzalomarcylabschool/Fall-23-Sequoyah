import { describe, it, expect, afterEach, afterAll, beforeEach, vi } from 'vitest';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';
import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  mockFantasyBooksResponse,
  mockAuthorResponse,
} from './fetched-mock-responses.js'
import ScoreCounter from 'score-tests';
import path from 'path';
import nock from 'nock';
import nodeFetch from 'node-fetch';

// node fetch works nicely with nock, native fetch does not and may be missing on some systems
global.fetch = nodeFetch;

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const baseOpenLibrary = 'https://openlibrary.org';
const baseJsonPlaceholder = 'https://jsonplaceholder.typicode.com';

describe(testSuiteName, () => {
  afterEach(() => {
      vi.restoreAllMocks()
  });

  //////////////////////////////////////////////////////////////////////////////
  // FETCH FUNCTIONS
  // FETCH FUNCTIONS
  // FETCH FUNCTIONS
  //////////////////////////////////////////////////////////////////////////////

  it('getFirstThreeFantasyBooks - fetches the right url', async () => {
    const fakeRoute = nock(baseOpenLibrary).get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);
    try {
      await getFirstThreeFantasyBooks()

    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getFirstThreeFantasyBooks - resolves an array if there are no errors', async () => {
    const fakeRoute = nock(baseOpenLibrary)
      .get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);

      let books;
    try {
      books = await getFirstThreeFantasyBooks()
    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(Array.isArray(books)).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getFirstThreeFantasyBooks - console.warns right message if there is a network error and returns null', async () => {
    const fakeRoute = nock(baseOpenLibrary)
      .get('/subjects/fantasy.json').replyWithError('Network Error');

    const consoleWarnSpy = vi.spyOn(console, 'warn');
    let returnVal;
    try {
      returnVal = await getFirstThreeFantasyBooks()
    }
    catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/Network Error/);
    expect(returnVal).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getFirstThreeFantasyBooks - console.warns right message if there is an unsuccessful request', async () => {
    const fakeRoute = nock(baseOpenLibrary)
      .get('/subjects/fantasy.json').reply(404);

    const consoleWarnSpy = vi.spyOn(console, 'warn');

    try {
      await getFirstThreeFantasyBooks()
    }
    catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/Failed to get fantasy books/);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getFirstThreeFantasyBooks - properly formats book data', async () => {
    const fakeRoute = nock(baseOpenLibrary)
      .get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);

      let books;
    try {
      books = await getFirstThreeFantasyBooks()
    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBe(3);
    expect(books).toEqual([
      {
        title: "Alice's Adventures in Wonderland",
        author: { name: 'Lewis Carroll', urlKey: '/authors/OL22098A' },
        coverUrl: 'https://covers.openlibrary.org/a/id/10527843-M.jpg'
      },
      {
        title: 'Treasure Island',
        author: { name: 'Robert Louis Stevenson', urlKey: '/authors/OL25963A' },
        coverUrl: 'https://covers.openlibrary.org/a/id/13859660-M.jpg'
      },
      {
        title: "Gulliver's Travels",
        author: { name: 'Jonathan Swift', urlKey: '/authors/OL24522A' },
        coverUrl: 'https://covers.openlibrary.org/a/id/12717083-M.jpg'
      }
    ]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getAuthor - fetches the right url', async () => {
    const authorUrlKey = '/authors/OL25963A'
    const fakeRoute = nock(baseOpenLibrary).get(`${authorUrlKey}.json`).reply(200, mockFantasyBooksResponse);
    try {
      await getAuthor('/authors/OL25963A')

    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getAuthor - resolves an object if there are no errors', async () => {
    const authorUrlKey = '/authors/OL25963A'
    const fakeRoute = nock(baseOpenLibrary).get(`${authorUrlKey}.json`).reply(200, mockAuthorResponse);

    let author;
    try {
      author = await getAuthor('/authors/OL25963A')

    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(author).toBeTruthy();
    expect(typeof author).toBe('object');
    expect(Array.isArray(author)).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getAuthor - console.warns right message if there is a network error and returns null', async () => {
    const authorUrlKey = '/authors/OL25963A'
    const fakeRoute = nock(baseOpenLibrary).get(`${authorUrlKey}.json`)
      .replyWithError('Network Error');

    const consoleWarnSpy = vi.spyOn(console, 'warn');

    let returnVal;
    try {
      returnVal = await getAuthor(authorUrlKey)

    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }


    expect(fakeRoute.isDone()).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/Network Error/);
    expect(returnVal).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getAuthor - console.warns right message if there is an unsuccessful request', async () => {
    const authorUrlKey = '/authors/OL25963A'
    const fakeRoute = nock(baseOpenLibrary).get(`${authorUrlKey}.json`).reply(404);

    const consoleWarnSpy = vi.spyOn(console, 'warn');

    let returnVal;
    try {
      returnVal = await getAuthor(authorUrlKey)

    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }


    expect(fakeRoute.isDone()).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/Failed to get author/);
    expect(returnVal).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getAuthor - properly formats author object', async () => {
    const authorUrlKey = '/authors/OL25963A'
    const fakeRoute = nock(baseOpenLibrary).get(`${authorUrlKey}.json`).reply(200, mockAuthorResponse);

    let author;
    try {
      author = await getAuthor(authorUrlKey)
      console.log('author:', author);
    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(author).toEqual({
      birthDate: '13 November 1850',
      bio: "Robert Louis Stevenson (born Robert Lewis Balfour Stevenson; 13 November 1850 – 3 December 1894) was a Scottish novelist, essayist, poet and travel writer. He is best known for works such as Treasure Island, Strange Case of Dr Jekyll and Mr Hyde, Kidnapped and A Child's Garden of Verses.",
      wikipediaUrl: 'http://en.wikipedia.org/wiki/Robert_Louis_Stevenson',
      name: 'Robert Louis Stevenson',
      pictureUrl: 'https://covers.openlibrary.org/a/id/6257922-M.jpg'
    })

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createNewUser - fetches the right url', async () => {
    const fakeRoute = nock(baseJsonPlaceholder).post('/users').reply(200, {});
    try {
      await createNewUser({})

    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createNewUser - resolves an object if there are no errors', async () => {
    const fakeRoute = nock(baseJsonPlaceholder).post('/users').reply(200, {});
    let newUser;

    try {
      newUser = await createNewUser({})
    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(newUser).toBeTruthy();
    expect(typeof newUser).toBe('object');
    expect(Array.isArray(newUser)).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createNewUser - console.warns right message if there is a network error and returns null', async () => {
    const fakeRoute = nock(baseJsonPlaceholder).post('/users').replyWithError('Network Error');

    const consoleWarnSpy = vi.spyOn(console, 'warn');

    let returnVal;
    try {
      returnVal = await createNewUser({})
    }
    catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/Network Error/);
    expect(returnVal).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createNewUser - console.warns right message if there is an unsuccessful request', async () => {
    const fakeRoute = nock(baseJsonPlaceholder).post('/users').reply(500);

    const consoleWarnSpy = vi.spyOn(console, 'warn');

    let returnVal;
    try {
      returnVal = await createNewUser({})
    }
    catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy.mock.calls[0][0]).toMatch(/Failed to create new user/);
    expect(returnVal).toBeNull();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createNewUser - creates a new user correctly', async () => {
    const userData = {
      username: 'testuser',
      isCool: true,
      favoriteLanguage: 'JavaScript'
    }
    const expectedUser = { id: 11, ...userData }
    const fakeRoute = nock(baseJsonPlaceholder).post('/users').reply(200, expectedUser);
    let newUser;

    try {
      newUser = await createNewUser(userData)
    } catch (error) {
      console.log('Testing error:', error.message)
      expect(error).toBeUndefined();
    }

    expect(fakeRoute.isDone()).toBe(true);
    expect(newUser).toEqual(expectedUser);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  //////////////////////////////////////////////////////////////////////////////
  // RENDER FUNCTIONS
  // RENDER FUNCTIONS
  // RENDER FUNCTIONS
  //////////////////////////////////////////////////////////////////////////////

  it('renderBookList - renders the book list correctly', async () => {
    const bookListEl = document.createElement('ul');
    const books = [
      {
        title: "Test 1 Book",
        author: {
          name: 'Test 1 Author',
          urlKey: '/authors/test1'
        },
        coverUrl: 'https://covers.openlibrary.org/a/id/test1-M.jpg'
      },
      {
        title: "Test 2",
        author: {
          name: 'Test 2 Author',
          urlKey: '/authors/test2'
        },
        coverUrl: 'https://covers.openlibrary.org/a/id/test2-M.jpg'
      },
      {
        title: "Test 3",
        author: {
          name: 'Test 3 Author',
          urlKey: '/authors/test3'
        },
        coverUrl: 'https://covers.openlibrary.org/a/id/test3-M.jpg'
      },
    ]

    renderBookList(bookListEl, books);

    expect(bookListEl.children.length).toBe(3);

    const firstBook = bookListEl.children[0];
    expect(firstBook.tagName).toBe('LI');
    expect(firstBook.children.length).toBe(3);

    const firstBookImg = firstBook.querySelector('img');
    expect(firstBookImg.src).toBe('https://covers.openlibrary.org/a/id/test1-M.jpg');
    expect(firstBookImg.alt).toBe("An old cover of Test 1 Book");

    const firstBookTitle = firstBook.querySelector('p');
    expect(firstBookTitle.textContent).toBe("Title: Test 1 Book");

    const firstBookButton = firstBook.querySelector('button');
    expect(firstBookButton.textContent).toBe('View Test 1 Author');
    expect(firstBookButton.dataset.authorUrlKey).toBe('/authors/test1');

    const book2 = bookListEl.children[0];
    expect(book2.tagName).toBe('LI');
    expect(book2.children.length).toBe(3);

    expect(book2.querySelector('img').src).toBe('https://covers.openlibrary.org/a/id/test1-M.jpg');
    expect(book2.querySelector('img').alt).toBe("An old cover of Test 1 Book");

    expect(book2.querySelector('p').textContent).toBe("Title: Test 1 Book");

    expect(book2.querySelector('button').textContent).toBe('View Test 1 Author');
    expect(book2.querySelector('button').dataset.authorUrlKey).toBe('/authors/test1');

    const book3 = bookListEl.children[0];
    expect(book3.tagName).toBe('LI');
    expect(book3.children.length).toBe(3);

    expect(book3.querySelector('img').src).toBe('https://covers.openlibrary.org/a/id/test1-M.jpg');

    expect(book3.querySelector('img').alt).toBe("An old cover of Test 1 Book");
    expect(book3.querySelector('p').textContent).toBe("Title: Test 1 Book");
    expect(book3.querySelector('button').textContent).toBe('View Test 1 Author');
    expect(book3.querySelector('button').dataset.authorUrlKey).toBe('/authors/test1');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });


  it('renderAuthorInfo - renders the author info correctly', async () => {
    const authorInfoEl = document.createElement('div');
    const author = {
      name: 'Test Author',
      pictureUrl: 'https://covers.openlibrary.org/a/id/test1-M.jpg',
      birthDate: 'Test Birth Date',
      bio: 'Test Bio',
      wikipediaUrl: 'Test Wikipedia Url'
    }

    renderAuthorInfo(authorInfoEl, author);

    expect(authorInfoEl.children.length).toBe(5);

    const authorName = authorInfoEl.querySelector('h2');
    expect(authorName.textContent).toBe('Test Author');

    const authorImg = authorInfoEl.querySelector('img');
    expect(authorImg.src).toBe('https://covers.openlibrary.org/a/id/test1-M.jpg');
    expect(authorImg.alt).toBe('A picture of Test Author');

    const authorBirthDate = authorInfoEl.querySelector('p');
    expect(authorBirthDate.textContent).toBe('Born: Test Birth Date');

    const authorBio = authorInfoEl.querySelectorAll('p')[1];
    expect(authorBio.textContent).toBe('Test Bio');

    const authorWikiLink = authorInfoEl.querySelector('a');
    expect(authorWikiLink.href.includes('Wikipedia')).toBe(true);
    expect(authorWikiLink.textContent).toBe('Wikipedia Link');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('renderNewUserForm - renders the form correctly', async () => {
    const newUserFormEl = document.createElement('form');

    renderNewUserForm(newUserFormEl);

    const usernameLabel = newUserFormEl.querySelector('label[for="username"]');
    expect(usernameLabel.textContent.includes('Username')).toBe(true);

    const usernameInput = newUserFormEl.querySelector('input#username');
    expect(usernameInput.type).toBe('text');
    expect(usernameInput.name).toBe('username');

    const isCoolLabel = newUserFormEl.querySelector('label[for="is-cool"]');
    expect(isCoolLabel.textContent).toBe('Is this user cool?');

    const isCoolInput = newUserFormEl.querySelector('input#is-cool');
    expect(isCoolInput.type).toBe('checkbox');
    expect(isCoolInput.name).toBe('isCool');

    const favLangLabel = newUserFormEl.querySelector('label[for="favorite-language"]');
    expect(favLangLabel.textContent).toBe('Favorite Language');

    const favLangSelect = newUserFormEl.querySelector('select#favorite-language');
    expect(favLangSelect.name).toBe('favoriteLanguage');

    const firstOption = favLangSelect.children[0];
    expect(firstOption.value).toBe('None');
    expect(firstOption.textContent).toBe('None');

    const secondOption = favLangSelect.children[1];
    expect(secondOption.value).toBe('JavaScript');
    expect(secondOption.textContent).toBe('JavaScript');

    const thirdOption = favLangSelect.children[2];
    expect(thirdOption.value).toBe('Python');
    expect(thirdOption.textContent).toBe('Python');

    const fourthOption = favLangSelect.children[3];
    expect(fourthOption.value).toBe('Ruby');
    expect(fourthOption.textContent).toBe('Ruby');

    const submitButton = newUserFormEl.querySelector('button');
    expect(submitButton.textContent).toBe('Create User');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('renderNewUser - renders the new user correctly', async () => {
    const newUserEl = document.createElement('div');
    const newUser = {
      id: 11,
      username: 'test-user',
      isCool: true,
      favoriteLanguage: 'Python'
    }

    renderNewUser(newUserEl, newUser);

    expect(newUserEl.children.length).toBe(3);

    const headingEl = newUserEl.querySelector('h2');
    expect(headingEl.textContent).toBe('test-user');
    expect(headingEl.dataset.userId).toBe('11');

    const coolStatusEl = newUserEl.querySelector('p');
    expect(coolStatusEl.textContent).toBe('The hippest in the house!');

    const favLanguageEl = newUserEl.querySelectorAll('p')[1];
    expect(favLanguageEl.textContent).toBe('Favorite Language: Python');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
})