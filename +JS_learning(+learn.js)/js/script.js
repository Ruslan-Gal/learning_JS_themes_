'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms() {
        //  при нажатии на кнопку отмены - рез-т будет null
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оценнить его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Few movies watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a movie buff');
        } else {
            console.log('Error');
        }
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres() {
        for (let i = 1; i < 2; i++) {
            // const genre = prompt(`Your favorite genre at number ${i}`, '');

            // if (genre === '' || genre === null) {
            //     i--;
            // } else {
            //     personalMovieDB.genres.push(genre);
            // }

            const genres = prompt('Write your favorite genres separated by commas', '').toLowerCase();
            if (genres === '' || genres === null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();

            }
        }
        personalMovieDB.genres.forEach((item, i, arr) => {
            console.log(`Favorite genre ${i + 1} is ${item}`);
        });
    },
};
