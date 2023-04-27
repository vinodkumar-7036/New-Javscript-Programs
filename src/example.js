// function Same(a, b) {
//   let array1 = a.split("");
//   let array2 = b.split("");
//   return array2.every((item) => {
//     if (array1.includes(item)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
// console.log(Same("santosh", "ant"));

// let val = "mon";
// let newVal =
//   val.split("").reverse().join("") === val
//     ? "it is a palindrom"
//     : "it is not a palindrom";
// console.log(newVal);

// let array = [1, 2, 3, [87, 96, [89, 123]]];
// let result = array.flat(Infinity).reduce((acc, val) => acc + val);
// console.log(result);

// function isSame(a, b) {
//   if (a.length === b.length) {
//     let arr = a.split("");
//     let arr1 = b.split("");
//     return arr.every((item) => {
//       if (arr1.includes(item)) {
//         return true;
//       }
//     });
//   } else {
//     return false;
//   }
// }
// console.log(isSame("LISTEN", "WISDEN"));
// //////First letter Uppercase///////

// let days = ["sun", "mom", "tue"];
// for (let key of days) {
//   key = key.charAt(0).toUpperCase() + key.substring(1);
//   console.log(key);
// }
// ///////**** Anagram *****//////
// function anagram(str1, str2) {
//   return str1.toUpperCase().split("").sort().join("") ===
//     str2.toUpperCase().split("").sort().join("")
//     ? "is an anagram"
//     : "not an anagram";
// }
// console.log(anagram("vinod", "doing"));

// ///////****** Reverse string ******//////
// function flattedArray(arr, result = []) {
//   return arr.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? flattedArray(val, acc) : acc.concat(val),
//     result
//   );
// }

// console.log(flattedArray([1, 2, [3, 4], [5, [6, 7, [8, [9]]]]]));

/////**** Object Destructuring *******////
// let array = ["vinod", "kumar", 30, "software"];
// let [firstName, ...lastName] = array;
// console.log(lastName);

// let options = {
//   title: "menu",
//   height: 200,
//   width: 100,
// };

// const { title, ...rest } = options;
// console.log(rest);

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for (let i = 1; i <= 5; i++) {
//   let temp = a + b;
//   a = b;
//   b = temp;
//   console.log(temp);
// }

// function same(a, b) {
//   let array1 = a.split("");
//   let array2 = b.split("");
//   return array2.every((item) => {
//     if (array1.includes(item)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
// console.log(same("santhosh", "anth"));

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

let days1 = ["sun", "mon", "tue"];
for (let key of days1) {
  key = key.charAt(0) + key.charAt(1).toUpperCase() + key.substring(2);
  console.log(key);
}

// console.log("::::::>");

// for (let i = 5; i >= 0; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars = stars + "*";
//   }
//   console.log(stars);
// }

// let text = "123vv45678f9 ";
// let pattern = /[0-9]/g;
// let result = text.match(pattern);
// console.log(result);

let array3 = [1, 2, 3, [87, 96, [89, 123]]];
let result1 = array3.flat(Infinity).reduce((acc, val) => acc + val);
console.log(result1);

//divide(1000)(10)(100, 10)(10)(); // 0.01

//divide(1000, 10, 10)(10, 10, 10)(); // 0.01

// function customDivide(...arr){
//   let result=arr[0];

// }

/////******Divident by any number*****//////
function divide(a, ...restA) {
  let res = a;

  // if (restA.length < 1) return res;
  if (restA.indexOf(0) > -1) return "0 should not";
  res = restA.reduce((acc, val) => acc / val, res);

  return function (...restB) {
    if (restB.length < 1) return res;
    return divide(res, ...restB);
  };
}

console.log(divide(1000)(10)(100, 10)(10)());

// let val = "vvvvvvAAAAAsssss";
// let result = val.split("").filter((val) => val === "A");
// console.log(result);

let days = ["sun", "mon", "tue"];
for (let key of days) {
  key = key.charAt(0) + key.charAt(1).toUpperCase() + key.substring(2);
  console.log(key);
}

function Same(a, b) {
  let array1 = a.split("");
  let array2 = b.split("");
  return array2.every((item) => {
    if (array1.includes(item)) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(Same("vinod", "vkr"));
