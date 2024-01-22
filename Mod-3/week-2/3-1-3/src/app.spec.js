import { describe, it, expect, afterEach, afterAll, beforeEach, vi } from 'vitest';

import {
  mockFantasyBooksResponse,
  mockAuthorResponse,
} from './fetched-mock-responses.js'

import app from './app';
import ScoreCounter from 'score-tests';
import path from 'path';
import nock from 'nock';
import nodeFetch from 'node-fetch';

// node fetch works nicely with nock, native fetch does not and may be missing on some systems
global.fetch = nodeFetch;

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const baseOpenLibrary = 'https://openlibrary.org';
const baseJsonPlaceholder = 'https://jsonplaceholder.typicode.com';

const waitForRenders = () => new Promise(resolve => setTimeout(resolve, 100));

describe(testSuiteName, () => {
  it('app - renders the right books', async () => {
    nock(baseOpenLibrary).get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);

    const builtApp = document.createElement('div');
    app(builtApp);

    await waitForRenders()
    const listOfBooks = builtApp.querySelector('#book-list');
    expect(listOfBooks.children.length).toBe(3);

    const aliceBook = listOfBooks.children[0];
    expect(aliceBook.querySelector('img').src).toBe('https://covers.openlibrary.org/a/id/10527843-M.jpg');
    expect(aliceBook.querySelector('img').alt).toBe("An old cover of Alice's Adventures in Wonderland");
    expect(aliceBook.querySelector('p').textContent).toBe("Title: Alice's Adventures in Wonderland");
    expect(aliceBook.querySelector('button').textContent).toBe('View Lewis Carroll');
    expect(aliceBook.querySelector('button').dataset.authorUrlKey).toBe('/authors/OL22098A');

    const treasureBook = listOfBooks.children[1];
    expect(treasureBook.querySelector('img').src).toBe('https://covers.openlibrary.org/a/id/13859660-M.jpg');
    expect(treasureBook.querySelector('img').alt).toBe("An old cover of Treasure Island");
    expect(treasureBook.querySelector('p').textContent).toBe("Title: Treasure Island");
    expect(treasureBook.querySelector('button').textContent).toBe('View Robert Louis Stevenson');
    expect(treasureBook.querySelector('button').dataset.authorUrlKey).toBe('/authors/OL25963A');

    const gulliverBook = listOfBooks.children[2];
    expect(gulliverBook.querySelector('img').src).toBe('https://covers.openlibrary.org/a/id/12717083-M.jpg');
    expect(gulliverBook.querySelector('img').alt).toBe("An old cover of Gulliver's Travels");
    expect(gulliverBook.querySelector('p').textContent).toBe("Title: Gulliver's Travels");
    expect(gulliverBook.querySelector('button').textContent).toBe('View Jonathan Swift');
    expect(gulliverBook.querySelector('button').dataset.authorUrlKey).toBe('/authors/OL24522A');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('app - handles the click to render author correctly', async () => {
    nock(baseOpenLibrary).get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);
    nock(baseOpenLibrary).get('/authors/OL25963A.json').reply(200, mockAuthorResponse);

    const builtApp = document.createElement('div');
    app(builtApp);

    await waitForRenders()
    // Click first book's button
    const listOfBooks = builtApp.querySelector('#book-list');
    const treasureBook = listOfBooks.children[1];
    const authorInfo = builtApp.querySelector('#author-info');

    expect(authorInfo.children.length).toBe(0);

    treasureBook.querySelector('button').click();

    await waitForRenders()
    await waitForRenders()
    await waitForRenders()

    expect(authorInfo.children.length).toBe(5);

    expect(authorInfo.querySelector('h2').textContent).toBe('Robert Louis Stevenson');
    expect(authorInfo.querySelector('img').src).toBe('https://covers.openlibrary.org/a/id/6257922-M.jpg');
    expect(authorInfo.querySelector('img').alt).toBe('A picture of Robert Louis Stevenson');
    expect(authorInfo.querySelector('p').textContent).toBe('Born: 13 November 1850');
    expect(authorInfo.querySelector('a').href).toBe('http://en.wikipedia.org/wiki/Robert_Louis_Stevenson');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('app - renders the form correctly', async () => {
    nock(baseOpenLibrary).get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);
    const builtApp = document.createElement('div');

    app(builtApp);

    await waitForRenders()

    const newUserForm = builtApp.querySelector('#new-user-form');

    expect(newUserForm.querySelector('label[for="username"]').textContent).toBe('Username');
    expect(newUserForm.querySelector('input#username').type).toBe('text');

    expect(newUserForm.querySelector('label[for="is-cool"]').textContent).toBe('Is this user cool?');
    expect(newUserForm.querySelector('input#is-cool').type).toBe('checkbox');

    expect(newUserForm.querySelector('label[for="favorite-language"]').textContent).toBe('Favorite Language');
    const selectEl = newUserForm.querySelector('select#favorite-language');

    expect(selectEl.children.length).toBe(4);
    expect(selectEl.children[0].value).toBe('None');
    expect(selectEl.children[0].textContent).toBe('None');
    expect(selectEl.children[1].value).toBe('JavaScript');
    expect(selectEl.children[1].textContent).toBe('JavaScript');
    expect(selectEl.children[2].value).toBe('Python');
    expect(selectEl.children[2].textContent).toBe('Python');
    expect(selectEl.children[3].value).toBe('Ruby');
    expect(selectEl.children[3].textContent).toBe('Ruby');

    expect(newUserForm.querySelector('button').textContent).toBe('Create User');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('app - handles the form submission correctly to render the user', async () => {
    nock(baseOpenLibrary).get('/subjects/fantasy.json').reply(200, mockFantasyBooksResponse);
    nock(baseJsonPlaceholder).post('/users').reply(201, { id: 11, username: 'test-user', isCool: true, favoriteLanguage: 'Python' });

    const builtApp = document.createElement('div');
    app(builtApp);

    await waitForRenders()

    const newUserForm = builtApp.querySelector('#new-user-form');
    expect(builtApp.querySelector('#new-user').children.length).toBe(0);

    newUserForm.querySelector('input#username').value = 'test-user';
    newUserForm.querySelector('input#is-cool').checked = true;
    newUserForm.querySelector('select#favorite-language').value = 'Python';

    newUserForm.dispatchEvent(new Event('submit'));

    await waitForRenders()
    await waitForRenders()
    await waitForRenders()

    const newUserEl = builtApp.querySelector('#new-user');

    expect(newUserEl.querySelector('h2').textContent).toBe('test-user');
    expect(newUserEl.querySelector('h2').dataset.userId).toBe('11');
    // MAKE SURE THAT YOUR P TAGS ARE IN THE CORRECT ORDER! It's cool status, then favorite language
    expect(newUserEl.querySelector('p:nth-child(2)').textContent).toBe('The hippest in the house!');
    expect(newUserEl.querySelector('p:nth-child(3)').textContent).toBe('Favorite Language: Python');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
})