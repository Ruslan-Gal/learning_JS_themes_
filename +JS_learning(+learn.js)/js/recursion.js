"use strict";

// const pow = (x, n) => {
//     if (n === 1) return x;
//     return x * pow(x, n-1)
// };
// console.log(pow(2, 3));
// const pow = (x, n) => {
//     return (n === 1) ? x : (x * pow(x, n - 1));
// };

// console.log(pow(2, 3));

// let company = {
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         // случай (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else {
//         // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company));

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// // добавление нового элемента в список
// list = { value: "new item", next: list };

// console.log(list);

// рекурсия
// const sumTo = (n) => {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// };

// // через цикл
// const sumTo = (n) => {
//     if (n === 1) {
//         return n;
//     } else {
//         let sum = 0;
//         for (n; n > 0; n--) {
//             sum += n
//         }
//         return sum;
//     }
// };

// // через прогрессию
// const sumTo = (n) => {
//     if (n === 1) {
//         return n;
//     } else {
//         let sum = 0;
//         sum = (2 * 1 + 1*(n - 1))*n/2
//         return sum;
//     }
// };

// console.log(sumTo(100));

// const factorial = (n) => {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// };

// console.log(factorial(5));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

// Вывод односвязного списка
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next)
    }
}

printList(list);


// Вывод односвязного списка в обратном порядке
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

printReverseList(list);
