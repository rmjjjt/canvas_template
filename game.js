const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const gameTop = 0;
const gameBottom = canvas.height;
const gameLeft = 0;
const gameRight = canvas.width;

/*
*
*   Use these for keyboard event handling if needed
*   For example, in the draw function:
*     if (rightPressed && (characterX + character.width) <= gameRight) characterX += 1
*
*/
// let rightPressed = false;
// let leftPressed = false;
// let upPressed = false;
// let downPressed = false;
// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);
// function keyDownHandler(e) {
//   if (e.keyCode === 39) {
//     rightPressed = true;
//   } else if (e.keyCode === 37) {
//     leftPressed = true;
//   } else if (e.keyCode === 38) {
//     upPressed = true;
//   } else if (e.keyCode === 40) {
//     downPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.keyCode === 39) {
//     rightPressed = false;
//   } else if (e.keyCode === 37) {
//     leftPressed = false;
//   } else if (e.keyCode === 38) {
//     upPressed = false;
//   } else if (e.keyCode === 40) {
//     downPressed = false;
//   }
// }

function draw() {
  // Clear the canvas before drawing new elements in every frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Insert game ending code in 'if' statement
  // if ('something terrible and game-ending happens') {
  //   alert("GAME OVER");
  //   document.location.reload();
  // }
}

setInterval(draw, 10);