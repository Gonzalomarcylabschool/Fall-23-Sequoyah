////////////////////////
// Global Data Values //
////////////////////////

const player = document.querySelector("#player");
const playerPosition = {
  x: 0,
  y: 0,
}
const colors = ['red', 'blue', 'green', 'yellow', 'indigo', 'orange'];

//////////////////////////
// DOM Helper Functions //
//////////////////////////

const movePlayer = (x, y) => {
  playerPosition.x = x;
  playerPosition.y = y;
  player.style.left = `${x}px`;
  player.style.top = `${y}px`;
};

////////////////////
// Event Handlers //
////////////////////

/* 
every event has an event.target property that holds the Element
that the event was fired on
*/
const handlePlayerClick = (event) => {
  // console.log(event);
  const color = colors[Math.floor(Math.random() * colors.length)];
  event.target.style.background = color;
};

/* 
mousemove events have event.x and event.y properties for the 
position of the mouse on the screen when the event fires
*/
const handleMouseMove = (event) => {
  // console.log(event);
  movePlayer(event.x, event.y);
};

/* 
keydown (and other keyboard) events have an event.key property
which is a string representing the key that was pressed.
*/
const handleKeyDown = (event) => {
  // console.log(event);
  let x = playerPosition.x;
  let y = playerPosition.y;

  if (event.key === 'ArrowLeft') x -= 15;
  if (event.key === 'ArrowUp') y -= 15;
  if (event.key === 'ArrowRight') x += 15;
  if (event.key === 'ArrowDown') y += 15;

  movePlayer(x, y);
};

/////////////////
// Main Runner //
/////////////////

const main = () => {
  player.addEventListener('click', handlePlayerClick)
  document.querySelector('main').addEventListener('mousemove', handleMouseMove);
  document.body.addEventListener('keydown', handleKeyDown);
}

main();