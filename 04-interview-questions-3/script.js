"use stric";
/*
// first practice example
function sum(num1, num2) {
  return num1 + num2;
}

sum(40, 2);
sum(42, 0);
console.log("the answer to everything is", sum(42, 0));

const sum2 = (a, b) => a + b;

console.log(`The answer to everything is `${sum(42, 3)});
*/

/*
// second practic arrow function example
function stringLength(str) {
  console.log(`the length of "${str}" is:`, str.length);
}

let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

stringLength(longestCityNameInTheWorld);

const sl = (str) => console.log(`the length of "${str}" is:`, str.length);

sl(longestCityNameInTheWorld);
*/

/*
// third practice example
function stringLength(str) {
  let length = str.length;
  console.log(`the length of "${str}" is:`, length);
  return str.length;
}

stringLength("willynilly");

const sl = (str) => {
  // let length = str.length;
  // console.log(`the length of "${str}" is:`, length);
  return str.length;
};

sl("willynilly");

// trying to do callback function
let string2 = "funny";
const func = function (str, a) {
  console.log(`this ${str}`);
  console.log(a);
};

func(string2, sl(string2));
*/

/*
// fourth practice arrow function example
let alerts = [
  "Hey, you are awesome",
  "You are so wonderful",
  "What a marvel you are",
  "You're so lovely",
  "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES",
];

function showAlert(name) {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

showAlert("you ball of fluff");

const sa = (str) =>
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${str}`);

sa("Jason");
*/

/*
// arrow example 5
function oneTwoThreeRotate() {
  Array.prototype.slice
    .call(document.querySelectorAll("div,p,span,img,a,body"))
    .map(function (tag) {
      tag.style["transform"] =
        "rotate(" + (Math.floor(Math.random() * 3) - 1) + "deg)";
    });
}

oneTwoThreeRotate();

const rotates = () =>
  Array.prototype.slice
    .call(document.querySelectorAll("div,p,span,img,a,body"))
    .map(function (tag) {
      tag.style["transform"] =
        "rotate(" + (Math.floor(Math.random() * 3) - 1) + "deg)";
    });

rotates();
*/

/*
The Collatz Conjecture goes like this:

Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. Repeat the process indefinitely, and you’ll eventually reach 1.

Given a num variable, can you print all the numbers in num’s Collatz sequence until 1 is reached? Print the numbers space-separated (and each test case on its own line).
*/

const collatz = (num) => {
  let str = "";
  for (let i = 1; i >= num; i++) {
    if (!(num % 2)) {
      str.push(num / 2);
    } else if (!(num % 3)) {
      str.push(num * 3 + 1);
    }
  }
  console.log(str);
};

collatz(5);

// reversing string words

let string = "Javascript is best";
/*
// Hard coded
const wordsArr = [];
let word = string.slice(0, string.indexOf(" "));
wordsArr.push(word);
string = string.replace(`${word} `, "");
console.log(string);
console.log(wordsArr);
word = string.slice(0, string.indexOf(" "));
string = string.replace(`${word} `, "");
wordsArr.push(word);
console.log(string);
console.log(wordsArr);
word = string.slice(0, string.length);
string = string.replace(`${word} `, "");
wordsArr.push(word);
console.log(string);
console.log(wordsArr);

const wordsReversedArr = [];
for (let i = wordsArr.length - 1; i >= 0; i--) {
  wordsReversedArr.push(wordsArr[i]);
}

const phraseReversed = wordsReversedArr.join(" ");
console.log(phraseReversed);
*/

// Actuall Function
const reversePhrase = function () {
  let singleWord = [];
  const wordsArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      singleWord.push(string[i]);
    } else if (string[i] == " ") {
      wordsArr.push(singleWord.join(""));
      singleWord = [];
    }
  }
  wordsArr.push(singleWord.join(""));

  const wordsReversedArr = [];
  for (let i = wordsArr.length - 1; i >= 0; i--) {
    wordsReversedArr.push(wordsArr[i]);
  }

  const phraseReversed = wordsReversedArr.join(" ");
  return phraseReversed;
};
// console.log(reversePhrase());

// more concise way using string methods

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
// console.log(reverse(string));
