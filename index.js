'use strict';

//variables
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var player1 = "img1";
var player2 = "img2";

//console check
console.log(randomNumber1);
console.log(randomNumber2);

//changing of h1
if (randomNumber1 > randomNumber2) {
  document.getElementById("h1").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.getElementById("h1").textContent = "Player 2 Wins!";
} else {
  document.getElementById("h1").textContent = "Draw!";
}

// var randomNumber = randomNumber1;
// switch (randomNumber) {
//   case randomNumber = 1:
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//     break;
//   case randomNumber = 2:
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     break;
//   case randomNumber = 3:
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//     break;
//   case randomNumber = 4:
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     break;
//   case randomNumber = 5:
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     break;
//   default:
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//     break;
// }

//function of changing the images due to random numbers
function getImage(number, player) {
  var url = "images/dice" + number + ".png";
  var image = "." + player;
  document.querySelector(image).setAttribute("src", url);
}

getImage(randomNumber1, player1);
getImage(randomNumber2, player2);
