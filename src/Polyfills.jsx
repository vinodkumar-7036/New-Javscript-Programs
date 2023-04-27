let arr = [1, 2, 3, 4];
let newArr = arr.map(function (x) {
  return x * x;
});
console.log(newArr);
function mapPolyfill(array, cb) {
  let newVal = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(cb(array[i]));
  }
  return newArr;
}
function square(x) {
  return x * x;
}
console.log(mapPolyfill(arr, square));

let newArr1 = [1, 2, 3, 4, 5, 6];
let result = newArr1.filter(function (x) {
  return x % 2 === 0;
});
console.log(result);

function filterPolyfill(arr, cb) {
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      val.push(arr[i]);
    }
  }
}
function isEven(x) {
  if (x % 2 === 0) {
    return x;
  }
}
console.log(filterPolyfill(newArr1, isEven));

let obj = {
  name: "vinod",
};

function bindEx(a, b) {
  console.log(this.name, ":", a, ":", b);
}
const newFun = bindEx.bind(obj, 20);
console.log(newFun(10));

Function.prototype.myBind = function (...args) {
  const obj = this;
  const context = args[0];
  const args1 = args.slice(1);
  return function (...args2) {
    obj.apply(context, [...args1, ...args2]);
  };
};
const bindmyFn = bindEx.myBind(obj, 20);
console.log(bindmyFn(10));

var array1 = [1, 2, 3, 4, 5];
// let newArray = array1.reduce((acc, val) => acc + val, 0);
// console.log(
//   "sum",
//   array1.reduce((acc, val) => acc + val, 0)
// );

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};
console.log(("sum", array1.myReduce((acc, val) => acc + val, 0)));
