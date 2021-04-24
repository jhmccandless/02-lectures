"use strict";
const button1 = document.querySelector("#btn-1");
const area1 = document.querySelector("#sel-1");
let text1 = document.querySelector("#text-1").textContent;

const button2 = document.querySelector("#btn-2");
const area2 = document.querySelector("#sel-2");
let text2 = document.querySelector("#text-2").textContent;

const button3 = document.querySelector("#btn-3");
const area3 = document.querySelector("#sel-3");
let text3 = document.querySelector("#text-3").textContent;

const button4 = document.querySelector("#btn-4");
const area4 = document.querySelector("#sel-4");
let text4 = document.querySelector("#text-4").textContent;

const button5 = document.querySelector("#btn-5");
const area5 = document.querySelector("#sel-5");
let text5 = document.querySelector("#text-5").textContent;

const button6 = document.querySelector("#btn-6");
const area6 = document.querySelector("#sel-6");
let text6 = document.querySelector("#text-6").textContent;

const button7 = document.querySelector("#btn-7");
const area7 = document.querySelector("#sel-7");
let text7 = document.querySelector("#text-7").textContent;

const button8 = document.querySelector("#btn-8");
const area8 = document.querySelector("#sel-8");
let text8 = document.querySelector("#text-8").textContent;

const button9 = document.querySelector("#btn-9");
const area9 = document.querySelector("#sel-9");
let text9 = document.querySelector("#text-9").textContent;

area1.style.visibility = "hidden";

button1.addEventListener("click", function () {
  document.querySelector("#sel-1").style.visibility = "visible";
  document.querySelector("#brd-btn-1").style.visibility = "hidden";

  //   console.log("this worked");
});
