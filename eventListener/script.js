"use strict";

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay'),
    btns = document.querySelectorAll('button')

// // желательно НЕ использовать

// btn.onclick = function () {
//     alert('Click')
// }
// // заменит первый метод
// btn.onclick = function () {
//     alert('Second Click')
// }

// более продвинутый способ

// // добавляем обработчик(слушатель) события
// btn.addEventListener('click', () => {
//     alert('Click');
// });
// // не заменяет первый метод (сработает после него)
// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// let i = 0;
// const deleteElement = (event) => {
//     console.log(event.target);
//     // event.target.remove();
//     console.log('Hover');
//     i++;
//     if (i === 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
const deleteElement = (event) => {
    // эл-т, на котором изначально произошло событие
    // console.log(event.target);

    // эл-т, к которому привязан обработчик события
    console.log(event.currentTarget);

    console.log(event.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// добавляем обработчики для каждой кнопки
btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target);
    }, { once: true })
});

// или просто передаем функцию
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement)
// });

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    // отменяем стандартное поведение. 
    // ставим в начало. Подразумевает задание иных действия вместо стандартных
    event.preventDefault();

    console.log(event.target);
});
