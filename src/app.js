/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["hearts", "spades", "diamonds", "clubs"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let card = document.querySelector(".card");
  let cardRank = document.querySelector(".number");

  let getRandom = limit => {
    return Math.floor(Math.random() * limit);
  };

  card.classList.add(suits[getRandom(suits.length)]);
  cardRank.innerHTML = ranks[getRandom(ranks.length)];
};
