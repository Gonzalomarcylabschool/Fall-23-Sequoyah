# Command Line Interface

[Lecture Slides](https://docs.google.com/presentation/d/1JCyTysddqGIObjgmGS6iLcIcvyyFXKFe6wMVsnSYh64/edit?usp=sharing)

Lecture recording TBD

[Canvas Assignment](https://canvas.instructure.com/courses/7524631/assignments/41071717?module_item_id=94693590)

[Extra video resource](https://youtu.be/uwAqEzhyjtw?feature=shared)

## You will be able to…

* Understand what a command line interface (CLI) is.
* Compare and Contrast CLIs and Graphical User Interfaces (GUIs)
* Navigate your local file tree
* Create, copy, delete, and move files and directories
* How to run a JavaScript program using your CLI
* Explain what an "argument" is

## Key Terms/ Commands/ Cl.?ode:

### Technical Terms  
* Command Line Interface (CLI)
* Graphical User Interface (GUI)
* Arguments
* Control + C
* Directory
* CRUD

### Commands 
```cli
pwd
ls
cd <directory>
../
./
mkdir <dir_name>
touch <file_name>
cp <file> <dest>
node <file_name>
```

## Why CLI and not GUI

You are probably use to using a **Graphical User Interface** or **GUI**. This is the thing you see when you start up your Computer or use your phone. You can click on things and see the visual version of the directories structure. Using your mouse and keyboard you can Create Read Update and Delete things with a click (or several). 

### Graphical User Interface (GUI) and why people use it.

A Graphical User Interface (GUI) has icons and buttons which are:  

**Intuitiveness**: generally more intuitive and user-friendly, especially for individuals who are not familiar with command line operations or coding. 

**Ease of Use**: They make it easy to perform tasks through point-and-click interactions. Users can navigate through the system and perform actions without needing to memorize or type specific commands.

**Visual Representation**: they provide a visual representation of the system, making it easier to understand complex structures and relationships.

**Reduced Learning Curve**: typically there is a lower learning curve, allowing users to quickly become productive without extensive training. 

**Accessibility**: GUIs can be designed to be accessible to people that are differently able. They can include features like screen readers, magnifiers, and keyboard shortcuts, making it easier for users with different abilities to interact with the software.


### Command Line Interface (CLI) any why WE will use it
A "Command Line Interface" (CLI) is a text-based interface for: 

* Controlling your computer.
* Create and delete new files/directories
* Navigate between directories
* List the contents of a directory
* Much more!
  * **Resource Efficiency**: CLI uses fewer system resources. This can be critical in server environments or when dealing with resource-constrained devices.

  * **Speed and Efficiency**: Experienced users often find it to be faster and more efficient, especially for repetitive tasks. Commands can be scripted and automated, saving time and reducing the chance of errors.

  * **Troubleshooting**: provides detailed error messages and logs, which are invaluable for diagnosing problems and troubleshooting. 

With time and practice you will find that using the CLI is so much more powerful to use and will allow you to do things that you didn't even know you could do. 


## Command Line: How?

Open the VSCode Terminal.
The terminal will show up at the bottom.
Type in a command and hit Enter. Most commands will return an output message.

Mac: Terminal
Windows: Ubuntu
Everyone: VS Code Terminal


Pro tip If there is a keyboard shortcut, learn it: 

open terminal
Shortcut to open terminal  control +  `
Shortcut to open new terminal control + shift + `

## Your first command

`pwd` stands for "print working directory"
A "directory" is a folder in your file system.
The working directory is "which" directory you are currently "in".


## "Reading" a directory's contents

`ls` is short for "list".
It allows you to "read" (look at) the contents of the working directory.

### CRUD

💡In computing, you're always doing one of four things:
Creating, Reading, Updating, or Deleting (CRUD)

As we go on notice how we are using CLI to do one of the CRUD actions. 

## Creating Files and Directories

`mkdir <dir_name>` creates a new directory in the working directory
`touch <file_name>` creates a new file in the working directory
`cp <file_name> <dir_name>` copies a file into a directory

### Tips: 
Arrow up or down to find previous commands. 
Tab to auto-complete.

## Changing Directory

`cd <destination>` is the command for "changing directories".
`<destination>` is a placeholder for the directory you want to go to. 

In this example, we change directories to unit-0

## Moving "up" and "down/in"

When you write cd unit-0/test, your are moving "down/in" unit-0 then into test.
Two dots .. refers to the parent of the working directory. 
So, cd .. is how you move back "up".
If, I am in the test directory, where do these take me?

```
cd ..
cd ../../
cd ../../unit-0/my-new-repo
```
## Argument

Definition:
`cd <destination>` 
Example:
`cd ../unit-1`

In our definition, <destination> is just a placeholder.
In the example, the actual value we used: `../unit-1`
We refer to the `../unit-1` part as an "argument". 
The third definition on Wiktionary.org of "argument": "the contents themselves"
So if destination describes the kind of information we want, the argument is the actual content that we use.

Consider these commands and identify the arguments
```
mkdir javascript
cp index.js ../unit-1
ls
git status
```
mkdir(command) javascript(argument)
cp index.js ../unit-1 (argument)
ls(command) 
git(command)  status(argument)


## Practice Time: 

Create this file structure using the command line.

If I were in the hobbies folder, how would you navigate to the code folder?

```
lecture-0/
|
|---- code/
|        |
|        |--hello.js
|        |--index.html
|
|---- hobbies/
         |
         |--- indoors_hobbies.md
         |--- outdoor_hobbies.md

```

## Run a JavaScript file in your terminal

In the Command line, you can do the following:
```
touch hello.js
code hello.js
```

Once the file is open you can write the following code:

```js
console.log("Hello World");
```


## Terminating a program

Many programs will end ("terminate") on their own.

Other programs may require us to stop them ourselves. For example, the code below will run forever if we put it in our JavaScript program:

```js
while (true) { }
```

To terminate the program, use the keyboard shortcut Control+C


## Conclusion:  

Based on todays lecture you should be able to answer the following question: 

* How is a CLI different from a GUI?
* What can the command line do that our File Explorer cannot do?
* What commands did you learn in this lesson?
* How do we run a .js program? How do we terminate one?

