// // // const arr = [1, 2, 0, -1 - 0, 1, 2, 3, 4, 5];
// // // const newArr = arr.filter((val, index) => arr.indexOf(val) === index).reduce((acc, val) => acc + val, 0)
// // // console.log(newArr)
// // // // Remove duplicate and add numbers

// function flattedArray(array, result = []) {
//     return array.reduce((acc, val) => Array.isArray(val) ? flattedArray(acc, val) : acc.concat(val), result)
// }
// console.log(flattedArray([1, 2, [3, [4, 5, [6, 7, 8]]]]));
// // // // // // Flat an array

// // // var arr3 = [1, 2, 3, 4, 5, 6, 7];
// // // var newArr3 = arr3.reduce((acc, val) => acc + val, 0)
// // // console.log(newArr3)
// // // // // Add numbers by using reduce.

// // // const num = 12345;
// // // const num1 = num.toString().length;
// // // console.log(num1)
// // find length of number

let number = 12345;
let length = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  length++;
}
console.log(length);

// // // const num1 = 12345;//reverse number

function reverseN(number) {
  let reverseNum = 0;
  while (number > 0) {
    reverseNum = reverseNum * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverseNum;
}
console.log(reverseN(12345));

// function reverseNum(number) {
//     var result = 0,
//         counter = 0;
//     for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
//         counter = i % 10;
//         result = result * 10 + counter;
//     }
//     return result;
// }
// console.log(reverseNum(12345))

// // const user = {
// //     obj: {
// //         value: 1,
// //         obj: {
// //             value: 1,
// //             obj: {
// //                 value: 1,
// //                 obj: {
// //                     value: 1
// //                 }
// //             }
// //         }
// //     }

// // }
// // const add = (obj, result = 0) => {
// //     return Object.values(obj).reduce((acc, val) => typeof val === 'number' ? acc + val : add(val, acc), result)
// // }
// // console.log(add(user))

// // }; // Add all value propertiies.

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // var sum = 0;
// // for (let i = 0; i <= arr.length; i++) {
// //   if (arr[i] % 2 === 0) {
// //     sum += arr[i]
// //   }
// // }
// // console.log(sum)

// // let newArr = [1, 2, 3, 4, 5, 6]
// // let newArr1 = newArr.map(val => val * val * val)
// // .filter((val) => val > 100).reduce((acc, val) => acc + val, 0)
// // console.log(newArr1)

// // function total(newArr) {
// //   return newArr.map(val => val * val * val)
// //     .filter((val) => val > 100)
// //     .reduce((acc, val) => acc + val, 0)
// // }
// // console.log(total([1, 2, 3, 4, 5, 6]))

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (let i = 0; i <= arr6.length; i++) {
  if (arr6[i] % 2 === 0) {
    sum += arr6[i];
  }
}
console.log(sum);

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let odds = arr4.filter((num) => num % 2 === 1)
// console.log(odds)

// let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var sub = 0;
// for (let i = 0; i < arr5.length; i++) {
//     if (arr5[i] % 2 !== 0) {
//         console.log(arr5[i])
//         sub += arr5[i]

//     }
// }
// console.log(sub)
// //////obj freeze///////
// // let obj = { age: 43 }
// // Object.freeze(obj)
// // obj.age = 67
// // console.log(obj.age)

// ///// obj seal //////
// // let obj = { age: 45 }
// // Object.seal(obj)
// // obj.age = 25
// // console.log(obj.age)

// // let number = 12345
// // let length = 0
// // while (number > 0) {
// //     number = Math.floor(number / 10)
// //     length++
// // }
// // console.log(length)

// // function revNum(number) {
// //     let revNum = 0;
// //     while (number > 0) {
// //         revNum = revNum * 10 + number % 10;
// //         number = Math.floor(number / 10)
// //     }
// //     return revNum;
// // }
// // // console.log(revNum(12345))

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

// // let arr = [1, 3, 4, 5]
// // function binary(x) {
// //     return x.toString(2)
// // }

// // const output = arr.map(binary)
// // // console.log(output)

// // let arr1 = [1, 3, 4, 5]
// // const ouput2 = arr1.map((x) => x.toString(2))
// // console.log(ouput2)
// // // const output2 = arr1.map(function binary(x) {
// // //     return x.toString(2)
// // // })
// // // console.log(output2)

// // let val = [1, 3, 2, 5, 4, 6]
// // function isOdd(x) {
// //     return x % 2
// // }

// // let newVal = val.filter(isOdd)
// // // console.log(newVal)

// // let val1 = [1, 3, 2, 5, 4, 6]
// // function isEven(x) {
// //     return x % 2 === 0
// // }
// // let newVal1 = val1.filter(isEven)
// // // console.log(newVal1)

// // let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // function isOdde(x) {
// //     return x % 2 !== 0;
// // }
// // let result = arr3.filter(isOdde)
// // console.log(result)

////find max in array////

let arr7 = [3, 5, 7, 8, 9];
function findMax(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr7));

let firstNum = 0;
let secondNum = 0;
let thirdNum = 0;
let newArr = [1, 3, 5, 45, 6, 11, 77];
newArr.forEach((value) => {
  if (value > firstNum) {
    thirdNum = secondNum;
    secondNum = firstNum;
    firstNum = value;
  } else if (value > secondNum) {
    thirdNum = secondNum;
    secondNum = value;
  } else if (value > thirdNum) {
    thirdNum = value;
  }
});
console.log(firstNum, secondNum, thirdNum);

// // let arr6 = [1, 2, 2, 3, 4, 3]
// // let newVal2 = arr6.filter((val) => !arr6.filter((val, index) => arr6.indexOf(val) !== index).includes(val))
// // console.log(newVal2)

// // let result1 = " ";
// // for (let i = 1; i < 11; i++) {
// //     result1 += (i % 3 === 0) ? String(i) + '\n' : String(i);
// // }
// // console.log(result1)

// ///////find prime numbers ///////

// // function sumPrime(num) {
// //     let numArray = []
// //     for (let i = 1; i <= num; i++) {
// //         numArray.push(i)

// //     }
// //     numArray.map((number) => {
// //         for (let i = 2; i < number; i++) {
// //             if (number % 1 === 0) {
// //                 let index = numArray.indexOf(number)
// //                 return numArray.splice(index, 1)
// //             }
// //         }
// //     })
// //     return numArray;
// // }
// // console.log(sumPrime(10))

// // let year = 2017;
// // if (year > 2015) {
// //     console.log("true")
// // } else if (year < 2015) {
// //     console.log("false")
// // } else {
// //     console.log("exactly")
// // }

// // let firstNum = 0;
// // let secondNum = 0;
// // let thirdNum = 0;
// // let arr = [1, 3, 5, 7, 11, 55, 76, 99]
// // arr.forEach((value) => {
// //     if (value > firstNum) {
// //         thirdNum = secondNum;
// //         secondNum = firstNum;
// //         firstNum = value;
// //     } else if (value > secondNum) {
// //         thirdNum = secondNum;
// //         secondNum = value;

// //     } else if (value > thirdNum) {
// //         thirdNum = value;
// //     }else{}
// // })
// // console.log(firstNum, secondNum, thirdNum)

// // function primeNum(number) {
// //     // if (number < 1) {
// //     //     return false;
// //     // }
// //     let sum=0
// //     for (let i = 0; i <= 100; i++) {
// //         for (let j=2;j<=i;j++){
// //             if (i % j !== 0) {
// //                     console.log(i)
// //                     }
// //         }
// // }

// // // let arr3=[1,3,5,7,9,11,12,19,22]

// // let number=12345;
// // let length=0;
// // while(number>0){
// //     number=Math.floor(number/10)
// //     length++
// // }
// // console.log(length)

// // function reverseNum(number){
// //     let revNum=0;
// //     while(number>0){
// //         revNum= (revNum*10+number%10);
// //         number=Math.floor(number/10)
// //     }
// //     return revNum;

// // }
// // console.log(reverseNum(12345))

// // let triAngle=function(l,b){
// //     return (1/2*l*b)
// // }
// // console.log(triAngle(10,100))

// // function add(x,y){

// //     if ((x+y)>100) {
// //         return "true";

// //     }else{
// //         return "false";
// //     }
// //     // return x+y;

// // }
// // console.log(add(22,35))
// // }

// // const newArray = [1, 3, 2, 5, 10];
// // const myPrimeArray = newArray.filter(num => {
// //   for (let i = 2; i < num; i++) {
// //     if (num % i === 0) return false;
// //   }
// //   return num !== 1;
// // });
// // console.log(myPrimeArray);

// // let missingArr=[1,2,3,5,7,9]
// // let newArr3=[]
// // for(let i=0;i<=10;i++){
// //     if(!missingArr.includes(i)){
// //         console.log(i)
// //         newArr3.push(i)
// //     }
// // }
// // console.log(newArr3)

// // function primeBetween(a,b){
// //     let result=[];
// //     for(let i=a; i<=b;i++){
// //         let isPrime=true;
// //         for(let j=2;j<i;j++){
// //             if(i%j===0){
// //             let isPrime=false;
// //             break;
// //             }
// //         }
// //         if(isPrime){
// //             result.push(i)
// //         }
// //     }
// //     return result
// // }
// // console.log(primeBetween(3,20))

let company = {
  1: { name: "vinod", salary: 20000, mobile: 7036186014 },
  2: { name: "sai", salary: 30000, mobile: 7038186314 },
  3: { name: "sateesh", salary: 40000, mobile: 7095686970 },
};
function getEmpDetails(user) {
  if (!company[user?.id] === undefined) {
    let company1 = Object.assign(company[user?.id], user);
    company[user?.id] = company1;
    delete company1.id;
  } else {
    company[user?.id] = user;
    delete user.id;
  }
}

getEmpDetails({ id: 4, name: "sai N", salary: 400000, mobile: 6362334587 });
console.log(company);

// // for(var i=1;i<=5;i++){
// //     setTimeout(()=>{
// //         console.log("i value is....",i);
// //     },1000)
// // }

// // for(let i=1;i<=5;i++){
// //     setTimeout(()=>{
// //         console.log("i value is....",i);
// //     },1000)
// // }
// // for(var i=1;i<=5;i++){
// //     setTimeout(()=>{
// //         console.log("i value is i",i)
// //     })
// // }

// let arr = [1, 2, 2, 3, 3, 4];
// let newArr3 = arr.filter(
//   (val) => !arr.filter((val, index) => arr.indexOf(val) !== index).includes(val)
// );
// console.log(newArr3);

// // let str="i love my india violet carden"
// // let arr=str.split(" ");
// // let res=[];
// // arr.forEach((val)=>{
// //     if(val.length>4){
// //         res.push(val)
// //     }
// // })
// // console.log(res)

const str1 = " i loved india cardian cheffurin";
let arr3 = str1.split(" ");
let res1 = [];
arr3.forEach((val) => {
  if (val.length > 4) {
    res1.push(val);
  }
});
console.log(res1);

// let arr4 = [1, 3, 5, 55, 7, 11, 76, 10, 99];
// // arr4.sort((x,y)=>y-x)
// // console.log(arr4[1])
// function nthHighest(arr, n) {
//   arr.sort((x, y) => y - x);
//   if (arr.length > n) {
//     return arr[n - 1];
//   } else {
//     return arr[arr.length - 1];
//   }
// }

// console.log(nthHighest(arr4, 5));

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

// let arr6=[1,55,6,45,7,78,33,123,106]

// function nthHighest(arr,n){
//     arr.sort((x,y)=>y-x)
//     if(arr.length>n){
//         return arr[n-1]

//     }else {
//         return arr[arr.length-1]
//     }
// }
// console.log(nthHighest(arr6,11))

// // let str="i loved india cuttern cheffarians"
// // let arr2=str.split("")
// // let res=[]
// // arr2.forEach((val)=>{
// //     if(val.length>4){
// //         res.push(val)
// //     }
// // })
// // console.log(res)

// let user={fName:"sateesh",lName:"kumar",age:30,vehicles:{car:{name:"?mmmm"},bike:6}}
// for(let key in user){
//     console.log([user[key]])
// }

// const json = '{"result":true, "count":42}';
// const obj = JSON.stringify(json);
// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);

// console.log(JSON.stringify({ age: 5, name: "vinod" }));

function* add(str) {
  // for(let char of str){
  //     yield char
  yield* str.split("");
  // }
}
let obj = add("vinod");
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

// let missingArr = [1, 3, 5, 7, 9];
// let newArr = [];
// for (let i = 0; i <= 10; i++) {
//   if (!missingArr.includes(i)) {
//     console.log(i);
//     newArr.push(i);
//   }
// }
// console.log(newArr);

function reverseN1(number) {
  let reveseNum = 0;
  while (number > 0) {
    reveseNum = reveseNum * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reveseNum;
}
console.log(reverseN1(12345));

// let number = 12345;
// let length = 0;
// while (number > 0) {
//   number = Math.floor(number / 10);
//   length++;
// }
// console.log(length);

// function reveseNum(number) {
//   let reverseN = 0;
//   while (number > 0) {
//     reverseN = reverseN * 10 + (number % 10);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((num) => num % 2 !== 1);
// // console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     console.log(i);
//     sum += arr[i];
//   }
// }
// console.log(sum);

//  Promise.allSetteled([
//   Promise.resolve(1),
//   Promise.reject("error"),
//   Promise.resolve(3),
// ]).then((result) => console.log(result));

// Promise.allSetteld([
//   Promise.resolve(1),
//   Promise.reject("error"),
//   Promise.resolve(4),
// ]).then((result) => console.log(result));

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     console.log(i);
//   }
// }

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "error")
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status))
// );

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "success");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
