const intArr = [3, 4, 1, 5, 3, 3, 2, 7, 0, -4, 9, 4, 5];
const multArr = [];

const findMults = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] === 0 && !multArr.includes(arr[i])) {
        multArr.push(arr[j]);
        arr.splice(i, 1);
      }
    }
  }
  return multArr;
};

console.log(findMults(intArr));

// big o
// loop in to count the instances and then sift through that
// look at the map and spread operator

let found_items = [];
let arr_items = [1, 2, 3, 3, 4];

arr_items.forEach((item) => {
  if (!found_items.includes(item)) {
    console.log("new item found");
    found_items.push(item);
  } else {
    console.log("duplicate found: ", item);
  }
});

// const cakeTypes = [
//   { weight: 7, value: 160 },
//   { weight: 3, value: 90 },
//   { weight: 2, value: 15 },
// ];

// const capacity = 20;

// const maxDuffelBagValue = function (cap) {};

// // maxDuffelBagValue(cakeTypes, capacity);
