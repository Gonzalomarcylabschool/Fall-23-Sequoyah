# 2-2-1-dom-events

An intro to events in the DOM

**Table of Contents**
- [Event Driven Architecture](#event-driven-architecture)
- [Event type, handlers, and the event object](#event-type-handlers-and-the-event-object)
- [Good to know, not to use: inline handlers](#good-to-know-not-to-use-inline-handlers)
- [Event Propagation](#event-propagation)
- [Event Delegation](#event-delegation)
- [Removing Event Listeners](#removing-event-listeners)

## Event Driven Architecture

So far, the code that we have written will be executed, one line after the other.

```js
console.log('a')
console.log('b')
console.log('c')
```

In **event-driven architecture**, some of the code that we write will only be executed in response to a **user event** such as:
* clicking a button
* moving your mouse
* using your keyboard

```js
// 1. select the element that will be the "target" of the event
// 2. define an event handler callback
// 3. make the button to "listen" for "click" events and respond by invoking the event handler

const button = document.querySelector('button');
const handleClick = (event) => {
  console.log('a click occurred!');
}
button.addEventListener('click', handleClick);
```

An element is programmed to "listen" for these events.

An **event handler** is the function that is invoked when an event "fires".

> See this in action in the `0-basic-examples/` website.

## Event type, handlers, and the `event` object

When you use `Element.addEventListener()` method, the first argument defines the event type which may be one of:
- `click`
- `mousemove`
- `keydown`
- `keyup`
- `submit`
- many more!

The second argument is an **Event Handler**, a callback function that is invoked when the event fires.
```js
// a generic event handler
const eventHandler = (event) => console.log(event);

// register an event listener on a button
document.querySelector('button').addEventListener('click', eventHandler);

// register these event listeners on the entire document
document.addEventListener('mousemove', eventHandler);
document.addEventListener('keydown', eventHandler);
```

When the event handler is invoked, it is given an `event` object as an argument. The `event` object has about the event, with different properties for different event types.

Here are some essential `event` properties:

- `event.target` — the Element that triggered the event. Available for all events
- `event.key` — the key pressed. Available for keyboard events.
- `event.x` / `event.y` — the location of the mouse in the window. Available for mouse events. (alias for `.clientX`/`.clientY`)

> See this in action in `turtle-walker/` website.

## Good to know, not to use: inline handlers

You can also define event handlers inline directly in HTML:

```html
<button onclick="console.log('hello world');">I have an inline handler!</button>
```

This is good to be aware of for when we get to React but you should NOT use this.

## Event Propagation

The key concept to understand is that **child events can affect parent elements**. 

"Event Propagation" is just a fancy way of saying “clicking on a child element affects the parents” 

What is the order it affects them in?

* _bubbling_ - default - means the child reacts first then the parent
* _capturing_ - rare - means the child reacts last.

When you click on a nested element:
a. you can always see your actual target: `event.target`
b. other elements can be made aware of this event and handle them. The handling Element is `event.currentTarget`

```js
const testPropagation = (event) => {
  console.log(`Event detected on #${event.target.id}`);
  console.log(`Event handled by: #${event.currentTarget.id}`);
}

document.querySelector('#outer').addEventListener('click', testPropagation);
document.querySelector('#middle').addEventListener('click', testPropagation);
document.querySelector('#inner').addEventListener('click', testPropagation);
```

## Event Delegation

Event delegation is the idea that you can have **a single event listener** on a **parent element** that can handle events for all of its **children**. 

This is useful for child elements that are added/removed dynamically. Like when a user adds a new item to a list.

```js
const ul = document.querySelector('#counting-list');
ul.addEventListener('click', (event) => {
  if (event.target.matches('li')) {
    const numberOfLiClicked = Number(event.target.innerText);
    const li = document.createElement('li');
    li.innerText = numberOfLiClicked + 1
    event.currentTarget.append(li);
  }
});
```

1. Grab a parent element
2. Have it listen for events, it will detect events triggered by its children
3. Identify the target to decide what you want to do using `event.target.matches()`

`event.target.classList.contains()` is also useful for identifying the target.

It's so much cleaner to use delegation in vanilla than adding individual listeners to each element.

## Removing Event Listeners
One of the reasons why passing a named callback function to your listeners is better is because you can then remove them if you need to. 

```js
const handleCountClick = (e) => {
  e.target.dataset.count++;
  e.target.innerText = e.target.dataset.count;
};
const counterButton = document.querySelector("#counter");
counterButton.addEventListener('click', handleCountClick);


const removeListenerButton = document.querySelector("#remove-listener");
removeListenerButton.addEventListener('click', (e) => {
  // To remove an event listener, provide the event type and the handler
  counterButton.removeEventListener('click', handleCountClick);
})
```

We remove event listeners to limit user interactions and also be 100% sure that we aren't committing memory leaks when we remove elements. (However, modern browsers are pretty good at cleaning up after us). 

**Q: Why can we write the `removeListenerButton` event listener as an inline arrow function but we can't for the `counterButton` event listener?**