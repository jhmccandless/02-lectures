"use strict";

/*
Given a list of integers that has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our list. (If there are multiple duplicates, you only need to find one of them.)

///// dont use this way

// const multArr = [];

// const findMults = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] - arr[j] === 0 && !multArr.includes(arr[i])) {
//         multArr.push(arr[j]);
//         arr.splice(i, 1);
//       }
//     }
//   }
//   return multArr;
// };

// console.log(findMults(intArr));

// answer///////////////////////////////////////
const intArr = [3, 4, 1, 5, 3, 3, 2, 7, 0, -4, 9, 4, 5];

const findMultiples = (arr) => {
  const multipleArr = [];
  const numAmount = {};
  const numbObj = Object.values(arr); //putting arr into object
  for (const x of numbObj) {
    numAmount[x] ? numAmount[x]++ : (numAmount[x] = 1);
  }

  for (const [num, amount] of Object.entries(numAmount)) {
    //putting selected keys of object into array
    if (amount > 1) {
      multipleArr.push(Number(num));
    }
  }
  return multipleArr;
};

console.log(findMultiples(intArr));

// big o
// loop in to count the instances and then sift through that
// look at the map and spread operator
*/

/*
You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world’s largest privately owned stock of cakes—the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

weight: the weight of the cake in kilograms
value: the monetary value of the cake in British pounds

For example:

weighs 7 kilograms and has a value of 160 pounds
{weight: 7, value: 160}

weighs 3 kilograms and has a value of 90 pounds
{weight: 3, value: 90}

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// const cakeTypes = [
//   { weight: 7, value: 160 },
//   { weight: 3, value: 90 },
//   { weight: 2, value: 15 },
// ];

Weights and values may be any non-negative integer. Yes, it’s weird to think about cakes that weigh nothing or duffel bags that can’t hold anything. But we’re not just super mastermind criminals—we’re also meticulous about keeping our algorithms flexible and comprehensive.
*/

// answer /////////////////////////////
// find density?

const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const allCakes = Object.assign({}, ...cakeTypes);

console.log(allCakes);
