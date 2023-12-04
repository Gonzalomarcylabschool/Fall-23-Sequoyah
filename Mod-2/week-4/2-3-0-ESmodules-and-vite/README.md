# ES Modules and Vite

## Connect a JavaScript file to an HTML file, DOMcontentLoaded and Defer.

As you know to connect you JS file to your HTML file, we would 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>this is my site</h1>
  <script scr="./index.js"></script>
</body>
</html>
```
Why do we put the `<script>` tag at the end of the body?

<details><summary>Answer</summary>

Because our JavaScript uses the Elements in the body. If those Elements haven't loaded yet, we can't referenced them! We'll get errors like this:

```error
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
```

</details><br>

**Note**: this still works if we just open the `index.html` file


### DOMContentLoaded

So, **we need to wait for the document to load before executing our JavaScript**. One way to tackle this is through JavaScript:

```js
console.log("hello from index.js");

const main = () => {
  document.querySelector('h1').textContent = 'Coding is the best';
}

document.addEventListener('DOMContentLoaded', main);
```

Here, we attach an event listener to the `document` that **waits for all of the DOM content to load** before invoking our `main` function.

This lets us put the `<script>` in the `<head>` which means **the browser will start loading that file** but won't run it until the DOM is complete.

```html
<head>
  <!-- other meta tags + scripts -->
  <script src="./index.js"></script>
</head>
```

**Q: Is it still possible for us to have errors in our app?**

<details><summary>Answer</summary>

Yes! If accidentally put some DOM code outside of the safety of our `main` function.

```js
console.log("hello from index.js");

const existingText = document.querySelector('h1').textContent;
// ^ this will throw an error

const main = () => {
  document.querySelector('h1').textContent = 'Coding is the best';
}

document.addEventListener('DOMContentLoaded', main);
```

</details><br>

### Defer

Waiting for `'DOMContentLoaded` works but it still leaves room for errors! An easier solution is to use the `defer` attribute in the `<script>` tag.

```html
<head>
  <!-- other meta tags + scripts -->
  <script defer src="./index.js"></script>
</head>
```

And our JavaScript can skip adding the event listener:

```js
console.log("hello from index.js");

const main = () => {
  document.querySelector('h1').textContent = 'Coding is the best';
}

main();
```

Now...
* the `index.html` page can start loading the `index.js` file...
* but it won't execute that code until the DOM is done loading

## Loading Multiple JavaScript Files

Suppose I wanted to load another JavaScript file. Okay, just add another `<script>`:

```html
<head>
  <!-- other meta tags -->
  <script defer src="./other.js"></script>
  <script defer src="./index.js"></script>
</head>
```

This works but it has some issues. Let's explore why.

### Order Matters & Global Variables

```js
/* other.js */
const test = 'I am a test'; // this is a global variable

/* index.js */
console.log(test); // I can access this global variable over here
```

But if we swap the order of the scripts in HTML, we will get an error.

```html
<head>
  <!-- other meta tags -->
  <script defer src="./index.js"></script>
  <script defer src="./other.js"></script>
</head>
```

**Q: Why will this cause an error?**

<details><summary>Answer</summary>

It will cause an error because `test` is defined in `other.js` which hasn't been executed yet!

```error
Uncaught ReferenceError: test is not defined
```

</details><br>

So, the order matters. With 2 files this is manageable, just swap them. But when our application has hundreds or even thousands of files, good luck. We need a better solution.

### Importing and Exporting with ESModules

In Node, we could share code by importing and exporting using the **CommonJS** syntax:

<details><summary>See CommonJS Example</summary>

```js
/* other.js */
const test = 'I am a test';

module.exports = test // default export in CommonJS
module.exports = { test } // named export in CommonJS

/* index.js */

const test = require('./other.js'); // default import in CommonJS
const { test } = require('./other.js'); // named import in CommonJS
```

</details><br>

In the browser, we need to use a different syntax called **ESModule** syntax:

```js
/* other.js */
export const test = 'I am a test'; // named export

export default test; // default export

/* index.js */

import test from './other.js'; // default import in ESModule
import { test } from './other.js'; // named import in ESModule
```

### We can't use ESModule with normal scripts

There are two issues with this.

First, we can't use ESModule syntax in normal .js files. We will get this error:

```error
Uncaught SyntaxError: Cannot use import statement outside a module
```

We can easily fix this in our HTML by adding a `type="module"` to our `<script>` (and we can now remove `defer` since modules automaticaly defer)

```html
<head>
  <!-- other meta tags -->
  <script type="module" src="./index.js"></script>
</head>
```

But we will still get an error called a **Cross Origin Resource Sharing (CORS)** error. 

<details><summary>Details about CORS</summary>

The Cross-Origin Resource Sharing (CORS) policy is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original web page. When you open a file using the `file://` protocol (local file system), it is treated as a different origin compared to the typical `http://` or `https://` origins.

If your web app relies on making requests between different modules or resources and you are testing it by directly opening HTML files using the `file://` protocol in a browser, you may encounter CORS errors. This is because the browser enforces the same-origin policy and prevents cross-origin requests, including those made between different files using the `file://` protocol.

To avoid CORS issues during development, it's recommended to set up a local development server (e.g., using tools like `http-server`, `live-server`, or frameworks like Webpack with devServer). Running your web app through a local server will allow you to simulate a more typical web environment with `http://` or `https://` protocols, which should prevent CORS issues during testing.

([Learn more about CORS here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)).

</details><br>


To get around this, **we need to serve our `html` file from a Server, not from our file system**. This helps the browser see that all of the files are coming from the same origin. 

**Just use Live Server!**

This also plays nice when we deploy using Github Pages (more on that later this week).

## Summary

So, let's recap:

* When loading JavaScript into HTML, we need to wait for the DOM to load.
* Using `type="module"` defers automatically but we can also use `defer` for non-modular code.
* We have to use **ESModule** syntax in the browser:

```js
/* other.js */
export const test = 'I am a test'; // named export
export default test; // default export

/* index.js */

import test from './other.js'; // default import in ESModule
import { test } from './other.js'; // named import in ESModule
```

* When using modules in the browser, we need to serve the `index.html` file using a server

# Getting Started Using Vite 

This resource covers starting a Vanilla JS project using Vite.

- [Vite Overview](#vite-overview)
- [Setup](#setup)
- [Clean Up The Repo](#clean-up-the-repo)

## Vite Overview

**Objective(s)**: Learn key terms used when discussing Vite. 

### What is Vite?

Vite is a tool for developing web applications. It helps developers by creating a **development version** of your project and providing a server for previewing and testing that version. In this "development" mode you can quickly iterate on the project and see the application **"hot reload"** without having to restart the server. 

When it is time to **deploy** your project, it can **compile** the project into a **production version** of the project. The production version can easily be deployed on a third-party **hosting service**, like Github Pages or Render,

> For basic front-end only applications, we'll use **Github Pages**. Eventually we'll use a more robust hosting service like Render which can provide a full back-end server and a database server.
> 
### Why Use Vite?

Sure, you could build a project from scratch and manage your own "development" version and the "production" version. But **Vite is "lightweight"** (it doesn't slow down your process by using it) and the production version of your application will be **optimized for speed**.

**Vite is also quite versaitle**. It can be used for both simple and complex projects, from front-end only applications that use nothing but Vanilla JS to robust full-stack applications using frameworks like React.

## Setup

**Objective(s)**: Create a Github repo and the project starter code using Vite

First, create a Github repository and clone it down.

Inside the repo, create a [Vite](https://vitejs.dev/guide/) project called `app` using the `npm create vite` command:

```sh
npm create vite
# > Project Name: app
# > Select a framework: Vanilla
# > Select a variant: JavaScript
```

This will create a folder in your repo called `app`. **This is your development version of the application.**

Then `cd` into the directory, install Vite dependencies and other dependencies for the project, and start the Vite development server:

```sh
cd app
npm i
npm run dev
```

At this point, you should be able to open up http://localhost:5173 to view the application. As you can see, Vite provides you with a simple counter application to get started. 

**TODO: Poke around and see if you can understand how the file structure is organized and how the application works, starting with `app/index.html`**

## Clean Up The Repo

**Objective(s)**: remove unwanted code from the provided files and organizee all code into a src/ directory

Clean up the directory by removing some of the provided code. Delete the `counter.js` and `javascript.svg` files and move the `main.js` and `style.css` files into a `src` directory.

```sh
rm counter.js javascript.svg
mkdir src
mv main.js src/
mv style.css src/
```

All future JavaScript and CSS files you create should exist somewhere within `src`. Feel free to create more folders if you'd like.

Edit the provided starter code:
* Empty out the `main.js` file (keep the `import './style.css'` line)
* Empty out the `style.css` file, keeping the styles you want to keep (I like to keep `:root`, `body`, `h1`, and `#app` styles but its up to you — you can start fresh).
* Edit the `<script>` tag `index.html` (line 11) so that it references the new location of `main.js`

To test that everything works, add some code to your `main.js` file...

```js
console.log("hello world");
document.querySelector("#app").innerHTML += '<h1>Hello world</h1>';
```

...and then reopen http://localhost:5173. 

Once you've confirmed everything is connected, go ahead and **commit and push**. Let's get started!

> 💡 **Tip**: You don't need to stop and start you Vite Development Server because it has "hot reloading". If you ever need to run it again though, use the command `npm run dev`