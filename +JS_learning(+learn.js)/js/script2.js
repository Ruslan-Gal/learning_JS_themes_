// let name = "John";

// function sayHi() {
//     console.log("Hi, " + name);
// }

// sayHi(); // Hi, John

// name = "Pete";

// sayHi(); // Hi, Pete

// function makeWorker() {
//     let name = "Pete";

//     return function () {
//         console.log(name);
//     };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

// function User(name) {
//     this.sayHi = function () {
//         console.log(name);
//     };
// }

// const user = new User("Misha");
// console.log(user);
// user.sayHi(); // Misha

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }

// let counter = makeCounter();

// //

// function count() {
//     return function Second() {
//         return 5;
//     };
// }
// let x = count();
// console.log(x); // [Function: Second]
// console.log(x());

// //
// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1()); // 0
// console.log(counter1()); // 1

// console.log(counter2()); // 0 (независимо)

// function create(name) {
//     return function () {
//         console.log(name);
//     };
// }

// let func = create("firstFunct");
// func(); // firstFunct

// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// console.log(counter.up()); // ?
// console.log(counter.up()); // ?
// console.log(counter.down()); // ?

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// console.log(sum(1)(2)); // 3
// //

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(array) {
//     return function (x) {
//         return array.includes(x);
//     };
// }

// // const res = arr.filter((value) => value >= 3 && value <= 6);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// const res = arr.filter(filt);
// console.log(res);

// function filt(value) {
//     return value >= 3 && value <= 6;
// }
// //
// const x = users.sort(func);
// function func(a, b) {
//     return a.name > b.name ? 1 : -1;
// }

// console.log(x);
// //

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(prop) {
//     return (a, b) => (a[prop] > b[prop] ? 1 : -1);
// }
// // function byField(prop) {
// //     return function (a, b) {
// //         return a[prop] > b[prop] ? 1 : -1;
// //     }
// // }

// const res = users.sort(byField("name"));
// console.log(res);
// // 1 способ
function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            // функция shooter
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}
// // 2 способ

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            // функция shooter
            console.log(j); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}
// // 3 способ
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        shooters.push(
            (function (i) {
                return () => console.log(i);
            })(i)
        );
        i++;
    }

    return shooters;
}
// // 4 способ
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        shooter = function (i) {
            return () => console.log(i);
        };
        shooters.push(shooter(i))
        i++;
    }

    return shooters;
}

let army = makeArmy();
console.log("\n ", army, "\n");

army[0](); // 0
army[5](); // 5
army[8](); // 8

let r = [5];
r.prop = 'rt'
console.log(r);
console.log(r[0]);
console.log(r.prop);
