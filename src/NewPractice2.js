let arr = [
  {
    add: 2,
    sub: 1,
    mul: 2,
  },
  {
    add: 1,
    sub: 5,
    mul: 3,
  },
  {
    add: 3,
    sub: 2,
    mul: 4,
  },
  {
    add: 4,
    sub: 1,
    mul: 3,
  },
  {
    add: 3,
    sub: 1,
    mul: 2,
  },
];
// let result = arr.reduce((acc, val) => acc + (val.add - val.sub) * val.mul, 0);
// console.log(result);
let add = 0;
let sub = 0;
let mul = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  add += arr[i].add;
  sub -= arr[i].sub;
  mul *= arr[i].mul;
}
let result2 = (add - sub) * mul;
console.log(result2);

let a = "mynameisvinod";
let res = {};
a.split("").forEach((i) => {
  if (a.indexOf(i) !== a.lastIndexOf(i)) {
    res[i] = (res[i] || 0) + 1;
  }
});
console.log(res);
let arr1 = [1, 18, 6, 12, 24, 22, 34, 33, 36];
let newArr = arr1.filter((num) => num % 2 !== 0);
console.log(newArr);

let x = 1;
let y = 100;
let isPrime = false;
let arr2 = [];
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
    arr2.push(i);
  }
}
console.log(arr2);

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
const Add = (obj, result = 0) => {
  return Object.values(obj).reduce(
    (acc, val) => (typeof val === "number" ? acc + val : Add(val, acc)),
    result
  );
};
console.log(Add(user));

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

function ObjFlat(obj) {
  return Object.values(obj).reduce(
    (acc, val) =>
      typeof val === "object" ? acc.concat(ObjFlat(val)) : acc.concat(val),
    []
  );
}
console.log(ObjFlat(student));

function* add2(str) {
  // for (let char of str) {
  //   yield char;
  // }
  yield* str.split("");
}
let obj = add2("vinod");
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

function reverseString(input) {
  let response = "";
  for (let i = input.length - 1; i >= 0; i--) {
    response += input[i];
  }
  if (input[response.length - 1] === " ") {
    response += input[response.length];
  }
  return response;
}
console.log(reverseString("my name is vinod"));

let missingArr = [1, 3, 5, 7, 9];
let arr3 = [];
for (let i = 0; i <= 10; i++) {
  if (missingArr.includes(i)) {
    console.log(i);
    arr3.push(i);
  }
}
console.log(arr3);

let array = [1, [3, 56], 2, 3, [87, 96, [89, 123]]];
let newArr1 = array.flat(Infinity).reduce((acc, val) => acc + val);
console.log(newArr1);
