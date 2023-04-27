// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"), 1000);
// });
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .finally((result) => {
//     console.log("executed");
//   });
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("error"), 2000);
// });
// promise1.catch((result) => {
//   console.log(result);
// });

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(5), 2000)),
// ]).then((result) => console.log(result));

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject("error"), 2000);
//   }),
// ]).catch((result) => {
//   console.log(result);
// });

// Promise.allSetteld([
//   Promise.resolve(1),
//   Promise.reject("error"),
//   Promise.resolve(4),
// ]).then((result) => console.log(result));

// Promise.race([Promise.resolve(3), Promise.reject("error")]).catch((result) =>
//   console.log(result)
// );

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("reject"), 1000);
// });

// promise
//   .then(
//     (result) => console.log(result),
//     (result) => console.log(result)
//   )
//   .finally(() => console.log("finally"));

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).then((result) => console.log(result));

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("error"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).catch((result) => console.log(result));

// Promise.allSettled([
//   Promise.resolve(1),
//   Promise.reject("error"),
//   Promise.resolve(3),
// ]).then((result) => console.log(result));

// Promise.race([Promise.resolve(1), Promise.reject("error")]).then((result) =>
//   console.log(result)
// );

// Promise.race([Promise.reject("error"), Promise.resolve(1)]).catch((result) =>
//   console.log(result)
// );

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"));
// });
// promise.then((result) => console.log(result));

// Promise.race([
//   new Promise((resolve) => setTimeout(resolve, 2000)),
//   new Promise((resolve) => setTimeout(resolve("done"), 1000)),
//   new Promise((resolve) => setTimeout(resolve, 3000)),
// ]).then((result) => console.log(result));

// // Promise.race([Promise.resolve(1), Promise.reject("error")])
// //     .then(result => console.log(result))
// // Promise.race([Promise.reject("error"), Promise.resolve(1)])
// //     .catch(result => console.log(result))

// Promise.race([
//   new Promise((resolve) => setTimeout(resolve, 2000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("error"), 1000)),
//   new Promise((resolve) => setTimeout(resolve, 2000)),
// ]).catch((result) => console.log(result));

// Promise.allSettled([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("error"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
// ])
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));

// Promise.any([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("error"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 3000)),
// ]).then((result) => console.log(result));

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ),
//   new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).then((result) => console.log(result));

// function* add(str) {
//     // for (let char of str) {
//     //     yield char;
//     // }
//     yield* str.split("")

// }
// let obj = add("vinod");
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

// let obj1 = generator();
// console.log(obj1.next());

/////******currying********///////

// function mul(x) {
//     return function (y) {
//         return y ? x * y : x
//     }
// }
// console.log(mul(3)(5))

// const mul = (x) => (y) => y ? x * y : x
// console.log(mul(7)(8)(9)())

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getPersonDetails = function (age, salary) {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: age,
      salary: salary,
    };
  };
}

const personObj1 = new Person("vinod", "kumar");
const result = personObj1.getPersonDetails(25, 50000);
console.log(result);

// function Parent1() {
//     this.getAdd = function (a, b) {
//         return a + b;
//     }
//     this.getSub = function (a, b) {
//         return a - b;
//     }

// }

// function Child() {
//     this.getMul = function (x, y) {
//         return x * y;
//     }
//     this.getDiv = function (x, y) {
//         return x / y;
//     }
// }
// Child.prototype = new Parent1()
// const childObj1 = new Child()
// let result1 = childObj1.getAdd(7, 8)
// console.log(result1)

// var y = 10;
// function closure() {
//     let count = 0;
//     return function (x) {
//         return y + x + count++
//     }
// }

// const newFun = closure()
// console.log(newFun(3))
// console.log(newFun(5))
// console.log(newFun(8))

// // let arr = [1, 2, 3]
// // for (let x of arr) {
// //     console.log(x);77

// let arr = [1, 2, 2, 3, 3, 4]
// let newArr = arr.filter((val) => !arr.filter((val, index) => arr.indexOf(val) !== index).includes(val))
// console.log(newArr)

function mul(x) {
  return function (y) {
    return y ? mul(x + y) : x;
  };
}
console.log(mul(3)(5)(8)());

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr1=arr4.filter((num)=>num%2!==0)
// console.log(newArr1)

// function closure1(){
//     let count=0;
//     return function(x){
//     return x+count
//     }
// }

// let newFun1=closure1()
// console.log(newFun1(1))
// console.log(newFun1(2))
// console.log(newFun1(3))

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(5, 6));

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

// const a = [
//   { label: "All", value: "All" },
//   { label: "All", value: "All" },
//   { label: "Alex", value: "Alex" },
//   { label: "Allu", value: "Allu" },
//   { label: "Allu", value: "Allu" },
//   { label: "Alex", value: "Alex" },
// ];
// let b = a.filter(
//   (val, index) =>
//     a.findIndex(
//       (data) => data.label === val.label && data.value === val.value
//     ) === index
// );
// console.log(b);

// let array = ["vinod", "kumar", 30, "software"];
// // let[firstName,lastName]=array
// let [firstName, ...rest] = array;
// console.log(rest);

// let options = {
//   title: "menu",
//   height: 200,
//   width: 100,
// };

// const { title, ...rest } = options;
// console.log(rest);

// function flattedArray(arr, result = []) {
//   return arr.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? flattedArray(val, acc) : acc.concat(val),
//     result
//   );
// }

// console.log(flattedArray([1, 2, [3, 4], [5, [6, 7, [8, [9]]]]]));

// let name = "vinod";
// let res = name[0].toLowerCase() + name.substring(1).toUpperCase();
// console.log("============>before", name);

// function add(x) {
//   return function (y) {
//     return y ? add(x + y) : x;
//   };
// }
// console.log(add(3)(5)());
let obj = { a: "ss", "s age": 20 };
console.log(obj["s age"]);
