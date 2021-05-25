// touchstart (возникновение касания элемента)
// touchmove (смещение касания)
// touchend
// touchenter
// touchleave
// touchcancel

// три главных свойства при работе с сенсорными устройствами:
// touches (список пальцев на экране)

// targetTouches (список пальцев, взаимодействующих именно с текущим конкретным эл-том)

// changedTouches (список пальцев, участвующих в текущем событии, т.е. пальцы, совершившие назначенное событие)
// например если у нас событие touchend и мы убрали мезинец, то в списке будет мезинец, несмотря на оставшиеся на экране пальцы.

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('touchstart');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('touchmove');
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('touchend');
    });
});
