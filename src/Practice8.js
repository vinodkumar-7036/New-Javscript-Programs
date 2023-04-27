function Same(a, b) {
  let count = 0;
  for (let i in a) {
    // console.log(i);
    if (b.indexOf(a[i]) > -1) {
      count++;
    }
  }
  return count;
}
console.log(Same("santhosh", "sa"));

let array1 = ["vinod", "kumar", "software", 30];
// let [firstName, lastName] = array;
// let [firstName, ...rest] = array1;
console.log(rest);
// console.log(firstName);

let options = {
  title: "software",
  age: 30,
  ph: 3456,
};

let { title, ...rest } = options;
console.log(rest);

for (let i = 5; i >= 0; --i) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  console.log(stars);
}

/////////*****Flatted array *******////////
function flattedArray(array, result = []) {
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? flattedArray(val, acc) : acc.concat(val),
    result
  );
}

console.log(flattedArray([1, 2, 3, [87, 96, [89, 123]]]));

//////*******Closure ********/////
var y = 20;
function closure() {
  let count = 0;
  return function (x) {
    return x + y + count++;
  };
}
let newFun = closure();
console.log(newFun(5));
console.log(newFun(7));

///////*******Currying *******////////
function mul(x) {
  return function (y) {
    return y ? mul(x * y) : x;
  };
}
console.log(mul(7)(8)());

const mul1 = (x) => (y) => y ? mul1(x * y) : x;
console.log(mul1(6)(8)());

///////*******Generator******///////

function* naturalNumber() {
  let i = 1;
  for (i = 1; i <= 10; i++) {
    yield i;
  }
}
let count = naturalNumber();
console.log(count.next().value);
console.log(count.next().value);

function* Generator() {
  yield 1;
  yield 2;
  yield 3;
}
const process = Generator();
console.log(process.next());
console.log(process.next());
console.log(process.next());

let array = [1, [3, 56], 2, 3, [87, 96, [89, 123]]];
let result = array.flat(Infinity).reduce((acc, val) => acc + val);
console.log(result);
///////*****practice *******//////
function Same2(a, b) {
  let array3 = a.split("");
  let array4 = b.split("");
  return array4.every((item) => {
    if (array3.includes(item)) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(Same2("santhosh", "ant"));

let arr1 = [1, 2, 3, 4, 5, 16, 28];
// function findMax(arr) {
//     let max = 0
//     for (let i = 0; i <= arr.length; i++) {
//         // if (arr[i] > max) {
//         //     max = arr[i]
//         // }
//         if (arr[i] < arr[i + 1]) {
//             max = arr[i + 1]
//         }
//     }
//     return max;
// }
// console.log(findMax(arr1))

// let firstNum = 0;
// let secondNum = 0;
// let newArr = [1, 3, 55, 9, 64]

// newArr.forEach((value) => {
//     if (value > firstNum) {
//         secondNum = firstNum;
//         firstNum = value;

//     } else if (value > secondNum) {
//         secondNum = value;
//     }
// })
// console.log(firstNum, secondNum)

let reverseString = (input) => {
  let response = "";
  for (let i = input.length - 1; i >= 0; i--) {
    // if (input[i] !=" ") {
    response += input[i];
    // }
    if (input[response.length] === " ") {
      response += input[response.length];
    }
  }
  return response;
};
console.log(reverseString("sai is food boy"));

let firstNum = 0;
let secondNum = 0;
let newArr = [1, 3, 5, 45, 6, 77];
newArr.forEach((value) => {
  if (value > firstNum) {
    secondNum = firstNum;
    firstNum = value;
  } else if (value > secondNum) {
    secondNum = value;
  }
});
console.log(firstNum, secondNum);

let arr = [1, 2, 3, 3, 2, 4];
// console.log(arr.filter((val, index) => arr.indexOf(val) != index))
let array4 = arr.filter(
  (val) => !arr.filter((val, index) => arr.indexOf(val) !== index).includes(val)
);
console.log(array4);

/////****secondletter Uppercase******//////
let days = ["sun", "mon", "tue"];
for (let key of days) {
  key = key.charAt(0) + key.charAt(1).toUpperCase() + key.substring(2);
  console.log(key);
}
//////******firstletter uppercase *******//////
let days1 = ["sun", "mon", "tue"];
for (let key1 of days1) {
  key1 = key1.charAt(0).toUpperCase() + key1.substring(1);
  console.log(key1);
}

// let x = 0;
// let y1 = 100;
// // let isPrime = false;
// const array1 = [];
// for (let i = x; i < y1; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       // isPrime = false;
//       break;
//     } else {
//       // isPrime = true;
//     }
//   }
//   if (isPrime) {
//     array1.push(i);
//   }
// }
// console.log(array1);

let fruits = ["orange", "apple", "guvava"];
for (let key2 of fruits) {
  key2 = key2.charAt(0) + key2.charAt(1).toUpperCase() + key2.substring(2);
  console.log(key2);
}

let firstNum1 = 0;
let secondNum1 = 0;
let newArr1 = [1, 3, 5, 45, 6, 77];
newArr1.forEach((value) => {
  if (value < firstNum1) {
    secondNum1 = firstNum1;
    firstNum1 = value;
  } else if (value < secondNum1) {
    secondNum1 = value;
  }
});
console.log(firstNum1, secondNum1);

function reverse(number) {
  let reverseNumber = 0;
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}
console.log(reverse(12345));

let number = 1234589;
let length = 0;
while (number > 0) {
  number = parseInt(number / 10);
  length++;
}
console.log(length);

function add(x) {
  return function (y) {
    return y ? add(x + y) : x;
  };
}
console.log(add(6)(7)(2)());

// let x2 = 0;
// let y2 = 11;
// let isPrime = false;
// const array2 = [];
// for (let i = x2; i < y2; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
//   if (isPrime) {
//     array2.push(i);
//   }
// }
// console.log(array2);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getPersonDeatails = function (age, salary) {
    console.log("::::>");
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: age,
      salary: salary,
    };
  };
}

const personObj = new Person("vinod", "kumar");
let result1 = personObj.getPersonDeatails(25, 50000);
console.log(result1);

function Parent1() {
  this.getAdd = function (a, b) {
    return a + b;
  };
  this.getSub = function (a, b) {
    return a - b;
  };
}

function Child() {
  this.getMul = function (x, y) {
    return x * y;
  };
  this.getDiv = function (x, y) {
    return x / y;
  };
}
Child.prototype = new Parent1();
const childObj1 = new Child();
let result2 = childObj1.getMul(7, 8);
console.log(result2);

const user = {
  obj: {
    value: 1,
    obj: {
      value: 1,
      obj: {
        value: 1,
        obj: {
          value: 1,
        },
      },
    },
  },
};
const add1 = (obj, result = 0) => {
  return Object.values(obj).reduce(
    (acc, val) => (typeof val === "number" ? acc + val : add1(val, acc)),
    result
  );
};
console.log(add1(user));
