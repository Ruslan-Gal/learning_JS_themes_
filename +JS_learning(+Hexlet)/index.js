"use strict";
const _ = require("lodash");

// let schedule = {};

/* const isEmpty = (obj) => {
    for (let key in obj) {
        if (key in obj) {
            return false
        }
    }
    return true
} */

// если тело цикла начнет выполняться -
// значит в объекте есть свойства
/* const isEmpty = (obj) => {
    for (let key in obj) {
        return false
    }
    return true
}


console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false */

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let summ = (obj) => {
    let summ = 0;
    for (let key in obj) {
        summ += obj[key]
    }
    return summ
}
console.log(summ(salaries)) */

/* const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

console.log(menu)
multiplyNumeric(menu);
console.log(menu) */

/* let user = {
    name: "Ivan",
    age: 30
};

let clone = {};

for (let key in user) {
    clone[key] = user[key]
};
clone.name = 'Lex';
console.log(user); */

/* let user = { name: "Ivan" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2)
let copy = Object.assign({}, permissions1, permissions2)

console.log(user);
console.log(copy); */

/* let user = { name: "Иван" };

Object.assign(user, { name: "Пётр" });

console.log(user); // теперь user = { name: "Пётр" }
 */

/* let user = {
    name: "Иван",
    sizes: {
      height: 182,
      width: 50
    }
  };

let clone = Object.assign({}, user);

let cloneDeep = _.cloneDeep(user);

console.log( user.sizes === clone.sizes ); // true
console.log(user.sizes === cloneDeep.sizes); // false
 */

// в user находится ссылка на объект
/* let user = {
    name: "John"
  };

let admin = user;
console.log(admin);
user = null;
console.log(user);
 */

/* function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    };
}

let family = marry(
    {
        name: "John",
    },
    {
        name: "Ann",
    }
);
// delete family.father;
// delete family.mother.husband;
console.log(family); */

/* let user = {
    // ...
};

// сначала объявляем
function sayHi() {
    console.log("Привет!");
}

// затем добавляем в качестве метода
user.sayHi = sayHi;

user.sayHi(); // Привет! */

/* const user = {
    name: "John",
    sayHi: () => {
        console.log("Hello");
    },
};
// user.sayHi = () => {
//     console.log("Hello");
// };
user.sayHi();
console.log(user); */

/* const user = {
    name: "John",
    sayHi() {
        console.log("Hello");
    },
};
user.sayHi(); */

/*
let user = {
    name: "Джон",
    age: 30,

    sayHi() {
        console.log(user.name); // приведёт к ошибке
    },
};

let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
 */

/* let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
user["f"](); */

/* function sayHi() {
    console.log(this);
}

sayHi(); // undefined */

/* let user = {
    name: "Джон",
    hi() {
        console.log(this.name);
    },
};

// разделим получение метода объекта и его вызов в разных строках
let hi = user.hi;
hi(); // Ошибка, потому что значением this является undefined
 */

/* let user = {
    name: "Джон",
    go: function () {
        console.log(this.name);
    },
};
user.go();
 */

/* let obj, method;

obj = {
    go: function () {
        console.log(this);
    },
};

obj.go(); // (1) [object Object]

// obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined
console.log(method);

// (obj.go || obj.stop)(); // (4) undefined
 */

/* function makeUser() {
    return {
        name: "Джон",
        ref: this,
    };
}

let user = makeUser();
console.log(user); */
// console.log(user.ref.name); // Каким будет результат?

/* function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        },
    };
}

let user = makeUser();

// console.log(user.ref().name); // Джон
console.log(user.ref().name); // Джон */

/* let calculator = {
    read() {
        this.x = +prompt("Insert x", 0);
        this.y = +prompt("Insert y", 0);
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
 */

/* let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };


//   ladder.up().up().down().showStep(); // 1
  ladder
  .up()
  .up()
  .down()
  .showStep(); // 1 */

/* function User(name) {
    this.name = name;
}

let user = new User("Neko");
// console.log(user.name);
console.log(new User("Neko"));
 */

/* function BigUser(name) {
    this.name = "Bro";
    return { name: "Terminator" };
}
let user = new BigUser();
console.log(user.name); // terminator */

/* function User(name) {
    this.name = name;
    this.sayHi = function () {
        console.log("My name is " + this.name);
    };
}
let user = new User("Marko");
user.sayHi(); */

/* const obj = {
    me: true,
};
function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A();
let b = new B();

console.log(a);
console.log(b);
console.log(a == b); // true */

/* function Calculator() {
    this.read = function () {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };

    this.sum = function () {
        this.summ = this.a + this.b;
        return this.summ;
    };

    this.mul = function () {
        this.multi = this.a * this.b;
        return this.multi;
    };
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul(); */

/* function Accumulator(startVal) {
    this.value = startVal;

    this.read = function () {
        this.value += +prompt("input num", 0);
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value); */

/* let obj = {
    name: 'Niko',
    surnane: 'rrtr'
}
console.log(obj?.pui?.pok); */

/* let user = null;

console.log( user?.address ); // undefined
console.log( user?.address.street ); // undefined */

/* let id = Symbol("id");

let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};
console.log(user[id]);

let x = Symbol ('x');
user[x] = 'xxx'
console.log(user);
console.log(user[x]); */

/* let s = Symbol('yy')
let object = {
    [s]: 555
}
console.log(object[s]); // 555 */

/* let id = Symbol("id");
let num = Symbol("number")
let user = {
  name: "Вася",
  age: 30,
  [id]: 123,
  [num]: 999,
};

console.log(user);

for (let key in user) {
    console.log(key)
}; // name, age (свойства с ключом-символом нет среди перечисленных)

// хотя прямой доступ по символу работает
// console.log( "Напрямую: " + user[id] ); */

/* let user = {
    name: 'ppp',
    age: 55
}
let x = Object.keys(user)
console.log(x); // [ 'name', 'age' ] */

/* // читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем -- это один и тот же символ
alert( id === idAgain ); // true */

/* let gl = Symbol.for('idd')
let loc = Symbol('loc')
// console.log(Symbol.keyFor(gl));
// console.log(gl);
console.log(Symbol.keyFor(loc));
console.log(loc.description); */

/* let x = Symbol.for('x')
let y = Symbol.for('x')
let z = Symbol.for('x')
console.log(y);
console.log(Symbol.keyFor(z)); */

/* let user = {
    name: "John",
    money: 1000,

    // для хинта равного "string"
    toString() {
      return `{name: "${this.name}"}`;
    },

    // для хинта равного "number" или "default"
    valueOf() {
      return this.money;
    }

  };

console.log(user); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500 */

/* let user = {
    name: 'Neko',

    toString() {
        return this.name
    }
};

console.log(user.toString() + 500) */

/* let obj = {
    // toString обрабатывает все преобразования в случае отсутствия других методов
    toString() {
      return "2";
    }
};

console.log(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом */

/* let str = "Привет";

str.test = 5;

console.log(str.test); */

/* let num = 255;

console.log(num.toString(16)); */

// console.log( 123456..toString(36) ); // 2n9c
/* Внимание! Две точки в 123456..toString(36) это не опечатка.
Если нам надо вызвать метод непосредственно на числе, как toString в примере выше,
то нам надо поставить две точки .. после числа. */

/* Также можно записать как (123456).toString(36). */

/* let x = 100n;
console.log(typeof x); */

// console.log(isFinite('0'));

// 6.35 -> 63.5 -> 64(rounded) -> 6.4
/*
let num = Math.round(6.35 * 10) / 10;
console.log(num);
console.log(typeof num); */

// {
//     let res = 50;  // or const
//     console.log(res);
// }
// console.log(res); // res is not defined

// function random (min, max) {
//     let random = min + Math.random() * (max - min)
//     return random
// };
// console.log(random(0, 5));

/*
function randomInteger (min, max) {
    // случайное число от min до (max+1)
    let rand =  min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
};
console.log(randomInteger(0, 5)); */

// for (let char of 'Hello') {
//     console.log(char);
// }

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// let str = 'Ослик Иа-Иа посмотрел на виадук';
// let target = "Иа"

// let pos = -1
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     console.log(pos);
// }

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log( pos );
// }

/* const getFileInfo = (filepath) => {
    // Инициализация объекта
    const info = {};

    const parts = filepath.split("/");
    const filename = parts[parts.length - 1];
    info.filename = filename;

    const extension1 = filename.split(".");
    const extension = extension1[extension1.length - 1];
    info.extension = extension;

    return info;
};

const filepath = "/path/to/index.js";
console.log(getFileInfo(filepath)); */

/* function getInfo(siteName) {
    const info = {};
    if (siteName.startsWith("http")) {
        const data = siteName.split("://");
        info.scheme = data[0];
        info.name = data[1];
    } else {
        info.scheme = "http";
        info.name = siteName;
    }
    return info;
}
const site = "http://google.com";
console.log(getInfo(site)); */
/*
function countWords(str) {
    const normalizeStr = str.toLowerCase();
    const words = _.words(normalizeStr, /[^, ]+/g);
    const res = {};
    words.forEach(function (item) {
        if (item) {
            if (_.has(res, item)) {
                res[item] += 1;
            } else {
                res[item] = 1;
            }
        }
    });
    return res;
}
const text = "one two three two ONE one wow";
let x = countWords(text);
console.log(x); */

/*
export default (sentence) => {
    const words = _.words(sentence);
    const result = {};
    for (const word of words) {
      const lowerWord = word.toLowerCase();
      result[lowerWord] = (result[lowerWord] ?? 0) + 1;
    }

    return result;
  };
 */
/*
const course = { name: "JS: React", slug: "js-react" };
for (const prop in course) {
    console.log(`course.${prop} = ${course[prop]}`);
} */

/* const course = { name: "JS: React", slug: "js-react" };
const entries = Object.entries(course);
for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}
 */

/* Реализуйте и экспортируйте функцию по умолчанию, которая
формирует из переданного объекта другой объект,
включающий только указанные свойства.

Параметры:
Исходный объект
Массив имен свойств */
/*
function pick(obj, props) {
    const entries = Object.entries(obj);
    const result = {};
    for (const [key, value] of entries) {
        for (const key2 of props) {
            if (key === key2) {
                result[key] = value;
            }
        }
    }
    return result;
}

const data = {
    user: "ubuntu",
    cores: 4,
    os: "linux",
};

let x = pick(data, ["user"]); // { user: 'ubuntu' }
console.log(x); */

// ПОИСК НОМЕРА ДОГОВОРА (Регулярные выражения). Regular Expression
// const payment = {info: "ЗА 29/01/2021;Красноставская Екатерина Васильевна;В счет погашения кредитного договора № 40817810010000043777аааа"}
// const string =  payment['info'].match(/(\d.+?\s|\d.+)/g)
// let contractNumber = false
// let str2 = false
// if (string) {
//     string.forEach(function (str) {
//         str2 = str.replace(/^[\s\,\.\;]+|[\s\,\.\;А-я]+$/g, "");
//     })
// };
// console.log("=====");
// console.log(string);
// console.log("-----");
// console.log(str2);

// ПОИСК НОМЕРА ДОГОВОРА (Регулярные выражения). Regular Expression
// const payment = {info: "ЗА 29/01/2021;Красноставская Екатерина Васильевна;В счет погашения кредитного договора № 40817810010000043777аааа"}
// const string =  payment['info'].match(/(\d.+?\s|\d.+)/g)
// let contractNumber = false
// let str2 = false
// if (string) {
//     string.forEach(function (str) {
//         str2 = str.replace(/^[\s\,\.\;]+|[\s\,\.\;А-я]+$/g, "");
//     })
// };
// console.log("=====");
// console.log(string);
// console.log("-----");
// console.log(str2);

// const obj = {
//     a: { b: { c: { key: "value" }, e: [1, 2] } },
// };
// // console.log(obj);    // { a: { b: { c: [Object], e: [Array] } } }

// // console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj, null, "  "));

/* {
    "a": {
      "b": {
        "c": {
          "key": "value"
        },
        "e": [
          1,
          2
        ]
      }
    }
  } */

/* const obj = {
    a: { b: { c: { key: "value" }, e: [1, 2] } },
};
// const obj = {
//     a: { b: { c: { key: "value" }, e: [1, 2] } },
// };
// const path = "a.b.c.key";
const path = ["a", "b", "c"];
// if (_.has(obj, "a.b.c")) {
if (_.has(obj, path)) {
    console.log("true");
    // console.log(obj.a.b.c);
} */

// const company = "companyyyy";
// const user = { company };
// console.log(user);

/* Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта
любой глубины вложенности значение по указанным ключам. Параметры:

Исходный объект
Цепочка ключей (массив), по которой ведётся поиск значения
В случае, когда добраться до значения невозможно, возвращается null. */

// function get(obj, keys) {
//     let current = obj;
//     for (const key of keys) {
//         const hasProp = Object.prototype.hasOwnProperty.call(
//             current,
//             key
//         );
//         if (!hasProp) {
//             return null;
//         }
//         current = current[key];
//     }
//     return current;
// }

// const data = {
//     user: "ubuntu",
//     hosts: {
//         0: {
//             name: "web1",
//         },
//         1: {
//             name: "web2",
//             null: 3,
//             active: false,
//         },
//     },
// };

// console.log(get(data, [null])); // null);
// console.log(get(data, ["undefined"])); // null);
// console.log(get(data, ["user"])); // 'ubuntu');
// console.log(get(data, ["user", "ubuntu"])); // null;
// console.log(get(data, ["hosts", 1, "name"])); // 'web2');
// console.log(get(data, ["hosts", 0])); // { name: 'web1' });
// console.log(get(data, ["hosts", 1, null])); // 3);
// console.log(get(data, ["hosts", 1, "active"])); // false);
// console.log(get(data, ["user", "name", "name"])); // false);

// Поверхностное (shallow) копирование.
// Такое копирование не затрагивает вложенные объекты.
// Они оказываются в новом объекте по ссылке из старого.

// const user = { company: { name: 'Hexlet' } };
// const copyOfUser = Object.assign({}, user);
// // Это тот же объект
// console.log(user.company === copyOfUser.company); // true

// user.company.createdAt = 2012;
// // console.log(copyOfUser.company.createdAt); // 2012
// user.company.code = 104;
// console.log(user);
// console.log(copyOfUser);

///////////////////////////
// cloneDeep()
// const user = { company: { name: "Hexlet" } };
// const copyOfUser = _.cloneDeep(user);
// console.log(user.company === copyOfUser.company); // false

// // Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
// function cloneDeep(data) {
//     console.log('cloneDeep');
//     const obj = {}
//     for (const key in data) {
//         if(_.isObject(data[key])) {
//             obj[key] = cloneDeep(data[key]);
//             // console.log(obj);
//         }
//         else {
//             // obj[key] = _.clone(data[key])
//             obj[key] = data[key]
//             // console.log('clone');
//             // console.log(obj);
//         }
//     }
//     return obj
// }

// const data = {
//     key: 'value',
//     key2: {
//       key: 'innerValue',
//       innerKey: {
//         anotherKey: 'anotherValue',
//       },
//     },
//   };

//   // result имеет такую же структуру, как и data
//   const result = cloneDeep(data);
//   console.log('=====');
//   console.log(result);

// //   // Но внутри другие объекты
//   console.log(result.key2 !== data.key2);; // true
//   console.log(result.key2.innerKey !== data.key2.innerKey); // true
//   console.log(result !== data);

// // Альтернативное решение
// const cloneDeep = (object) => {
//     const result = {};
//     const entries = Object.entries(object);
//     for (const [key, value] of entries) {
//       result[key] = isObject(value) ? cloneDeep(value) : value;
//     }

//     return result;
//   };

// Используйте спред-оператор для слияния данных внутри и возврата нового объекта.
// function make(name, data ={}){
//     const defaultData = {
//         state: 'moderating',
//         createdAt: Date.now(),
//     };
//     const result = {...defaultData, ...data, name};
//     return result;
// }

// // // Деструктуризация (destructuring
// const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };
// const {firstName, manager} = person;
// console.log(firstName); // Rasmus
// console.log(manager); // => true

// // При деструктуризации можно переименовывать имена.
// // Такое бывает нужно, если подобная константа уже определена выше.
// const manager = 5555; // имя занято
// const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };
// const {manager: isManager} = person;
// console.log(isManager); //true

// const person = { firstName: 'Rasmus', lastName: 'Lerdorf' };
// console.log(person.manager); // undefined
// const { manager = false } = person;
// console.log(manager); // => false

// console.log(person); // { firstName: 'Rasmus', lastName: 'Lerdorf' };

// const person = { firstName: "Rasmus", lastName: "Lerdorf" };

// console.log(person.manager); // undefined
// const { manager = false } = person;
// console.log(manager); // => false

// console.log(person); // => { firstName: 'Rasmus', lastName: 'Lerdorf' }

// const response = {
//     data: {
//         type: "photos",
//         id: "550e8400-e29b-41d4-a716-446655440000",
//         attributes: {
//             title: "Ember Hamster",
//             src:
//                 "http://example.com/images/productivity.png",
//         },
//         relationships: {
//             author: {
//                 links: {
//                     related:
//                         "http://example.com/articles/1/author",
//                 },
//             },
//         },
//         links: {
//             self:
//                 "http://example.com/photos/550e8400-e29b-41d4-a716-446655440000",
//         },
//     },
// };

// const author = response.data.relationships.author;
// const {
//     links,
//     attributes: user,
//     relationships: author,
// } = response.data;
// console.log(author);
// {
//   author: { links: { related: 'http://example.com/articles/1/author' } }
// }

// const {
//     links,
//     attributes: user,
//     relationships: { author },
// } = response.data;
// console.log(author);
// // { links: { related: 'http://example.com/articles/1/author' } }

// function getSortedNames(users) {
//     const res = [];
//     for (const user of users) {
//         const { name } = user;
//         res.push(name);
//     }
//     res.sort();
//     return res;
// }
// const users = [
//     {
//         name: "Bronn",
//         gender: "male",
//         birthday: "1973-03-23",
//     },
//     {
//         name: "Reigar",
//         gender: "male",
//         birthday: "1973-11-03",
//     },
//     {
//         name: "Eiegon",
//         gender: "male",
//         birthday: "1963-11-03",
//     },
//     {
//         name: "Sansa",
//         gender: "female",
//         birthday: "2012-11-03",
//     },
// ];

// console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']

// export default (users) => {
//     const names = [];

//     for (const { name } of users) {
//         names.push(name);
//     }

//     return names.sort();
// };

// function getSortedNames(users) {
//     const names = [];
//     for (const { name } of users) {
//         names.push(name);
//     }
//     return names.sort();
// }

// Правильно, в случае с динамическими языками, –
// формировать массив, который затем с помощью метода join()
// превратить в строку:

// // Генерация строки в цикле
// const buildHTMLList = (coll) => {
//     const parts= [];
//     for (const item of coll) {
//         parts.push(`<li>${item}</li>`)
//     }
//   // Метод join объединяет элементы массива в строку
//   // В качестве разделителя между значениями
//   // используется то, что передано первым параметром
//     const innerValue = parts.join('')
//     const result = `<ul>${innerValue}</ul>`;
//     return result;
// }

// // Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое
// // вхождение указанных слов в предложении на последовательность $#%!
// // и возвращает полученную строку
// function makeCensored(string, stopWords) {
//     const words = string.split(' ');
//     const result = [];
//     for (const word of words) {
//         const innerValue = stopWords.includes(word) ? '$#%!' : word
//         result.push(innerValue);
//     }
//     return result.join(' ');
// }
// const sentence2 = 'chicken chicken? chicken! chicken';
// const result2 = makeCensored(sentence2, ['?', 'chicken']);
// console.log(result2);

// console.log(10 + "20");

// func('trata')

// const func = (x) => {
//     console.log(x);
// }

// function countUniqChars(str) {
//     const reg = /\s*/;
//     const chars = str.toLowerCase().split(reg);
//     const result = [];
//     chars.forEach(function (char) {
//         if (!result.includes(char)) {
//             result.push(char);
//         }
//     });
//     return result.length;
// }

// const text1 = "You know nothing Jon Snow";
// const res = countUniqChars(text1); //
// console.log(res);

// function countUniqChars(chars) {
//     if (chars.length === 0) {
//         return 0;
//     }
//     // const reg = /\s*/;
//     // const chars = str.split(reg).toLowerCase();
//     const result = [];
//     for (const char of chars) {
//         if (!result.includes(char)) {
//             result.push(char);
//         }
//     }
//     console.log(result);
//     return result.length;
// }

// const numbers = [8, 3, 10];
// // sort изменяет массив!
// numbers.sort((a, b) => a - b); // сортировка по возрастанию
// console.log(numbers); // => [3, 8, 10]

// const bubbleSort = (coll) => {
//     let stepCount = coll.length - 1;

//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < stepCount; i++) {
//             if (coll[i] > coll[i+1]) {
//                 const val = coll[i];
//                 coll[i] = coll[i+1];
//                 coll[i+1] = val;

//                 swapped = true;
//             }
//         }
//         stepCount -= 1
//     } while (swapped)

//     return coll;
// }
// console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]

// // Функция изменяет входящий массив coll
// const bubbleSort = (coll) => {
//     let stepsCount = coll.length - 1;
//     // Объявляем переменную swapped, значение которой показывает был ли
//     // совершен обмен элементов во время перебора массива
//     let swapped;
//     // do..while цикл. Работает почти идентично while
//     // Разница в проверке. Тут она делается не до выполнения тела, а после.
//     // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
//     do {
//       swapped = false;
//       // Перебираем массив и меняем местами элементы, если предыдущий
//       // больше, чем следующий
//       for (let i = 0; i < stepsCount; i += 1) {
//         if (coll[i] > coll[i + 1]) {
//           // temp – временная константа для хранения текущего элемента
//           const temp = coll[i];
//           coll[i] = coll[i + 1];
//           coll[i + 1] = temp;
//           // Если сработал if и была совершена перестановка,
//           // присваиваем swapped значение true
//           swapped = true;
//         }
//       }
//       // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
//       // в конце массива
//       stepsCount -= 1;
//     } while (swapped); // продолжаем, пока swapped === true

//     return coll;
//   };

//   console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]

// const arr = [0, 3];
// console.log(_.last(arr));

// const openingSymbols = ["(", "{", "[", "<"];
// const closingSymbols = [")", "}", "]", ">"];

// const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);

// const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

// function isBracketStructureBalanced(symbols) {
//     const stack = [];
//     for (const symbol of symbols) {
//         if (isOpeningSymbol(symbol)) {
//             stack.push(getClosingSymbolFor(symbol));
//         } else {
//             const lastSaved = stack.pop();
//             if (lastSaved !== symbol) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// const str = "({}[])";
// const res = isBracketStructureBalanced(str);
// console.log(res);

// function getIntersectionOfSortedArrays(arr1, arr2) {
//     const result = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] === arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//             j++;
//         } else if (arr1[i] > arr2[j]) {
//             j++;
//         } else {
//             i++;
//         }
//     }
//     return result;
// }

// const arr = [3, 7];
// // const [, y] = arr;
// // console.log(y); // 7
// const [x, y] = arr;
// console.log(`${x}:${y}`);

// // Извлекаем первый элемент
// // Остальные игнорируются
// const [x] = point;

// // Извлекаем второй элемент
// // Для этого просто не указываем первый
// const [, y] = point;

// // и даже так
// const [, secondElement, , fourthElement, fifthElement] = [1, 2, 3, 4, 5, 6];

// console.log(secondElement); // => 2
// console.log(fourthElement); // => 4
// console.log(fifthElement); // => 5

// // // //
// Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит
// ближайшее место к указанной точке на карте и возвращает его.
// Параметры функции:

// locations – массив мест на карте. Каждое место - это массив из двух элементов,
// где первый элемент это название места,
// второй – точка на карте (массив из двух чисел x и y).
// point – текущая точка на карте. Массив из двух элементов-координат x и y.

// const locations = [
//     ["Park", [10, 5]],
//     ["Sea", [1, 3]],
//     ["Museum", [8, 4]],
// ];

// const currentPoint = [5, 5];

// const getDistance = ([x1, y1], [x2, y2]) => {
//     const xs = x2 - x1;
//     const ys = y2 - y1;

//     return Math.sqrt(xs ** 2 + ys ** 2);
// };

// const getTheNearestLocation = (locations, currentPoint) => {
//     if (locations.length === 0) {
//         return null;
//     }

//     let [nearestLocation] = locations;
//     const [, nearestPoint] = nearestLocation;
//     let lowestDistance = getDistance(currentPoint, nearestPoint);

//     for (const location of locations) {
//         const [, point] = location;
//         const distance = getDistance(currentPoint, point);
//         if (distance < lowestDistance) {
//             lowestDistance = distance;
//             nearestLocation = location;
//         }
//     }

//     return nearestLocation;
// };

// const result = getTheNearestLocation([], currentPoint);
// const result2 = getTheNearestLocation(locations, currentPoint);
// console.log(result);
// console.log(result2);

/*
const fruits = ["apple", "orange", "banana", "pineapple"];

// ... – rest-оператор
const [first, ...rest] = fruits;
console.log(first); // 'apple'
console.log(rest); // ['orange', 'banana', 'pineapple'] */

// const getMax = (coll) => {
//     if (coll.length === 0) {
//       return null;
//     }

//     let [max, ...rest] = coll;
//     for (const value of rest) {
//       if (value > max) {
//         max = value;
//       }
//     }

//     return max;
//   };

/*
// Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход
// массив и выпрямляет его: если элементами массива являются массивы,
// то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.
export const flatten = (coll) => {
    let result = [];
    for (const item of coll) {
        if (Array.isArray(item)) {
            result = [...result, ...item];
        } else {
            result = [...result, item];
        }
    }

    return result;
};

//   Либо так

export const flatten = (coll) => {
    if (coll.length === 0) {
        return [];
    }
    const result = [];
    for (const item of coll) {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }
    return result;
};
 */

// const x  = console.log();
// console.log(x); // undefined

/*
// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет
// переданное число на простоту и печатает на экран yes или no.

// число x является простым, если оно больше 1
// и при этом делится без остатка только на 1 и на x.
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const sayPrimeOrNot = (num) => {
  const text = isPrime(num) ? "yes" : "no";
  console.log(text);
};

sayPrimeOrNot(-3); // 'no'
sayPrimeOrNot(4); // 'no'
 */

// const sum = (...numbers) => {
//     let res = 0;
//     for (const num of numbers) {
//         res += +num;
//     }
//     return res;
// };

// console.log(sum(1, "2", 7));

//
// const func = (a, b, ...params) => {
//     // параметр 'a' содержит первый аргумент
//     console.log(`a -> ${a}`);
//     // параметр 'b' содержит второй аргумент
//     console.log(`b -> ${b}`);
//     // params содержит все остальные аргументы
//     console.log(params);
// };

// func(9, 4);
// // => a -> 9
// // => b -> 4
// // => []
// func(9, 4, 1);
// // => a -> 9
// // => b -> 4
// // => [1]
// func(9, 4, 1, -3);
// // => a -> 9
// // => b -> 4
// // => [1, -3]
// func(9, 4, 1, -3, -5);
// // => a -> 9
// // => b -> 4
// // => [1, -3, -5]

// const takeLast = (str, length) => {
//     if (str.length === 0 || str.length < length) {
//         return null;
//     }

//     const result = [];
//     for (let i = str.length - 1; result.length < length; i -= 1) {
//         result.push(str[i]);
//     }

//     return result.join("");
// };

// function convert(...dates) {
//     const result = [];
//     for (const date of dates) {
//         const newDate = new Date(...date);
//         const strDate = newDate.toDateString();
//         result.push(strDate);
//     }
//     return result;
// }

// convert();
// // []

// let x = convert([1993, 3, 24]);
// console.log(x);
// // ['Sat Apr 24 1993']

// convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// // ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']

// const users = [
//   { name: "Igor", age: 19 },
//   { name: "Danil", age: 1 },
//   { name: "Vovan", age: 4 },
//   { name: "Matvey", age: 16 },
// ];

// // Функция принимает на вход сравниваемые элементы массива
// const compare = (a, b) => {
//   if (a.age === b.age) {
//     return 0;
//   }
//   return a.age > b.age ? 1 : -1;
// };

// users.sort(compare);
// console.log(users);
// => [ { name: 'Danil', age: 1 },
//      { name: 'Vovan', age: 4 },
//      { name: 'Matvey', age: 16 },
//      { name: 'Igor', age: 19 } ]

// // либо
// users.sort((a, b) => {
//     if (a.age === b.age) {
//         return 0;
//     }
//     return a.age > b.age ? 1 : -1;
// })
// console.log(users);

// То же самое, но используя функцию Math.sign

// Метод Math.sign() возвращает знак числа, указывающий на то,
// является ли число отрицательным, положительным или нулём.
// users.sort((a, b) => Math.sign(a.age - b.age));
// console.log(users);

// Функция say() делает вызов функции, находящейся внутри параметра fn().
// const say =(fn) => {
//     const message = fn();
//     console.log(message);
// }
// const callBackFn = () => 'Hi';
// say(callBackFn);

// const say =(fn) => console.log(fn())
// const callBackFn = () => 'Hi';
// say(callBackFn); // Hi

///
// const f = (x) => x + 3;

// const g = (f, x) => {
//     console.log(f(x)); // 10
//     return f(x) * f(x);
// }

// console.log(g(f, 7));

// function takeOldest(list, count = 1) {
//     const sorted = _.sortBy(list, function ({ birthday }) {
//         // сравнивает поочередно значения Date.parse(birthday) и
//         // сортируем возвращаемый массив в порядке возрастания
//         return Date.parse(birthday);
//     });
//     return sorted.slice(0, count);
// }
// or

// const takeOldest = (list, count = 1) => {
//     const sorted = _.sortBy(list, ({ birthday }) => Date.parse(birthday));
//     return sorted.slice(0, count);
// };

// const users = [
//     { name: "Tirion", birthday: "Nov 19, 1988" },
//     { name: "Sam", birthday: "Nov 22, 1999" },
//     { name: "Rob", birthday: "Jan 11, 1975" },
//     { name: "Sansa", birthday: "Mar 20, 2001" },
//     { name: "Tisha", birthday: "Feb 27, 1992" },
//     { name: "Chris", birthday: "Dec 25, 1995" },
// ];

// console.log(takeOldest(users, 3));
// // [
// //     { name: "Rob", birthday: "Jan 11, 1975" },
// //     { name: "Tirion", birthday: "Nov 19, 1988" },
// //     { name: "Tisha", birthday: "Feb 27, 1992" },
// // ];

// const users = [
//     { name: "Igor", age: 19 },
//     { name: "Danil", age: 1 },
//     { name: "Vovan", age: 4 },
//     { name: "Matvey", age: 16 },
// ];

// // const names = users.map((user) => user.name);
// // or
// const names = users.map(( {name} ) => name);

// console.log(names); // => ['Igor', 'Danil', 'Vovan', 'Matvey']

/*
// Напишем свою собственную функцию myMap(), работающую аналогично методу массива map():

const myMap = (collection, callback) => {
    const result = [];
    for (const item of collection) {
        // Вызов переданного колбека на каждом элементе коллекции
        const newItem = callback(item);
        //  Возврат из колбека добавляется в результирующий массив
        result.push(newItem);
    }
    return result;
}

const numbers = [5, 2, 3];
const newNumbers = myMap(numbers, (number) => number ** 2);
console.log(newNumbers);
 */

/*
const users = [
    {
      name: 'Tirion',
      children: [
        { name: 'Mira', birthday: '1983-03-23' },
      ],
    },
    { name: 'Bronn', children: [] },
    {
      name: 'Sam',
      children: [
        { name: 'Aria', birthday: '2012-11-03' },
        { name: 'Keit', birthday: '1933-05-14' },
      ],
    },
    {
      name: 'Rob',
      children: [
        { name: 'Tisha', birthday: '2012-11-03' },
      ],
    },
  ];

// function getChildren(users) {
//     const childrenOfUsers  = users.map((user) => user.children);   // or // const children = users.map( ({children}) => children);
//     return childrenOfUsers.flat();
// }

// Alternative solution
const getChildren = (users) => users.flatMap(( {children} ) => children);


console.log(getChildren(users));
  // [
  //   { name: 'Mira', birthday: '1983-03-23' },
  //   { name: 'Aria', birthday: '2012-11-03' },
  //   { name: 'Keit', birthday: '1933-05-14' },
  //   { name: 'Tisha', birthday: '2012-11-03' },
  // ];
   */

/*
const users = [{
        name: 'Igor',
        age: 19
    },
    {
        name: 'Danil',
        age: 1
    },
    {
        name: 'Vovan',
        age: 4
    },
    {
        name: 'Matvey',
        age: 16
    },
];

const filteredUsers = users.filter((user) => user.age > 10);
const filteredUsers = users.filter(( {age} ) => age > 10);

console.log(filteredUsers);
 */

// Напишем свою собственную функцию myFilter, работающую аналогично методу массива filter:
// const myFilter = (collection, callback) => {
//     const result = [];
//     for (const item of collection) {
//         if (callback(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// };
// const users = [{
//         name: 'Igor',
//         age: 19
//     },
//     {
//         name: 'Danil',
//         age: 1
//     },
//     {
//         name: 'Vovan',
//         age: 4
//     },
//     {
//         name: 'Matvey',
//         age: 16
//     },
// ];
// const filteredUsers = myFilter(users, (user) => user.age > 10);
// console.log(filteredUsers);

/*
const getGirlFriends = (users) => {
    const friendsOfUsers = users.map(({ friends }) => friends);
    return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
}

const users = [
    {
        name: 'Tirion',
        friends: [
            { name: 'Mira', gender: 'female' },
            { name: 'Ramsey', gender: 'male' },
        ],
    },
    { name: 'Bronn', friends: [] },
    {
        name: 'Sam',
        friends: [
            { name: 'Aria', gender: 'female' },
            { name: 'Keit', gender: 'female' },
        ],
    },
    {
        name: 'Rob',
        friends: [
            { name: 'Taywin', gender: 'male' },
        ],
    },
];

console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
 */

// const users = [
//     { name: 'Petr', age: 4 },
//     { name: 'Igor', age: 19 },
//     { name: 'Vovan', age: 4 },
//     { name: 'Matvey', age: 16 },
// ];

// const usersByAge = {};
// for (const { age, name } of users) {
//     // Функция _.has() проверяет наличие свойства в объекте
//     if (!_.has(usersByAge, age)) {
//         usersByAge[age] = [];
//     }
//     usersByAge[age].push(name);
// }
// console.log(usersByAge);
// // => { 4: [ 'Petr', 'Vovan' ], 16: [ 'Matvey' ], 19: [ 'Igor' ] }

// const users = [
//     { name: 'Igor', amount: 19 },
//     { name: 'Danil', amount: 1 },
//     { name: 'Vovan', amount: 4 },
//     { name: 'Matvey', amount: 16 },
// ];

// const sum = users.reduce((acc, user) => acc + user.amount, 0)
// console.log(sum);

/*
const users = [
    { name: 'Petr', age: 4 },
    { name: 'Igor', age: 19 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];

const callback = (acc, user) => {
    if (!_.has(acc, user.age)) {
        acc[user.age] = [];
    }
    acc[user.age].push(user.name);
    return acc;
};

const usersByAge = users.reduce(callback, {});
console.log(usersByAge);
 */

/*
// Напишем свою собственную функцию myReduce(), работающую аналогично методу массива reduce()
const myReduce = (collection, callback, init) => {
    let acc = init; // инициализация аккумулятора
    for (const item of collection) {
        acc = callback(acc, item) // Заменяем старый аккумулятор новым
    }
    return acc;
};

const users = [
    { name: 'Petr', age: 4 },
    { name: 'Igor', age: 19 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];

const oldest = myReduce(
    users,
    (acc, user) => (user.age > acc.age ? user : acc),
    users[0],
);

console.log(oldest); // => { name: 'Igor', age: 19 }
 */

// // Реализуйте функцию для группировки объектов по заданному свойству.
// const groupBy = (collection, prop) => {
//     return collection.reduce(
//         (acc, item) => {
//             const groupName = item[prop];
//             if (!acc[groupName]) {
//                 acc[groupName] = [];
//             }
//             acc[groupName].push(item);
//             return acc;
//         },
//         {},
//     );
// };

/*
//  Alternative solution
const groupBy = (objects, key) => objects.reduce((acc, object) => {
    // из каждого объекта берётся значение по ключу
    const groupName = object[key];
    // контейнером группы выступает массив
    // const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
    // возвращается новый объект аккумулятора
    return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
    // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
}, {});

const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
];

console.log(groupBy(students, 'mark'));
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }
 */

// const arr = [
//     { 4: 4 }
// ];
// const obj = { 3: '3' };
// const concat = arr.concat(obj);
// console.log(concat);  // [ { '4': 4 }, { '3': '3' } ]

// // Оператор нулевого слияния возвращает пустой массив,
// // если в аккумуляторе ничего нет
// const group = acc[groupName] ?? [];

/*
// fs.existsSync(filepath) — проверяет, существует ли файл по указанному пути
// fs.lstatSync(filepath).isFile() — проверяет, является ли объект обычным "регулярным" файлом
(а не директорией, ссылкой или другим типом файлов)
// path.extname(filepath) — извлекает "расширение" из имени файла
// path.basename(filepath) — извлекает имя файла из полного пути
const getJsFileNames = (paths) => paths
    // отображаем реально существующие файлы
    .filter((filepath) => fs.existsSync(filepath))
    // отбор по типу файла
    .filter((filepath) => fs.lstatSync(filepath).isFile())
    // отбор по расширению
    .filter((filepath) => path.extname(filepath).toLowerCase() === '.js')
    // отображаем в имена (нам нужен массив с именами)
    .map((filepath) => path.basename(filepath.toLowerCase(), '.js'));

const names = getJsFileNames(['index.js', 'wop.JS', 'nonexists', 'node_modules']);
console.log(names); // => [index, wop]
 */

/*
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов,
// а возвращает количество емейлов, расположенных на каждом бесплатном домене.
// Список бесплатных доменов хранится в константе freeEmailDomains.

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
];

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const getFreeDomainsCount = (emails) => emails
    .map((email) => {
        const [, domain] = email.split('@');
        return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
        const count = _.get(acc, domain, 0) + 1;
        console.log({ ...acc, [domain]: count });
        // { 'gmail.com': 1 }
        // { 'gmail.com': 1, 'yandex.ru': 1 }
        // { 'gmail.com': 1, 'yandex.ru': 1, 'hotmail.com': 1 }
        // { 'gmail.com': 1, 'yandex.ru': 2, 'hotmail.com': 1 }
        // { 'gmail.com': 2, 'yandex.ru': 2, 'hotmail.com': 1 }
        // { 'gmail.com': 3, 'yandex.ru': 2, 'hotmail.com': 1 }
        // { 'gmail.com': 3, 'yandex.ru': 2, 'hotmail.com': 2 }
        return { ...acc, [domain]: count };
    }, {});


const res = getFreeDomainsCount(emails);
console.log('\n', res);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
 */

// const __reverse1 = (str) => [...str].reduce((res, char) => char + res); // => zab
// const __reverse2 = (str) => [...str].reduce((res, char) => res + char); // => baz

// console.log(__reverse1("baz")); // => zab
// console.log(__reverse2("baz")); // => baz

/*
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение
// в виде двумерного массива и возвращает массив, увеличенный в два раза.

const duplicateValues = (items) => items.flatMap((item) => [item, item])
const enlargeArrayImage = (arr) => {
    const horizontallyStretched = arr.map(duplicateValues);
    console.log(horizontallyStretched);  // [ [ '*', '*', '*', '*' ] ]
    return duplicateValues(horizontallyStretched);
}

const arr = [
    ['*', '*'],
];

console.log(enlargeArrayImage(arr)); // [ [ '*', '*', '*', '*' ], [ '*', '*', '*', '*' ] ]
 */


// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//         console.log(this.name); // приведёт к ошибке
//     }

// };


// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!


// let obj, method;

// obj = {
//     go: function () { console.log(this); }
// };

// obj.go();               // (1) [object Object]   // { go: [Function: go] }

// (obj.go)();             // (2) [object Object]  // { go: [Function: go] }

// (method = obj.go)();    // (3) undefined
// console.log(method);    // [Function: go]



// function makeUser() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };

// let user = makeUser();

// console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

