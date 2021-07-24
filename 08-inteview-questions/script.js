// Alg 1: FizzBuzz
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

// REVERS STRING

let string = "this is a string";

const reverseString = function (str) {
  console.log(str);
  let stringReverse = [];
  for (let i = 0; i < str.length; i++) {
    stringReverse.unshift(str[i]);
  }
  return stringReverse.join("");
};

console.log(reverseString(string));

// removing string

let array = [1, 2, "two", false, null, 0, -2, "working", true];
const removeString = function (arr) {
  console.log(arr);
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(typeof arr[i] === "string")) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(removeString(array));
