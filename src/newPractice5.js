function same(a, b) {
  let count = 0;
  for (let i in a) {
    // console.log(i);
    if (b.indexOf(a[i]) > -1) {
      count++;
    }
  }
  return count;
}

console.log(same("santhosh", "sa"));

const a = "santhosh";
const res = {};
a.split("").forEach((i) => {
  if (a.indexOf(i) !== a.lastIndexOf(i)) {
    res[i] = (res[i] || 0) + 1;
  }
});
console.log(res);

function reverse(number) {
  let reverseNumber = 0;
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return reverseNumber;
}
console.log(reverse(12345));
/////****Prime Number *******/////
let x = 1;
let y = 100;
let isPrime = false;
let array = [];
for (let i = x; i < y; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  if (isPrime) {
    array.push(i);
  }
}
console.log(array);

function* add(str) {
  for (let char of str) {
    yield char;
  }
  yield* str.split("");
}
let obj = add("vinod");
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

let reverseString = (input) => {
  let response = "";
  for (let i = input.length - 1; i >= 0; i--) {
    response += input[i];
    if (input[response.length] === "") {
      response += input[response.length];
    }
  }
  return response;
};
console.log(reverseString("sai is food boy"));

let arr = [1, 18, 6, 12, 24, 22, 34, 36];
let newArr = arr.filter((num) => num % 6 === 0);
console.log(newArr);

let arr2 = [1, 3, 5, 6, 2, 9, 8];
let result = arr2.sort((x, y) => y - x);
function maxVal(number) {
  let maxVal = 0;
  for (let val of number) {
    maxVal = (maxVal + val) * 10;
  }
  console.log(maxVal / 10);
}
maxVal(result);

let student = {
  name: "vinod",
  pin: 230,
  branch: "eee",
  marks: {
    year1: 60,
    year2: 70,
    year3: 80,
    backlog: {
      sub: "maths",
      sub1: "english",
    },
  },
};

function objFlat(obj) {
  return Object.values(obj).reduce(
    (acc, val) =>
      typeof val === "object" ? acc.concat(objFlat(val)) : acc.concat(val),
    []
  );
}
console.log(objFlat(student));

let missingArr = [1, 2, 3, 5, 7, 9];
let arr3 = [];
for (let i = 0; i <= 10; i++) {
  if (!missingArr.includes(i)) {
    arr3.push(i);
  }
}
console.log(arr3);

let str = "i love my india violet carden";
let result1 = str.split(" ");
let res1 = [];
result1.forEach((val) => {
  if (val.length > 4) {
    res1.push(val);
  }
});
console.log(res1);

let arr5 = [1, 5, 77, 8, 44, 100, 78, 200, 123];
function nthHighestarr(arr, n) {
  arr.sort((x, y) => y - x);
  if (arr.length > n) {
    return arr[n - 1];
  } else {
    return arr[arr.length - 1];
  }
}
console.log(nthHighestarr(arr5, 11));
///////****find length ****////////
let number = 12345;
let length = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  length++;
}
console.log(length);

let b = "my name is vinod";
let res2 = {};
b.split("").forEach((i) => {
  if (b.indexOf(i) !== b.lastIndexOf(i)) {
    res[i] = (res[i] || 0) + 1;
  }
});
console.log(res2);
