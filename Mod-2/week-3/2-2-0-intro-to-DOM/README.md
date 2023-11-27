# Intro to The Document Object Model (DOM)

The browser pulls in HTML documents, parses them, and creates object models of the pages in its memory. This model is the Document Object Model (DOM).

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

Each element in the HTML document is represented by a DOM node. These nodes can be accessed and changed using JavaScript.

When the model is updated, those changes are reflected on screen.

## The why

There are several reasons why someone might need to learn how to use the Document Object Model (DOM). It is a major part of Front-End and Full-Stack development for the following reasons:

Dynamic web pages: The DOM provides a way to manipulate the content, structure, and style of a web page dynamically, without requiring a page reload. This is particularly useful for creating rich and interactive user experiences.

Cross-browser compatibility: The DOM is a standard maintained by the World Wide Web Consortium (W3C), and is supported by all modern browsers. By using the DOM to manipulate web pages, developers can ensure that their code will work consistently across different browsers.

Better organization: The DOM provides a way to structure and organize the content of a web page in a hierarchical manner, making it easier to understand and maintain complex web applications.

Improved accessibility: The DOM allows developers to programmatically manipulate a web page to make it more accessible for users with disabilities. For example, by using JavaScript and the DOM, developers can provide alternative text for images, or create custom keyboard navigation for users who cannot use a mouse.

Server-side rendering: The DOM can also be used on the server-side to generate HTML that can be sent to the browser for rendering. This is particularly useful for web applications that need to provide a fast and responsive user experience, even on slow network connections.(More on this in future units)

## Back to HTML

First lets make a new file and practice doing some HTML.
1. how do we add an element that would be the heading of the page?
2. how do we add an element that just have some text?
3. how do we add an element with an image?

## Where is the DOM

1. inspect a page
2. check the elements 
3. delete some elements

## How do we accesses the DOM

One of the tools we have been using for some time now is the Developer tools in the browser. This allows us to log to the console, inspect elements, and use snippets. Using this tool lets see how the DOM works, test it and debug if need.

1. Review the window
2. Check the console object
3. See the document object
4. document.domain
5. document.url
6. So what is the document? (hint... con)
7. `let doc = new Document();


<details><summary>summary</summary>
We can use the Developer Tools to access, test and debug the DOM.
The document is a built in variable that is given to us by the browser.
It is an instance of the Document class and has many built in properties and methods that we will use to manipulate our web pages.
</details>

Before moving on let take a look at how the values for the `document.url` property are different on a few pages. 

### Any Question?

## How can we Visualize the DOM?

The short answer here is pencil and paper. As you know based on everything we do here, that not the whole answer. We have mentioned this before, the DOM is a tree and all of the elements are nodes. But how do we access the them, how can we see them? let go back to the dev tools.

1. document.children
2. document.children[0]
3. document.children[1]

<details><summary>visual</summary>
![the DOM](https://www.kirupa.com/cdn-cgi/mirage/83b7d9f226171f8d04b44b92cc4c76aa4b4f6206212b37f2317604a14b644e95/1280/html5/images/DOM_js_72.png)
</details>

## Quick CFU

What is the DOM and why should we learn to manipulate it?

<details><summary>some answers</summary>
* Manipulate webpages using JS
* Makes Dynamic webpage
* Dynamic webpages have a better User experience.

lets look at Wikipedia vs Youtube
</details>

What engineers would work with the DOM most often?

<details><summary>some answers</summary>
* Front-end Developers
* Full-Stack
</details>
