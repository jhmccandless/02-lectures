"use strict";
const fizzy = function () {
  //   const fizzArr = [];
  const word2 = "Fizz";
  const word1 = "Buzz";
  for (let i = 1; i <= 100; i++) {
    const div3 = !(i % 3);
    const div5 = !(i % 5);
    if (div3 && div5) {
      console.log(word2 + word1);
    } else if (div5) {
      console.log(word1);
    } else if (div3) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
};

// fizzy();

const fizzyMult = function () {
  let counter = 0;
  for (let i = 1; i < 1000; i++) {
    const div3 = !(i % 3);
    const div5 = !(i % 5);
    if (div3 || div5) {
      counter += i;
    }
  }
  return counter;
};

// console.log(fizzyMult());

// Alg 3: Fibonacci Sequence

const fibby = function () {
  const terms = [1, 2];
  let total = 0;
  let evenSum = 2;
  for (let i = 2; i < 10000; i++) {
    total = terms[0] + terms[1];
    terms.shift();
    terms.push(total);
    if (!(total % 2)) {
      evenSum += total;
    }
  }
  console.log(evenSum);
};

fibby();
