'use strict';

// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20);
// const now = new Date(0);   // 1970-01-01T00:00:00.000Z
// const now = new Date(-99999); // 1969-12-31T23:58:20.001Z

// const now = new Date();
// // console.log(now); // 2021-05-20T06:53:58.145Z

// const date = new Date("2020-05-01");
// //  =
// new Date.parse("2020-05-01");

// console.log(date);

// console.log(now.setHours(18));
// console.log(now.setHours(18, 40)); // hours, minutes
// console.log(now.setHours(40)); // hours, minutes

// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // номер дня недели, начиная с воскресенья (0)

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC

// console.log(now.getTime());
// console.log(new Date(now.getTime())); // 2021-05-20T06:53:58.145Z


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

// Цикл отработал за 12 ms
console.log(`Цикл отработал за ${+end - +start} ms`);
console.log(`Цикл отработал за ${end - start} ms`);
console.log(`Цикл отработал за ${end.getTime() - start.getTime()} ms`);
console.log(end.getTime()); // 1621503885544