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

* The HTML needs to be loaded first so that way we can reference it in the JS file
* We can't reference something that has not been built.
* Order matters things get loaded from top to bottom.



## ES Modules

ES (ECMAScript) modules, often referred to as ES6 modules or ECMAScript modules ES modules provide a native way to structure code into reusable components and share functionality between files. ES modules offer a more modern and standardized approach to modular JavaScript, with advantages in static analysis and optimization. However, the choice between ES modules and CommonJS often depends on the specific environment and requirements of a project. For server-side JavaScript (Node.js), CommonJS is still widely used, while ES modules are becoming the standard for client-side JavaScript in modern web development.

## Reminder of how we do imports
CommonJS uses require and module.exports or exports to achieve similar functionality.

```js
// Requiring in CommonJS
const { someFunction } = require('./module');

// Exporting in CommonJS
module.exports = {
    myFunction: function() {
        // Function implementation
    }
};
```

* ES modules: Use import and export statements to define dependencies and export functionality between files.

```js
// Exporting in ES modules

//Named Exports
export const myVariable = 'Hello';
export const myFunction = () => {
    // Function implementation
}

// Importing in ES modules
import { someFunction } from './module';

// Named Exports with Alias
```

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