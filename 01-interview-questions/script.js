"use strict";

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

// Alg 2: count the values
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

// fibby();

// Alg 4: Prime Factors

// multiples
const isPrime = function (x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};

const multis = function (num) {
  let counter = num;
  const primesArr = [0];
  for (let i = 2; i <= counter; i++) {
    if (i % 2) {
      if (!(counter % i) && isPrime(i)) {
        primesArr.push(i);
        console.log(counter);
        counter = counter / i;
        primesArr.shift();
      }
    }
  }
  return primesArr;
};
// console.log(multis(600851475143));
// 600851475143

// 10,001 prime number
////////////////////////for loop dont work//////////////
// const primeCounts = function (num) {
//   const primesArr = [];
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       primesArr.push(i);
//     }
//   }
//   return primesArr;
// };
// console.log(primeCounts(50));

const primeCountsWhile = function (count) {
  let primeCounter = 0;
  const primeArr = [0];
  let i = 0;
  while (primeCounter < count) {
    if (isPrime(i)) {
      primeCounter++;
      primeArr.push(i);
      primeArr.shift();
    }
    i++;
  }

  return primeArr;
};

console.log(primeCountsWhile(6));
// ************************************************************
//////////////function check whether a is prime
// function isPrime(n) {
//   // Corner case
//   if (n <= 1) return false;

//   // Check from 2 to n-1
//   for (let i = 2; i < n; i++) if (n % i == 0) return false;

//   return true;
// }

// // Driver Code

// isPrime(11)
//   ? document.write(" true" + "<br>")
//   : document.write(" false" + "<br>");

////////////////////// from stack overflow
// function getPrimes(max) {
//   var sieve = [],
//     i,
//     j,
//     primes = [];
//   for (i = 2; i <= max; ++i) {
//     if (!sieve[i]) {
//       // i has not been marked -- it is prime
//       primes.push(i);
//       for (j = i << 1; j <= max; j += i) {
//         sieve[j] = true;
//       }
//     }
//   }
//   return primes;
// }
// console.log(getPrimes(13195));

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
// n = 600851475143

////////////////////////// from the worksheet
// create an array of known_primes
// var known_primes = [2, 3];

// function is_prime(n) {
//   for (var i = 0; i < known_primes.length; i++) {
//     if (n % known_primes[i] == 0) {
//       // NOT PRIME!!
//       return false;
//     } else {
//       // it might be prime, it might not.
//       // Its just not divisible by this number
//       continue;
//     }
//   }

//   known_primes.push(n);
//   return true;
// }

// console.log(is_prime(4534532235));
// ************************************************************

// pythag triplet
const pythag = function (total) {
  const sides = [a, b, c];
  total = sides.reduce((sum = (a, b, c) => a + b + c));
};

// single character difference///////////////////////////
const str1 = "aaabbcdd";
const str2 = "abdbacade";

// just straight up if no repeats
const compareStr = function () {
  const extraLetterArr = [];
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      extraLetterArr.push(str2[i]);
    }
  }
  return extraLetterArr;
};

// console.log(compareStr());

// for potential repeated numbers
const set1 = [...new Set(str1)];
const set2 = [...new Set(str2)];

const compare = function () {
  const diffArr = [];
  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i])) {
      diffArr.push(set2[i]);
    }
  }
  return diffArr;
};

// console.log(compare());
