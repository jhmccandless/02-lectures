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

// answer ///////////////////////////////////////////
const collatz = (num) => {
  let nums = [num];
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] % 2)) {
      nums.push(nums[i] / 2);
    } else if (nums[i] % 2) {
      if (nums[i] === 1) {
        break;
      } else {
        nums.push(nums[i] * 3 + 1);
      }
    }
  }
  console.log(nums.join(" "));
};

collatz(12);
*/

/*
How to remove all duplicates from a given string?

Write a program to remove all the duplicate characters from a given input String, like, if the given String is “Java” then the output should be “Jav”. The second or further occurrence of duplicates should be removed.


// answer ///////////////////////////////
const string = "Java";

const newStr = (str) => [...new Set(str)].join("");

console.log(newStr(string));
*/

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

// answer /////////////////////////////////
// only works for nums//////////////////////
const paliCheck = () => {
  let str = "";
  let ans = [0];
  for (let i = 99; i >= 10; i--) {
    for (let j = 99; j >= 10; j--) {
      str = i * j + "";
      if (str === str.split("").reverse().join("") && Number(str) > ans[0]) {
        ans.push(str);
        ans.shift();
        break;
      }
    }
  }
  return ans;
};

console.log(paliCheck());
*/
/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// answer/////////////////////////////////
const divisible = (mult) => {
  let num = mult;
  for (let i = 1; i <= mult; i++) {
    if (num % i) {
      num++;
      i = 1;
    }
  }
  return num;
};

console.log(divisible(20));
*/

/*
// reversing string words

let string = "Javascript is best";

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
