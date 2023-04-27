let arr = ["vinod", "sai", "vinod", "sai"];
let count = {};
arr.forEach((i) => (count[i] = (count[i] || 0) + 1));
console.log(count);

// // console.log("sai"[0])
// function flattedArray(array, result = []) {
//   return array.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? flattedArray(val, acc) : acc.concat(val),
//     []
//   );
// }

// console.log(flattedArray([1, 2, [3, 4], [5, [6, 7, [8, [9]]]]]));

// let person = {
//     name: "vinod",
//     age: 25,
//     ph: '123456'
// }
// let job = {
//     jobTitle: "fronrend",
//     country: "USA"
// }
// // let employe = Object.assign(person, job)
// // console.log(employe)
// let employee = { ...person, ...job }
// console.log(employee)

// let string = "i love my india"
// function countVowels() {
//     let count = {}
//     let array = string.split("")
//     array.filter((item) => item === "a" || item === "e" || item === "i" || item === "o" || item === "u").forEach((i) => count[i] = (count[i] || 0) + 1)
//     return count
// }
// console.log(countVowels(string))

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("error!"), 1000)
// })
// promise.catch((result) => {
//     console.log(result)
// })
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 2000)
// })
// promise1.then((result) => {
//     console.log(result)
// })

// let options = {
//     name: "vinod",
//     age: 30,
//     height: 300,
//     width: 200
// }
// const { name, ...rest } = options
// console.log(name)
// console.log(rest)

// function isSame(a, b) {
//     if (a.length === b.length) {
//         let array1 = a.split("");
//         let array2 = b.split("")
//         return array1.every((item) => {
//             if (array2.includes(item)) {
//                 return true;
//             }
//         });
//     } else {
//         return false
//     }
// }
// console.log(isSame("LISTEN", "SILENT"))

let employes = [
  { name: "sai", salary: 10000 },
  { name: "vinod", salary: 20000 },
  { name: "vinod", salary: 30000 },
];

console.log(employes.reduce((acc, value) => acc + value.salary, 0));

// let x = [1, 2, 3, 4]
// let y = [5, 6, 7, 8]
// let z = [...x, ...y]
// console.log(z)

// function add(first, ...args) {
//     console.log(args)
// }
// add(1, 2, 3, 4, 5)

//

// let a = [1, 2, 3, 4]
// let b = a.reduce((acc, val) => acc + val, 0)
// console.log(b)

let arr = [
  "exhaust",
  "killener",
  "altranes",
  "countered",
  "innerties",
  "vinod",
];
let newArr = arr.filter((word) => word.length > 6);
console.log(newArr);
const array1 = [5, 12, 8, 130, 44];
let newArr = array1.find((element) => element < 10);
console.log(newArr);

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));

// const numbers = [9, 16, 25]
// const number1 = numbers.map((num) => Math.sqrt(num))
// console.log(number1)

// const Arr = [1, 2, 3, 4]
// let newArr = Arr.forEach((num, index) => {
//     console.log(num, index)
// })
// console.log(newArr)

// let arr8 = new Array(10);
// console.log(arr8.fill("banana"));

// function flattedArray(array, result = []) {
//     return array.reduce((acc, val) => Array.isArray(val) ? flattedArray(val, acc) : acc.concat(val), result)
// }
// console.log(flattedArray([1, 2, [3, 4], [5, [6, 7, [8, [9]]]]]))

let arr = [1, 2, 2, 3, 3, 4];
console.log(arr.filter((val, index) => arr.indexOf(val) === index));
let newArr = arr.filter(
  (val) => !arr.filter((val, index) => arr.indexOf(val) !== index).includes(val)
);
console.log(newArr);

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
// })
// promise.then((result) => {
//     console.log(result)
// })

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error"), 2000)
// })
// promise1.catch((result) => {
//     console.log(result)
// })

// Promise.all([new Promise(resolve => setTimeout(() => resolve(2), 1000)),
// new Promise(resolve => setTimeout(() => resolve(3), 2000))]).then(result => (console.log(result)))

// Promise.all([new Promise((resolve, reject) => {
//     setTimeout(() => reject("error"), 2000)
// })]).catch(result => { console.log(result) })

// Promise.allSettled([Promise.resolve(3), Promise.reject("error"), Promise.resolve(2)])
//     .then(result => console.log(result))

// Promise.race([Promise.reject("error"), Promise.resolve("3")])
//     .catch((result) => console.log(result))

// Promise.any([Promise.reject(new Error("")),
// Promise.reject(new Error("error"))])
//     .catch(error => console.log(error))

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function Parent(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log(this.name);
  };
  this.getAge = function () {
    console.log(this.age);
  };
}
function Child(salary) {
  this.salary = salary;
  this.getSalary = function () {
    console.log(this.salary);
  };
}
Child.prototype = new Parent("vinod", 32);
const display = new Child(30000);
display.getName();
display.getAge();

let salaries = { vinod: 200, sai: 100, kiran: 200, kall: "one" };
let sum = 0;
for (let keys in salaries) {
  // if (typeof salaries === 'number') {
  sum += salaries[keys];
  // }
}
console.log(sum);

// let arr = ["kishore", "raj", "kiran", "ultra"]
// let newArr = arr.splice(1, 1, 'vinod')
// console.log(arr)

let arr = [1, -1, 0, null, undefined, 2, 3, 1, -1];
let newArr = arr
  .filter((value) => value)
  .filter((val, index) => arr.indexOf(val) !== index)
  .reduce((acc, val) => acc + val);
console.log(newArr);

function Parent() {
  this.getAdd = function (a, b) {
    return a + b;
  };
  this.getSub = function (a, b) {
    return a - b;
  };
}
function Child() {
  this.getMul = function (a, b) {
    return a * b;
  };
  this.getDiv = function (a, b) {
    return a / b;
  };
}

Child.prototype = new Parent();
const childObj = new Child();
const result1 = childObj.getAdd(5, 6);
console.log(result1);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.getPersonDetails = function (age, salary) {
//     return {
//       firstName: this.firstName,
//       lastName: this.lastName,
//       age: age,
//       salary: salary,
//     };
//   };
// }
// const personObj = new Person("vinod", "kumar");
// const result = personObj.getPersonDetails(25, 30000);
// console.log(result);

// function add(x) {
//     return function (y) {
//         return y ? add(x + y) : x
//     }
// }
// console.log(add(1)(2)(3)(4)())

// let mul = (x) => (y) => y ? mul(x * y) : x
// console.log(mul(2)(3)(5)())

// function* Add(str) {
//     // for (let char of str) {
//     //     yield char;
//     // }
//     yield* str.split("")

// }
// let obj = Add("vinod")
// console.log(obj.next().value)
// console.log(obj.next().value)
// console.log(obj.next().value)
// console.log(obj.next().value)
// console.log(obj.next().value)

// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;

// }
// let obj1 = generator()
// console.log(obj1.next())

///*******closure*******/
// var closurFun = 10;
// function closure1() {
//     let counter = 0;
//     return function (x) {
//         return closurFun + x + counter++
//     }

// }

// const newFun = closure1()
// console.log(newFun())
// console.log(newFun(1))
// console.log(newFun())

// function* generator() {
//     yield 1;
//     yield 2;
//     return

// }
// let obj = generator()
// for (let value of obj) {
//     console.log(value)
// }

// let arr3 = [1, -1, 3, null, undefined, 0, -1, 3, 2]
// let newArr3 = arr3.filter(value => value)
// console.log(newArr3.filter((val, index) => newArr3.indexOf(val) === index).reduce((acc, val) => acc + val))
// // console.log(newArr3)

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(result => console.log(result))

// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(result => console.log(result));

// function func1(...args) {
//     console.log(args.map((val) => val * 2));
//     // console.log(arguments[1]);
//     // console.log(arguments[2]);
// }
// func1(1, 2, 3);

// async function add1() {
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)).then((result) => console.log(result))
//     await new Promise((resolve, reject) => {
//         setTimeout(() => resolve(3), 500)
//     }).then((result) => console.log(result))
//     new Promise((resolve, reject) => setTimeout(() => resolve(2))).then((result) => console.log(result))
//     await new Promise((resolve, reject) => {
//         setTimeout(() => resolve(4), 500)
//     }).then((result) => console.log(result))

// }
// add1()

// function add() {
//   console.log(this);
// }
// add();

// const add1 = () => {
//   console.log(this);
// };
// add1();

// let arr = [1, 3, 4, 5];
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

// let arr1 = [1, 3, 4, 5];
// const ouput2 = arr1.map((x) => x.toString(2));
// console.log(ouput2);
// // const output2 = arr1.map(function binary(x) {
// //     return x.toString(2)
// // })
// // console.log(output2)

// let val = [1, 3, 2, 5, 4, 6];
// function isOdd(x) {
//   return x % 2;
// }

// let newVal = val.filter(isOdd);
// console.log(newVal);

// let val1 = [1, 3, 2, 5, 4, 6];
// function isEven(x) {
//   return x % 2 === 0;
// }
// let newVal1 = val1.filter(isEven);
// console.log(newVal1);

// /////******object recursion *******/////
// let user = {
//   fname: "vinod",
//   lname: "kumar",
//   age: 22,
//   study: {
//     btech: 60,
//     inter: {
//       math: 80,
//       eng: 90,
//     },
//   },
// };

// let keys = [];
// function findKeys(user) {
//   let array = Object.entries(user);
//   array.forEach((val) => {
//     keys.push(val[0]);
//     if (typeof val[1] === "object") {
//       findKeys(val[1]);
//     }
//   });
// }

// console.log(findKeys(user));
// console.log(keys);

// let arr5 = [1, 2, 4, 5, 6, 7, 8];
// function isOdd1(i) {
//   return i % 2 !== 0;
// }
// let newArr = arr5.filter(isOdd1);
// console.log(newArr);

// let userData = {
//   obj1: {
//     key: 0,
//     value: [1, 2, 3],
//   },
//   obj2: {
//     key: -1,
//     value: [1, 2, 3],
//   },
//   obj3: {
//     key: 1,
//     value: [3, 4],
//   },
// };

// let positiveValue = [];
// let negativeValue = [];

// function getSum(userData) {
//   Object.values(userData).forEach((data) => {
//     if (data.key >= 0) {
//       positiveValue = positiveValue.concat(data.value);
//     } else {
//       negativeValue = negativeValue.concat(data.value);
//     }
//   });
//   return (
//     positiveValue
//       .filter((val, index) => positiveValue.indexOf(val) === index)
//       .reduce((acc, val) => acc + val) -
//     negativeValue
//       .filter((val, index) => positiveValue.indexOf(val) === index)
//       .reduce((acc, val) => acc + val)
//   );
// }
// console.log(getSum(userData));

// let positiveData = 0;
// let negativeData = 0;

// function getSum(userData) {
//   Object.values(userData).forEach((data) => {
//     if (data.key > 0) {
//       positiveData = data.value.reduce((acc, val) => acc + val);
//     } else {
//       negativeData = data.value.reduce((acc, val) => acc + val);
//     }
//   });
//   return positiveData - negativeData;
// }
// console.log(getSum(userData));
