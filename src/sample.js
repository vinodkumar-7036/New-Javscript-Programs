// let text = "123vv456gjsffgjhgas3131178f9";
// let data = text.split("");
// function funct(d) {
//   if (!isNaN(parseFloat(d))) {
//     return "required";
//   } else return String;
// }

// let result = data.filter((data) => funct(data) === "required");
// console.log(result);
// funct(text.forEach("")[0]);
// console.log(typeof text.forEach("")[0]);
// let pattern = /[0-9]/g;
// let result = text.match(pattern);
// console.log(result);
// console.log([1, 2, 3].includes("1"));

// let text1 = "vvvvv222nnvvvbb1222d345jjd98";
// let data1 = text1.split("");
// function funct1(d) {
//   if (!isNaN(parseFloat(d))) {
//     return "required";
//   } else return String;
// }
// let result1 = data1.filter((data) => funct1(data) === "required");
// console.log(result1);

// let arr = [1, -1, 0, null, undefined, 2, 3, 1, -1];
// let newArr = arr
//   .filter((value) => value)
//   .filter((val, index) => arr.indexOf(val) !== index)
//   .reduce((acc, val) => acc + val);
// console.log(newArr);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.getPersonalDetails = function (age, salary) {
//     return {
//       firstName: this.firstName,
//       lastName: this.lastName,
//       age: age,
//       salary: salary,
//     };
//   };
// }
// const personObj = new Person("vinod", "kumar");
// const result2 = personObj.getPersonalDetails(25, 30000);
// console.log(result2);
////Reerse Number/////
function reverseN(number) {
  let reverseNumber = 0;
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}
console.log(reverseN(12345));
/////Reverse Number/////
let number1 = 1234;
number1 = String(number1);
let result1 = number1.split("").reverse().join("");
console.log(result1);
// let number1 = 123456;
// let length = 0;
// while (number1 > 0) {
//   number1 = Math.floor(number1 / 10);
//   length++;
// }
// console.log(length);
/////*******setTimeout *******/////
// function x() {
//   ///loop continusely runs///
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, 3000);
//     }
//     close(i);
//   }

//   console.log("vinod");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 3000);
//   }

//   console.log("vinod");
// }
// x();

// function check(num) {
//   if (num <= 1) return "not prime";
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return "not prime";
//     }
//   }
//   return "prime";
// }
// console.log(check(19));

// let greet = "";
// function wishes(time) {
//   if (time <= 10) {
//     return (greet = "good morning");
//   } else if (time < 10 && time < 16) {
//     return (greet = "good afternoon");
//   } else {
//     return (greet = "good night");
//   }
// }
// console.log(wishes(11, 5));
let reverseString = (input) => {
  let response = "";
  for (let i = input.length - 1; i >= 0; i--) {
    response += input[i];
    if (input[response.length] === " ") {
      response += input[response.length];
    }
  }

  return response;
};
console.log(reverseString("my name is vinod"));

// let array = [1, [3, 56], 2, 3, [87, 96, [89, 123]]];
// let result = array.flat(Infinity);
// console.log(result);

function flattedArray(array, result = []) {
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? flattedArray(val, acc) : acc.concat(val),
    result
  );
}
console.log(flattedArray([1, 2, 3, [87, 96, [89, 123]]]));
var y = 10;
function closure() {
  let count = 0;
  return function (x) {
    return x + y + count++;
  };
}
let newFun = closure();
console.log(newFun(3));
console.log(newFun(5));

// function mul(x) {
//   return function (y) {
//     return y ? mul(x * y) : x;
//   };
// }
// console.log(mul(5)(3)());
const mul1 = (x) => (y) => y ? mul1(x * y) : x;
console.log(mul1(4)(5)());

let array = [1, [3, 56], 2, 3, [87, 96, [89, 123]]];
let result = array.flat(Infinity).reduce((acc, val) => acc + val);
console.log(result);

let x = 0;
setTimeout(() => {
  x++;
  console.log(x);
});

function CountLetters(input, arrayString) {
  return input.split(arrayString).length - 1;
}
console.log(CountLetters("santhosh", "sa"));

const a = "santhosh";
const b = "sa";

let count = 0;
for (let i in a) {
  if (b.indexOf(a[i]) > -1) {
    count++;
  }
}
console.log(count);

///////******* async&&await *******//////
async function add1() {
  let x = await new Promise((resolve, reject) => {
    setTimeout(() => reject(5), 100);
  });
  let y = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 2000);
  });
  console.log(x + y);
}
add1();
function flattedArray1(array, result = []) {
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? flattedArray1(val, acc) : acc.concat(val),
    result
  );
}
console.log(flattedArray1([1, 2, 3, [87, 96, [89, 123]]]));

/////*** string logic ******//////
const a1 = "my name is vinod";
let res = {};
a1.split("").forEach((i) => {
  if (a1.indexOf(i) !== a1.lastIndexOf(i)) {
    res[i] = (res[i] || 0) + 1;
  }
});
console.log(res);

let missingArr = [1, 3, 5, 7, 9];
let arr = [];
for (let i = 0; i <= 10; i++) {
  if (!missingArr.includes(i)) {
    arr.push(i);
  }
}
console.log(arr);
