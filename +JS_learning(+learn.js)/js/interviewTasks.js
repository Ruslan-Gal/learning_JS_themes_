// function sumAll(...args) { // args — имя массива
//   let sum = 0;

//   for (let arg of args) sum += arg

//   return sum;
// }

// console.log(sumAll(1, 2, 3)); // 

let x = 5;
console.log(x++); // 5
console.log(x); // 6

// const res = [] + false - null + true; // =  NaN
const res = [] + false; // [] заменяется на '' (пустую строку)
console.log(res); // 'false'
console.log(typeof res); // string

console.log([] + 1); // 1
console.log(([] + 1).length); // 1

let y = 1;
let x = y = 2;
console.log(x); // 2


console.log(false || 0);

console.log([] + 1 + 2); // "12"
console.log(typeof ([] + 1 + 2)); // string

console.log("1"[0]); // 1

// false
console.log(null && undefined); // null   (вернет первый ложный аргумент)
console.log(null || undefined); // undefined  

// true
console.log(5 && 6); // 6
console.log(5 || 6); // 5

console.log(2 && 1 && null && 0 && undefined); // null

console.log(!!(1 && 2)); // true
console.log((1 && 2)); // 2
console.log(!!(1 && 2) === (1 && 2)); // false

console.log((null || 2 && 3 || 4)); // 3

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); // false

console.log(+"Infinity"); // Infinity
console.log(typeof +"Infinity"); // number

console.log("Ёжик" > "яблоко"); // false
//т.к. буквы верхнего регистра имеют меньший номер в таблице Юникода

console.log(0 || "" || 2 || undefined || true || falsе); // 2
