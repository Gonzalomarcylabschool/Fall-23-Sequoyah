/* 
1. Grab the div using dom
2. make variables for the x axis, direction, speed, and count
3. write a function that helps to move the div across the screen
  * write the logic to move the div
  * move the div using DOM
  * change the direction
4. invoke the main function
*/
const box = document.querySelector('#box');

let x = 0;
let direction = 1; 
let speed = 5;
let count = 0;

const update = () => {
  x += speed * direction;
  box.style.left = `${x}px`;
  if(x > document.body.clientWidth){
    direction = -1;
    
  }
  if(x < 0 ){
    direction = 1;
    count++;
    box.textContent=count;
  }
}

const main = () => {
  setInterval(update, 10);
  console.log('start')
};

main();