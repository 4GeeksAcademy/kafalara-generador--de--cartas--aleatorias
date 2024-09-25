/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Array valores , palos y simbolos de los palos.
  const value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const palos = ["heart", "diamond", "spade", "club"];

  const symbols = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣"
  };

  //DOM document.getElementById
  let cardValue = document.getElementById("card-value");
  let topPalos = document.getElementById("top-palos");
  let belowPalos = document.getElementById("below-palos");
  let card = document.getElementById("card");

  // Aleatoria de valor y palo
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];
  let randomValue = value[Math.floor(Math.random() * value.length)];

  cardValue.innerHTML = randomValue;
  topPalos.innerHTML = symbols[randomPalos];
  belowPalos.innerHTML = symbols[randomPalos];

  console.log(Math.random());
  console.log(randomPalos);
  console.log(randomValue);

  card.classList.add(randomPalos);

  //intervalo de 10 segundos -> setInterval
  setInterval(window.onload, 10000);
};

//Generador de altura y ancho
function otherDimension() {
  const ancho = document.getElementById("ancho").value;
  const altura = document.getElementById("altura").value;
  const card = document.getElementById("card");
  card.style.width = ancho + "px";
  card.style.height = altura + "px";
}

document.querySelector("#Generador").addEventListener("click", window.onload);
document.getElementById("apply-size").addEventListener("click", otherDimension);
