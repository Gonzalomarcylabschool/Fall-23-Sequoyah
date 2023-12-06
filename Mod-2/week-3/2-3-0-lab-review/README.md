This README documents my process for building this simple Todo App using Vite. Use it like a tutorial if you would like.

<!-- TOC -->

- [Vite](#vite)
  - [What is Vite?](#what-is-vite)
  - [Why Use Vite?](#why-use-vite)
- [Setup](#setup)
- [Clean Up The Repo](#clean-up-the-repo)
- [Planning Out The Data](#planning-out-the-data)
- [Creating New Todos](#creating-new-todos)
- [Local Storage](#local-storage)
- [Creating a Data Layer for CRUD](#creating-a-data-layer-for-crud)
- [Connecting the Form with the Data Layer](#connecting-the-form-with-the-data-layer)
- [Rendering All Todos](#rendering-all-todos)
- [Deleting and Updating Todos](#deleting-and-updating-todos)
- [Configure Vite for Deployment on Github Pages](#configure-vite-for-deployment-on-github-pages)
- [Publish on Github Pages](#publish-on-github-pages)

<!-- /TOC -->

## Vite

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


## Planning Out The Data

**Objective(s)**: Decide on a structure for the todo data and make a starting data set (called a "seed")

To start this project, I want to keep things simple. I want each of my todos to be an object with at minimum a unique id, a title, and a Boolean for marking the todo as complete or not. So something like this:

```js
{
  uuid: "5affd4e4-418d-4b62-beeb-1c0f7aaff753",
  title: "take out the trash",
  isComplete: false
}
```

It is often helpful to create some starter data that can be shown to the user when the application first loads. So I'll create a `todos.json` file in the `src/` directory with an Array of these Objects that can be loaded by the application:

```json
[
  {
    "uuid": "5affd4e4-418d-4b62-beeb-1c0f7aaff753",
    "title": "Take out the trash",
    "isComplete": false
  },
  {
    "uuid": "32521ef4-d64c-4906-b06d-f3d0d6b16e0f",
    "title": "Wash the dishes",
    "isComplete": false
  },
  {
    "uuid": "8b144d62-faa7-4226-87e1-096d7c1bedc7",
    "title": "Pay rent",
    "isComplete": true
  }
]
```

Loading this data into our `.js` files is easy! In `main.js`, just add:

```js
import initialTodos from './todos.json';
```

The variable name `initialTodos` can be whatever you want.

A little bit of code let's us see this data on the page:

```js
import initialTodos from './todos.json';

initialTodos.forEach((todo) => {
  document.querySelector('#app').innerHTML += `<li>${todo.title}</li>`;
});
```

## Creating New Todos

**Objective**: Make a form that let's the user create new todos!

**Q: Which data does the user need to provide?**

Again, our todos should be Objects that look like this:

```js
const todo = {
  uuid: "5affd4e4-418d-4b62-beeb-1c0f7aaff753",
  title: "take out the trash",
  isComplete: false
}
```

To make these todo Objects, the user provides the `title` only. We can generate the `uuid` for them, and the `isComplete` property we can just assume is `false` to start with.


So, we need a form with a single text input for the title of the todo. Don't forget that every form needs:
* An `aria-label`
* An `h2`
* `input` elements with a matching `label` and a camelCase `name`
* A `button` to fire the `'submit'` event


**<details><summary>🚀 See how I did it!</summary>**

```html
<form id="new-todo-form" aria-label="new-todo-form">
  <h2>What do you need to do?</h2>
  <div class="label-input-container">
    <label for="todo-title">Title</label>
    <input type="text" name="todoTitle" id="todo-title" required />
  </div>
  <button>Add</button>
</form>
```

</details><br>

With the form built, we need to
* connect a `'submit'` event listener to the form
* prevent the default behavior
* collect the data from the form input 
* create a new todo object with a unique `uuid`, a `title`, and a `isComplete` property
* reset the form
* do something with the new object... (for now let's just print it to the console).

**<details><summary>🚀 See how I did it!</summary>**

```js
import { v4 as uuidv4 } from 'uuid';

const handleNewTodo = (e) => {
  e.preventDefault();

  const form = e.target;
  const newTodo = {
    uuid: uuidv4(),
    title: form.todoTitle.value,
    isComplete: false
  }
  
  console.log(newTodo);

  form.reset();
};

const main = () => {
  document.querySelector("form#new-todo-form").addEventListener('submit', handleNewTodo);
};
```

</details><br>

Once again, return to http://localhost:5173 and test out your form with the Chrome Developer Console open!

Once you've confirmed that you can create new todo Objects, **commit and push** your progress!

## Local Storage

**Objective(s)**: Understand what `localStorage` is and how it works

The `todos.json` file will just be the "seed" for our application's data. If we want to more permanently create, update, or delete todos, we'll use the user's [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).

`localStorage` is a built-in API (you don't need to import anything) for storing data in the user's browser's memory. When data is stored in `localStorage`, it will stay there, even if the page is reloaded or the tab is closed. 

There are two primary functions to use when dealing with `localStorage`:
1. `localStorage.setItem('key', value)`
2. `localStorage.getItem('key')`

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
```

Note: **`localStorage` only supports storing strings** so, in the example above, the `person` Object is turned into a string before being stored. When we retrieve it, it is still a string.

To properly store and retrieve Objects/Arrays, we should **stringify** and **parse** the values.

```js
const person = { name: "Alex" };
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

So, to help us deal with this easily, we can create these handy helper functions:

```js
// sets a new key-value pair in local storage.
const setLocalStorageKey = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// tries to get a value from local storage.
const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const names = ['alice', 'bryan', 'charlotte'];
setLocalStorageKey('names', names);
console.log(getLocalStorageKey('names')); // ['alice', 'bryan', 'charlotte']
```

Try copy-pasting that code into `main.js` and see what happens in your Chrome Developer Console!

## Creating a Data Layer for CRUD

**Objective(s)**: Create functions for interacting with `localStorage` in a controlled and predictable manner, and make those functions available by exporting them

To keep things organized, I'll create a separate file called `data-layer-utils.js` in the `app` directory with the following functions (remember to export them as named exports!):

```js
import initialTodos from './todos.json';

//////////////////////////////////
// Generic localStorage Helpers //
//////////////////////////////////

// sets a new key-value pair in local storage.
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// tries to get a value from local storage.
const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}

///////////////////////
// Todo List Helpers //
///////////////////////

// Note: We export only these, to create an API for our data layer

// sets the todos Array in localStorage with the key 'todos'
export const setTodos = (todos) => {}
// returns the Array of all todo Objects from localStorage
export const getAllTodos = () => {} 
// adds a new todo Object to the Array of todos in localStorage
export const addTodo = (todo) => { } 
// finds a todo by uuid and toggles the found todo's isComplete property 
export const toggleTodoComplete = (uuid) => { } 
// finds a todo by uuid and removes it from the Array of todos
export const deleteTodo = (uuid) => { } 
// stores todos from the todos.json file in localStorage, but only if localStorage doesn't have them already
export const initializeTodosIfEmpty = () => {}
```

> 🚀 **Complete Code**: see the complete [`data-layer-utils.js` file here](./app/src/data-layer-utils.js)

Once I complete these functions, I'll import them into `main.js` and test them out:

```js
import './style.css';
import { getAllTodos, initializeTodosIfEmpty, addTodo, toggleTodoComplete, deleteTodo } from './data-layer-utils';

const main = () => {
  initializeTodosIfEmpty(); 
  console.log(getAllTodos()); 
  // confirm that default todos were added

  addTodo({ 
    uuid: 1, 
    title: 'trash', 
    isComplete: false 
  });
  console.log(getAllTodos()); 
  // confirm new todo was added

  toggleTodoComplete(1);
  console.log(getAllTodos()); 
  // confirm todo isComplete is now true

  deleteTodo(1);
  console.log(getAllTodos()); 
  // confirm todo was deleted

  // other code...
}

main();
```

Once I've confirmed that I can get all todos, create a new todo, update the todo, and delete it, I'll **commit and push** my progress.

## Connecting the Form with the Data Layer

**Objective(s)**: Use the form to add new todo Object to `localStorage`

Remember how our form is just printing out the new todo Object, but isn't doing anything else with it? 

Let's use the `addTodo` helper function we made in the `data-layer.utils.js` file to add the new todo Object to `localStorage`:

```js
import { v4 as uuidv4 } from 'uuid';
import { getAllTodos, initializeTodosIfEmpty, addTodo, toggleTodoComplete, deleteTodo } from './data-layer-utils';

const handleNewTodo = (e) => {
  e.preventDefault();

  const form = e.target;
  const newTodo = {
    uuid: uuidv4(),
    title: form.todoTitle.value,
    isComplete: false
  }
  addTodo(newTodo); // imported from data-layer-utils 

  form.reset();
};

const main = () => {
  initializeTodosIfEmpty();

  document.querySelector("form#new-todo-form").addEventListener('submit', handleNewTodo);
};
```

## Rendering All Todos

**Objective(s)**: Render all todos in `localStorage` as a list. When new todos are added, they appear as well. 

When rendering the todos, I want them to be in a list and each have this HTML structure:

```html
<li data-uuid="5affd4e4-418d-4b62-beeb-1c0f7aaff753" class="todo-card">
  <h3>Take out the trash</h3>
  <div>
    <div class='label-input-container'>
      <label>Complete</label>
      <input type="checkbox" name="isComplete" checked="">
    </div>
    <button class="delete-todo">🗑️</button>
  </div>
</li>
```

Note how the `li` element has the `uuid` value of the todo as a `data-uuid` attribute! This will come in handy later when we want to delete / update specific todo items.

To achieve this in an organized fashion, in `main.js` I will create two new functions
1. `renderTodoCard(todo)` for rendering a single todo "card". Make sure that it matches the structure above!
2. `renderTodos()` for getting the list of todos and rendering each todo.

You'll also want to:
* create a `section` to with a `ul` in `index.html` to display your todos
* empty out the `innerHTML` of that `ul` each time you invoke `renderTodos()`
* invoke `renderTodos()` after adding a new todo in the `'submit'` event handler.

**<details><summary>🚀 See what I did!</summary>**

```js
const renderTodoCard = (todo) => {
  const todosList = document.querySelector("ul#todos-list");
  const li = document.createElement('li');
  const h3 = document.createElement('h3');

  li.dataset.uuid = todo.uuid;
  li.classList.add('todo-card');
  h3.textContent = todo.title;

  const labelInputButton = document.createElement('div');
  labelInputButton.innerHTML = `
    <div class='label-input-container'>
      <label>Complete</label>
      <input type="checkbox" name="isComplete" ${todo.isComplete ? "checked" : ""}>
    </div>
    <button class='delete-todo'>🗑️</button>`;
  li.append(h3, labelInputButton);
  todosList.append(li);
}

const renderTodos = () => {
  document.querySelector('ul#todos-list').innerHTML = "";
  getAllTodos().forEach(renderTodoCard);
}

const handleNewTodo = (e) => {
  // other code
  renderTodos();
};

const main = () => {
  // other code
  renderTodos();
}
```

</details><br>

Use `npm run dev` to preview the application, using the Chrome Developer Console to debug.

At this point, you should see the todos displayed with the structure above and you can take some time to style them.

## Deleting and Updating Todos

**Objective(s)**: Handle users toggling todos as complete. Handle users deleting a todo.

To handle deleting and updating todos, we want to detect `'input'` events on the checkboxes and `'click'` events on the delete buttons inside of each `li.todo-card`.

To avoid creating a new event listener on each `li.todo-card`, we'll take advantage of **propagation** and create two **delegation event handlers** on the `ul#todos-list`, one for updating and one for deleting.

The structure of each delegation event handler should be roughly the same:
* check to see if the target is what it should be
* get the `uuid` from the closest `li` parent
* invoke the appropriate function imported from your data layer
* re-render the todo list

**<details><summary>🚀See what I did!</summary>**

```js
// other code

const handleTodoChange = (e) => {
  if (!e.target.matches('input[type="checkbox"]')) return;
  const uuid = e.target.closest('#todos-list>li').dataset.uuid;
  toggleTodoComplete(uuid);
  renderTodos();
};

const handleDeleteTodo = (e) => {
  if (!e.target.matches('button.delete-todo')) return;
  const uuid = e.target.closest('#todos-list>li').dataset.uuid;
  deleteTodo(uuid);
  renderTodos();
};

const main = () => {
  // other code

  // put the event handlers on the ul, not on the individual li elements.
  document.querySelector("ul#todos-list").addEventListener('input', handleTodoChange);
  document.querySelector("ul#todos-list").addEventListener('click', handleDeleteTodo);
};
```

This is where having the `uuid` as a data attribute on each todo `li` comes in handy! Whenever a checkbox or button is clicked, we can check the `li` parent element and get the `dataset.uuid` value from it. Then, we can easily feed it to our data layer helper functions before re-rendering.

</details><br>

## Configure Vite for Deployment on Github Pages

**Objective(s)**: Prepare for deployment and build the production version of the app.

Congrats! The app is built! We can run it locally, but wouldn't it be sweet if everyone on the internet could use it??

Do some final testing and styling on the development server and then we get get this thing published!

Before we can publish the Github pages, we want to make the **production version** of the application. Before we do that, we'll need to configure Vite to create that version in the right location.

Create a Vite configuration file

```sh
touch vite.config.js
```

And put this inside:

```js
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages expects an index.html in the root directory
  // so just run npm build before pushing to GitHub and this will rebuild our assets to the root
  build: { outDir: '..' },
  // needed for github pages just put the repo name here
  // For example, my repo is located at https://github.com/benspector-mls/f23-2-3-0-todo-app-example
  // so I put:
  // base: '/f23-2-3-0-todo-app-example/'
  base: '/your-repo-name-here/', 
});
```

Now, run the command

```sh
npm run build
```

This will **compile** the code you've written in your `app/` folder into optimized static files that can quickly be served by Github pages. It will put those files in the root directory of your repo, where Github expects to find an `index.html` file and any associated assets.

You can see what this "deployed" version will look like by running the command...

```sh
npm run preview
```

...which will serve the application at http://localhost:4173/

Finally, **commit and push** your new compiled version to Github!

## Publish on Github Pages

**Objective(s)**: Publish your web app!

Deploying your application on Github Pages is about as easy as it gets:

1. Open the repo on Github.com
2. Go to the <kbd>Settings</kbd> tab
3. Find the <kbd>Pages</kbd> section
4. Make sure that **Source** is **Deploy from a branch**
5. Below, set **Branch** to `main` (or whatever branch you're using)
6. Click **Save** and wait a few minutes! You should see the URL of your application.
7. Each time you push a new commit to `main`, your page will redeploy!

Congrats!! You've done it! Give yourself a pat on the back and show of to your friends and family what you've done. 

What could you add to this app to make it even better?

Here are some idea:
* Make it mobile friendly!
* Make the title editable
* Add a due date
* Add a filter
* Keep a separate list of completed todos