# Lecture Prep 2.2.0 - Intro To The DOM

- [Lecture Prep 2.2.0 - Intro To The DOM](#lecture-prep-220---intro-to-the-dom)
    - [Part 1 - What is the DOM?](#part-1---what-is-the-dom)
    - [Part 2 - Opening an HTML Page](#part-2---opening-an-html-page)
    - [Part 3 - The chrome console](#part-3---the-chrome-console)
    - [Part 4 - Link a script](#part-4---link-a-script)
    - [Part 5 - Selecting Single Elements](#part-5---selecting-single-elements)
    - [Part 6 - Selecting multiple elements](#part-6---selecting-multiple-elements)
    - [Part 7 - Creating a new element](#part-7---creating-a-new-element)


### Part 1 - What is the DOM?

- A brief overview of the difference between the html page and the DOM (html page is static, the DOM is dynamic)
- The DOM gives us access to a lot of great methods and allows us to act upon the nodes
- This is conceptual, but they will have 0 context so **don’t dwell on this**, just show the image of the node tree vs the image of the same in html

Time: 5min<br/>
Total: 5min

### Part 2 - Opening an HTML Page

This is literally just so they know what they’re doing when they’re testing. Have the bare bones HTML already written so there are things to play with. Only add the scripts.

- Show them how to open the page in case they forgot (it’s been a while)
  - the `open` command from the terminal
  - clicking on the physical file
  - liveServer vscode
- The idea here is that, for now, there’s no magic, it’s just a file that the browser knows how to read
- More importantly, remind them that for now you have to save and refresh the page to see changes unless you use liveServer

Time: 5min<br/>
Total: 10min

### Part 3 - The chrome console

- Show them the main features
  - Console - where messages go and where you can run one liners, just like a Node REPL
    - show that the elements can be interactive by logging an array of objects and clicking to open
    - the examples are given in `console-interactive-example.js` that you can just paste in
  - Elements - Where the rendered DOM is visible, this will actively change
    - As you highlight elements, they highlight on the page
    - The element selector inspector (No idea what it’s called, but the cursor you can click to select elements on the page next to the mobile view toggle)
  - The mobile view toggle

Time: 10min<br/>
Total: 20min

### Part 4 - Link a script

We need to use some JS to manipulate the dom, so let's add a script tag and link to an actual `index.js` script to the tail of the body
  - explain there are lots of ways to load scripts, this is the simplest for now, but they'll learn more soon!
  - importance of using **relative** links, so either `./file.js` or nothing `'file.js'`
- Leave the original, explain that it’s possible to have multiple scripts, like 3rd party libraries
  - however, discourage doing this for now (we’ll explain why later when we introduce modules)


Time: 3min<br/>
Total: 23min

### Part 5 - Selecting Single Elements

- use `document.getElementById` to grab an id
- Explain the HTMLElement can be expanded, has properties like `id` and `textContent`
- Then show `document.querySelector()` and how it uses the same css selectors
  - Generally tell them to use querySelector for consistency across the codebase

Time: 12min<br/>
Total: 35min

### Part 6 - Selecting multiple elements

- use `document.querySelector` to grab multiple elements
    - grab all `li` then use a class instead
- Warn that a `NodeList` is **not** an array, and needs to be converted for HOF to work
  - annoyingly it's *kind* of an array so there's like a `.forEach` method and indexes
  - Use `Array.from()` or `[…]` to convert to an array. Tell them to stick to spread as it’s modern

Time: 10min<br/>
Total: 45min

### Part 7 - Creating a new element

- Explain the pattern
    - Create: `document.createElement`
    - Modify: add an id, class, and text
    - Add: `parentEl.append`
- Do this in a function and call it on the body and a `div`
- You can also just edit existing elements by grabbing something and changing the text content
- If time, show that you can use `innerHTML` to add html to an element but warn them that you must be careful with this as it can insert live, dangerous html code. Tell them to never use this with unsanitized user input

Time: 15min<br/>
Total: 60min