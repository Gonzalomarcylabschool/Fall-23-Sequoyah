# Lesson 1.0.0 Intro to Node

### Resources 

* [What Is package.json?(article)](https://heynode.com/tutorial/what-packagejson/)
Lecture objectives
* [What Is package.json?(video)](https://www.youtube.com/watch?v=YS3FDBjZCNc)
* [Module.exports and exports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

### Lecture Objectives

* Understand what Node.js is and how we use it to run code on a server (any computer).

* Create modules and use named, and default exports to export data. 

* Load dependencies using the Node Package Manager(NPM).

* The various commands need when working on a Node.js project.

* Understand what a package.json is.

* Know the difference between npm package imports vs local modules

* What are npm scripts are and how to run them.

* How to run tests.

* How to read basic tests.


### Key Terms / Commands / Code

**Key Terms**

* Browser
* Server
* Runtime Environment
* Node.js
* file extension
* front-end
* back-end

##  Where can we use JavaScript

Short answer: a Browser: Chrome, FireFox, Brave, Safari etc, or a server(any computer).

The original runtime environment that JavaScript ran on was the browser (RIP NETSCAPE). This helped enhance client-side scripting (websites on a browser), and added functionality to otherwise static website (built only using HTML and CSS.) This was the only option for scripting websites. 

In order to run code server-side (on the computer) at that time, you would use some other language. Since 2009 we have been able to run JavaScript using a server runtime called Node.js. Someone basically took the browser runtime environment and made so that you can just run it in your computer. This opened up the world for people to be full-stack developers without the need to learn a whole new server specific language.

### This Mod server next Mod Browser.

Here at The Marcy Lab School, this first module will be taught and ran using Node.js. This is so we can learn the core of the language without having to worry about building and designing front-end websites. We'll do that in the next module!

We'll be able to use JavaScript in Node to create fun and sometimes useful scripts that we can run in the command line.

We'll also learn the value and importance of testing!


## Create your first script!

I know we have done this before, but here we are actually talking about what we are doing and demystifying it. For this lecture we don't have to worry about git so none of the commands will be need here (`git add` `git commit` etc...)

Make a dir called `first-script`
Inside, make a file called `index.js`
The `.js` is a “file extension”
Open up the file
Add some simple code like a log
Once you have made changes save you code (we are not staging or committing)

**Commands**
```bash
mkdir first-script 
touch first-script/index.js 
code first-script/index.js
```

**Code**
```js
console.log('Hello World');
```

## Running the file

You can run any JS file in the CLI. All you have to do is put `node` and then the file name. Any logs will output in the terminal. 

**Command**

```bash
node index.js
```

When you run this you can see that the program we wrote printed 'Hello World' in the terminal. This is a small program, this is not even a fraction of what we can accomplish with node. As we go on, you can see how much we can do!

## REPL

Node is a REPL environment. REPL stands for Read Evaluate Print Loop. It's an interactive programming environment where you can enter and execute code snippets one at a time (They remember variables created in the session). REPL environments allow developers to quickly test code snippets, algorithms, or ideas without creating full-fledged programs or scripts. In Node.js we accomplish this by the following:

Enter the command node without anything after it.
Type in your code and enter to move on.
add some more , and repeat as needed. 
Exit by doing Ctrl-C or type `.exit`

**Commands**
```bash
node

> let mom =  'norma'
undefined
> console.log(`my mother's name is ${mom}.`)
my mother's name is norma.
undefined
> 
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
```

## What is a module?

In the context of Node.js, think of a module as a toolbox or a set of tools that helps you build your programs. Imagine you're building a model airplane. Instead of making every single piece from scratch, you have a kit with various pre-made parts like wings, propellers, and wheels. Each part has a specific function and fits together with others to create the complete model.

In Node.js, a module is like one of these pre-made parts. It's a collection of JavaScript functions and objects bundled together, designed to perform specific tasks or add specific features to your program.

Let break this down:

* A module is an exported chunk of code that can be used across our project
* Each file can export a module
* Modules help us organize our code
