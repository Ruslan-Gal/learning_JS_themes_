const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.value);

// получаем класс с индексом 0 (т.е. первый по счету)
// console.log(btns[0].classList.item(0));

// console.log(btns[1].classList.add('red', 'tttt'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// проверяем наличие класса у эл-та
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

//     // увидим event.target в кач-ве объекта
//     // console.dir(event.target);

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('red')
    // }

    btns[1].classList.toggle('red');
});

// ДЕЛЕГИРУЕМ СОБЫТИЕ С РОДИТЕЛЯ НА ЕГО ПОТОМКОВ
//  - удобный прием для работы с DOM - деревом
// УДОБНО ПРИ СОЗДАНИИ ДИНАМИЧЕСКИХ ЭЛ-ТОВ
// Отлично подходит, когда есть много элементов с одинаковыми обработчиками
// при динамическом изменении, обработчики также будут применяться к новым эл-там
// экономия кода и памяти браузера, ведь обработчик всего один.

// wrapper.addEventListener('click', (event) => {
//     // добавили event.target, т.к. в HTML не все эл-ты поддерживают событие клика.
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

// сотрудники гугла любят делать так
wrapper.addEventListener('click', (event) => {
    // matches - ищет совпадения
    if (event.target && event.target.matches("button.red")) { // or "button"
        console.log('Hello');
    }
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// // динамически созданные эл-ты не будут иметь обработчика событий
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     })
// });


