"use stric";

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
      //   if (!singleWord.includes(" ")) {
      //     wordsArr.push(singleWord.join(""));
      //   }
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

console.log(reversePhrase(string));
