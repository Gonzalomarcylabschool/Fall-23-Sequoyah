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
![DOM tree](./images/dom-tree.png)

Time: 5min<br/>
Total: 5min

### Part 2 - Opening an HTML Page

  - the `open` command from the terminal
  - clicking on the physical file
  - liveServer vscode

Time: 1min<br/>
Total: 10min

### Part 3 - The chrome console

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
  - there are lots of ways to load scripts, this is the simplest for now, but you'll learn more soon!
  - importance of using **relative** links, so either `./file.js` or nothing `'file.js'`
  Portability:

Relative links make your web project more portable. If you decide to move your entire project to a different directory or even to a different server, relative links can adapt more easily since they are based on the structure of your project rather than hard-coded absolute paths.
Ease of Maintenance:

Relative links simplify maintenance. If you need to update the location of a resource (like an image, stylesheet, or script), you only need to update the link in one place. Absolute links, on the other hand, might require changes in multiple locations if the base URL changes.
Collaboration:

When working on a project collaboratively or when sharing code with others, relative links reduce potential issues. Different team members may have different absolute paths, but relative links ensure that resources are referenced consistently.
Testing and Development Environments:

In development and testing environments, projects are often hosted on local servers or different subdomains. Relative links allow you to work seamlessly in different environments without having to change paths.
URL Consistency:

Relative links help maintain URL consistency within your project. If you use absolute URLs, you might encounter issues with mixed content warnings or encounter problems when transitioning between HTTP and HTTPS.

- Leave the original, explain that it’s possible to have multiple scripts, like 3rd party libraries
  - We don't need to this for now (we’ll explain why later when we introduce modules!)


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
- `NodeList` is **not** an array, and needs to be converted for HOF to work
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