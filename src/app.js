/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
};

let getRandom = limit => {
  return Math.floor(Math.random() * limit);
  
  let generateCard = () => {
    let suits = ["hearts", "spades", "diamonds", "clubs"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


return (
  suits[getRandom(suits.length)] +
  " " +
  ranks[getRandom(ranks.length)] +
  " " +
);
};
document.querySelector("#.card").innerHTML = generateCard();