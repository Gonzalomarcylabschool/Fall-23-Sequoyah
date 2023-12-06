// a generic event handler
const eventHandler = (event) => console.log(event);

// register an event listener on a button
document.querySelector('button').addEventListener('click', eventHandler);
document.querySelector('#mouse-area').addEventListener('mousemove', eventHandler);

// register these event listeners on the entire document
document.addEventListener('keydown', eventHandler);