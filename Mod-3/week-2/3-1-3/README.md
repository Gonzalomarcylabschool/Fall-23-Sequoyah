# Mod 3 Assessment - Fetch and Render

- [Mod 3 Assessment - Fetch and Render](#mod-3-assessment---fetch-and-render)
- [Congratulations!](#congratulations)
- [Game Plan](#game-plan)
  - [Timing](#timing)
- [APIs](#apis)
- [The App itself](#the-app-itself)
  - [CSS](#css)
- [Short Answers](#short-answers)
- [Feature 1: Getting our books!](#feature-1-getting-our-books)
  - [Section 1.1 - getFirstThreeFantasyBooks](#section-11---getfirstthreefantasybooks)
    - [Function requirements](#function-requirements)
    - [Data formatting](#data-formatting)
    - [Test](#test)
  - [Section 1.2 - renderBookList](#section-12---renderbooklist)
    - [Function Requirements](#function-requirements-1)
    - [Testing](#testing)
    - [Slow API](#slow-api)
    - [Data Layer separation](#data-layer-separation)
- [Feature 2: Getting an author](#feature-2-getting-an-author)
  - [Section 2.1 - getAuthor](#section-21---getauthor)
    - [Function Requirements](#function-requirements-2)
    - [Data formatting](#data-formatting-1)
  - [Section 2.2 - renderAuthor](#section-22---renderauthor)
  - [Section 2.3 - Adding it to our app](#section-23---adding-it-to-our-app)
- [Feature 3: Making a new user](#feature-3-making-a-new-user)
  - [Section 3.1 - createNewUser](#section-31---createnewuser)
  - [Section 3.2 - renderNewUserForm](#section-32---rendernewuserform)
  - [Section 3.3 - renderNewUser](#section-33---rendernewuser)
  - [Section 3.4 - Adding it to our app](#section-34---adding-it-to-our-app)
- [That's it!](#thats-it)


# Congratulations!
Hello everyone! Congratulations on making it to the end of our first 3 modules. These are really the "heart" of JavaScript, so if you feel good about it, you're going to be in great shape for the rest of the year. Mod 3 was all about asynchronous JavaScript and specifically using the `fetch` api to get information from other places. Then, using that raw data to render something out to the screen for the user to see and interact with. You've done this all before, and that's all we're doing today, so no stress!

Now, even if you are stressed because this is a  "big, scary test" what should you do? What we tell you to do every morning: breathe. Let the adrenaline flow through you, it's just your body trying to help. So let's let it do it's thing and pass by simply counting to 15. That may feel like *ages*, but remember those were **seconds** and you have **hours** to get this done. Whenever you're panicked about the time, remember this feeling.

# Game Plan
After you breathe and collect your senses, the next thing you should do is read over the entire test without coding a thing. This will help give you a lay of the land, and figure out if there are certain

As we said this assessment is about fetching and rendering. So to that end, we recommend you do the short answers first, as they have useful information about the test itself. Then tack each feature in the order its outlined below. Each little feature builds on the last and uses the same pattern which is:

1. Build a fetch function to get the data
2. Build a render function to put the data on the page
3. Add it to your main program to see it work
4. Adding any events

Your tests are also here to help you, and if you're ever confused about something (or we make a typo in this README), just focus on the tests! If you get them to pass, you're all set.

## Timing
Remember, there are a lot of questions and code here. Do not spend too long on any one of them. Make sure to move. If you're still stuck exactly where you were after 5 minutes, take a break and try something else.

# APIs
The two apis we'll use today are:

- https://openlibrary.org/
- https://jsonplaceholder.typicode.com/

You've used JSON Placeholder before, and we're going to use it to create a new user (it's one of the few free API's that will let us make our own data). We're also going to use Open Library's API to get some books and authors. We selected this API because it's a little more "real world" with lots of information and quirks. We've kept it focused this time, but keep your wits about you!


# The App itself
There are going to be 3 "features" to this app:
- Get a few fantasy books
- Click on a book's button to view the author
- Totally unrelated: make a new user

Here's a final screenshot:

![Final Screenshot](./images/finished-app.png)

## CSS
We added some *very* basic and open ended CSS. Please don't mess with this, this is not a CSS challenge, and we don't want you to waste a single second here. We've taken care of the basic styles (like `divs` have borders so you can see things, and lists don't have their default styles).


> And with that, off you go! Good luck!

# Short Answers
Seriously, do these first.

# Feature 1: Getting our books!
So in this section, we're going to grab 3 books, parse and format the data, and then render them to the screen.

## Section 1.1 - getFirstThreeFantasyBooks
Inside `fetch-functions.js` you need to write a function `getFirstThreeFantasyBooks`. This function takes in no arguments, and returns 3 books of the fantasy genre. Here's the URL you should work with:

```plaintext
https://openlibrary.org/subjects/fantasy.json
```

Notice something about it: it ends with `.json`. This is how *this* API deals with the different formats of data. It's an older convention, normally we'd use something like `/api`, but here is a case where they chose not to! So don't forget to add that `.json` to the end of your URL.

### Function requirements
- It should send a fetch request to the correct URL (this is not a trick question, make sure to use the URL listed above)
- It should return a promise
- If there are no errors, the returned promise should resolve to an array of the first 3 books from the API
  - See the **Data Formatting** section for details on how to format each book in the array.
- If there is a fetch error, catch the error,. `console.warn` the error message, and the returned promise should resolve to `null`. 
- If API response is not `ok`, then *you* should throw an error with a message of `"Failed to get fantasy books"`
  - If you set up your function right, that means your function would `console.warn` the error message, and then resolve to `null`
- We do mean "first 3" — we double checked that URL, and there are definitely 3 books that meet all our needs. Please maintain the order so the tests pass (no sorting the books or anything)

### Data formatting
The data you get back from the API is going to be a little messy. It's going to be an object with some metadata in it, but the part we want to deal with is the `works` array, which holds our books. Here's an example response:

```js
{
  key: "/subjects/fantasy",
  name: "fantasy",
  subject_type: "subject",
  work_count: 13234,
  works: [
    { // the first "work" 
      authors: [
        {
          key: '/authors/OL22098A',
          name: 'Lewis Carroll'
        }
      ],
      availability: { /* whatever don't care */ },
      cover_edition_key: "OL31754751M",
      cover_id: 10527843,
      edition_count: 3557,
      first_publish_year: 1865,
      has_fulltext: true,
      ia: "bwb_KS-001-699",
      ia_collection: [ /* bunch more stuff */ ],
      key: "/works/OL138052W",
      lending_edition: "OL49950574M",
      lending_identifier: "bwb_KS-001-699",
      lendinglibrary: false,
      printdisabled: true,
      public_scan: true,
      subject: [ /* Another giant array of things */ ],
      title: "Alice's Adventures in Wonderland",
    },
    {
      // Next work
    }
  // ... and so on
  ]
}
```

We are going to ignore pretty much all of that data(which is common when dealing with 3rd party APIs). Ultimately we want an array of 3 objects that each look like this:

```js
[
  {
    title: "Alice's Adventures in Wonderland",
    author: {
      name: "Lewis Carroll",
      urlKey: "/authors/OL22098A",
    }
    coverUrl: "https://covers.openlibrary.org/a/id/10527843-M.jpg"
  },
  // 2 more items
]
```

Here's the fun part: format the response to make it look like our data! Here's some help:

- `title`
  -  This is just the `title` from the work object
- `author`
  - Books can have more than one author, but we don't care for now. So take the first author from the `authors` array and make an object with the `name` and `key` properties. 
  - `key` is being renamed to `urlKey` to make it a little clearer what that value actually is. It's basically the author's ID *plus* the route "handle" (`/authors`). We will use this `urlKey` later on in order to fetch that specific author's data.
- `coverUrl`
  - The url extension for the cover art.
  - Our response gives us a `cover_id` in each work, but lets do some work upfront to convert the id to the image URL:
    ```
    https://covers.openlibrary.org/a/id/[THE_ID_HERE]-M.jpg
    ```
  - For example, the id `13859660` corresponds to this image URL (test the URL in your browser!): `https://covers.openlibrary.org/a/id/13859660-M.jpg` 
  

### Test

You can certainly test out your progress by running `npm test`, however you should also test out your code by invoking your function.

In `app.js`, you can see that we've imported your `getFirstThreeFantasyBooks` function. As you see in `app.js` there's already a decent amount of code written out. Do not remove any existing code (or change things like IDs) as the tests need these to run.

Towards the bottom of the `app` function, look for the `// Fetch the books!` comment. There you can invoke `getFirstThreeFantasyBooks()` and console.log the returned set of books.

Run the program with `npm run dev` and pop open your console to view your logs. If you see your array of 3 books, you should be good to go!

Alright, with that, you should be all set to move on!

## Section 1.2 - renderBookList
Now that we have our data, we need to render it to the screen. You need to write a function `renderBookList` in `render-functions.js`, that takes in a `bookListEl` (a `ul` HTMLElement) and an array of `books`. These are the books our fetcher function will return! This function will mutate the passed in `bookListEl` and add a bunch of `li` elements to it, one for each book.

### Function Requirements
- The function should remove any existing children from the passed in `bookListEl`
- It should add a series of `li` elements to the `bookListEl` for each book in the `books` array
- Each `li` should have (in this order)
  - an `img` tag with a `src` of the `coverUrl` and an `alt` of `An old cover of [BOOK TITLE]`
  - a `p` tag with the text `Title: [BOOK TITLE]`
  - a `button` tag with the text `View [AUTHOR NAME]` and a `data-author-url-key` attribute with the value of `author.urlKey`
  
For example:
```html
<li>
  <img src="https://covers.openlibrary.org/a/id/13859660-M.jpg" alt="An old cover of Treasure Island">
  <p>Title: Treasure Island</p>
  <button data-author-url-key="/author/OL25963A">View Robert Louis Stevenson</button>
</li>
```

Don't worry about button functionality now, only rendering!

### Testing

We've already created a `bookListEl` variable for you to use.What you need to do here is use your fetch function `getFirstThreeFantasyBooks` to get some books, and then invoke `renderBookList` with the already created `bookListEl` variable and your fetched `books` to render your books to the screen! 

You'll know you've done it if the tests are passing and the page loads up your books!

### Slow API
While your playing around, you may worry that your images won't load. That's fine, this is not exactly the *fastest* api in the world. It takes a bit for the images to load up. If they eventually show up (and if your tests are passing), you're all set! (This is a prime example of why you mock things in tests)

### Data Layer separation
Do not call your fetching functions in your render functions! We want to keep our data layer and presentation layer separate.

Done with Feature 1! Nice job! Now, I know there are still those buttons, but those only come into play in the second feature!

# Feature 2: Getting an author
As you know each book has an author, but in order to get any actual information about them we need to make another fetch. Every time we make that fetch, we're going to display the results in the `author-info` div. So let's get to it!

## Section 2.1 - getAuthor
Inside `fetch-functions.js` we need to create the `getAuthor` function. It will take in a `urlKey` that we got from `getThreeFantasyBooks`. That means this time we can't hardcode the url. Look at the url we want to hit:

```plaintext
https://openlibrary.org/authors/{SOME_ID}.json
```

Don't forget that `.json` at the tail! But there's a minor wrinkle. In our `books` objects, we have a `urlKey` which is the author's ID *plus* the route handle (`/authors`). That means when you're making your fetch function, you need to take into account that you aren't passing in `OL22028A` but rather `/authors/OL22028A`. How would you combine that with the host (`https://openlibrary.org`) and the `.json` to get the right URL?

Just like before, we'll need to so some formatting of the data as well.

### Function Requirements
- It should make a fetch to the correct, dynamic url
- It should return a promise
- If there are no errors, it should resolve a formatted `author` object (see **Data Formatting** below for more details)
- If there is a fetch error it should resolve `null` and `console.warn` the error message
- If the API response is not `ok`, then *you* should throw an error with a message of `Failed to get author`
  - If you set up your function right, that means your function would `console.warn` the error message, and then return `null`

### Data formatting
The data you get back from the API is going to be a little messy again. Here's what we get:

```js
{
  "title": "[pseud.]",
  "key": "/authors/OL22098A",
  "death_date": "January 14, 1898",
  "links": [ /* so much stuff */ ],
  "type": { "key": "/type/author" },
  "name": "Lewis Carroll",
  "wikipedia": "http://en.wikipedia.org/wiki/Lewis_Carroll",
  "personal_name": "Carroll, Lewis",
  "bio": "Lewis Carroll is well known throughout the world as BLAH BLAAAHHHH BLAAAHHH MORE STUFF",
  "alternate_names": [ /* so much stuff */ ],
  "photos": [
    6285807,
    // possible other photo ids we don't care about after the first
  ],
  "remote_ids": { /* so much stuff */ },
  "location": "England",
  "birth_date": "January 27, 1832",
  "fuller_name": "Charles Lutwidge Dodgson",
  "source_records": [ /* so much stuff */ ],
  "latest_revision": 72,
  "revision": 72,
  "created": { /* so much stuff */ },
  "last_modified": { /* so much stuff */ },
}
```

And what we *want* at the end is:

```js
{
  birthDate: 'January 27, 1832',
  bio: 'Lewis Carroll is well known throughout the world as BLAH BLAAAHHHH BLAAAHHH MORE STUFF',
  wikipediaLink: 'http://en.wikipedia.org/wiki/Lewis_Carroll',
  name: 'Lewis Carroll',
  pictureUrl: 'https://covers.openlibrary.org/a/id/6285807-M.jpg',
}
```

Now, we aren't going to give you hints this time. Make sure you get the final format right, the tests are specific! In the example above we used the exact data so you can make sure you mapped your new properties to the right API properties. Mind the `pictureUrl` to make it correctly!

## Section 2.2 - renderAuthor
Just like before, we need to go into `render-functions.js` and write a function `renderAuthor` that takes in a `div` element and an `author` object and renders it to the screen. This function will mutate the passed in `div` element. Here are the specific tags to add (in order and ONLY add these tags)

- An `h2` with the text `[Author Name]`
- An `img` tag with a `src` of the `picture` and an `alt` of `A picture of [AUTHOR NAME]`
- A `p` tag with the text `Born: [AUTHOR BIRTH DATE]`
- A `p` tag with the text from the `bio` property
- An `a` tag with an `href` of the `wikipediaUrl` property and the text `Wikipedia Link`

And `renderAuthor` should clear out the passed in `div` of any existing children before adding these new ones. We're going to render every `author` to the same div to keep things simple and we don't want them to accumulate.

## Section 2.3 - Adding it to our app
Remember, each button in the books list has a button with a dataset attribute of the required author key. Your mission is to first attach a click listener to the list element with all our books, so that any time a button is clicked, we get the author data with `getAuthour` and then render it to the `author-info` div.

This action only has to fire when the user clicks the button, you don't need to load a default author or anything like that. Just make sure you're getting the right author for the right book!


# Feature 3: Making a new user
Now we're going to say goodbye to our library API and use `JSON Placeholder` to make a new user!

## Section 3.1 - createNewUser
There's one function left in out `fetch-functions.js` and that's `createNewUser`. This will need to take in a user object as the single argument. It will look like this:

```js
{
  username: 'Zo_Bro',
  isCool: true,
  favoriteLanguage: 'JavaScript',
}
```

It will send it to the API to create a new user. We aren't going to tell you how to do this one. Only this:
- https://jsonplaceholder.typicode.com is the host
- JSON placeholder follows RESTful conventions
- You want to create a new `user`
- If the request is successful, return the new user object that you get back
  - This is just going to be a mirror of our data that we sent, but with an `id` property of `11` added. It will *always* have an id of 11, that's ok! In our tests we can make it dynamic though, so don't just hardcode `11` in your function.
- If there is an error with the fetch, you should return `null` and `console.warn` the error message
- If the response is not `ok` then you should throw an error with the message `Failed to create new user`

## Section 3.2 - renderNewUserForm
Unlike the other sections, we need some way for a user to enter information. You need to create a function `renderNewUserForm` in `render-functions.js` that takes in a `form` element and renders the following HTML in it (that means mutate the passed in form!):

- A `label` with the text `Username`
- An `input` with an `id` of `username` and a `name` of `username`
- A `label` with the text `Is this user cool?`
- An `input` with an `id` of `is-cool` and a `name` of `isCool` and a `type` of `checkbox`
- A `label` with the text `Favorite Language`
- A `select` with an `id` of `favorite-language` and a `name` of `favoriteLanguage` and the following options *in this order*. The list below is both the text and the value of the option:
  - None
  - JavaScript
  - Python
  - Ruby
- A button with the text `Create User` to submit the form.

Do not attach any events here, just render the HTML. We'll attach the events later. The tests are exact, make sure you have these as we posted here.

## Section 3.3 - renderNewUser
Ok, and now we need to render the new user to the screen. You need to create a function `renderNewUser` in `render-functions.js` that takes in a `div` element and a `user` object and renders the following HTML to it:

- An `h2` with the text of the `username` property
  - The `h2` must also have a dataset attribute of `userId` with the value of the `id` property
- A `p` with the text `The hippest in the house!` if the `isCool` property is `true` and `A real square.` if it's `false`
- Another `p` with the text `Favorite Language: [FAVORITE LANGUAGE]`

Just like the other render functions, this function should remove any child elements form the passed in `div` element to avoid repeating any tags.

## Section 3.4 - Adding it to our app
Alright, now to add this to our app there are a few things we need to do:

- Render the form
- Attach an event listener to the form to handle submits
- The submission handler should call `createNewUser` with the form data (careful with that checkbox value! It's not a boolean by default...)
- After creating the user, call `renderNewUser` with the `newUserDiv` and the new user object


# That's it!
That's all you need to do! If you've done it all correctly, you should have a working app that looks like the screenshot at the top of this README. If you're having trouble, remember to breathe, and then read the tests. They're there to help you!
