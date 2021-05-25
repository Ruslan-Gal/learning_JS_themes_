"use strict";

const p = document.querySelectorAll('p');
console.log(p);


// динамическое создание скриптов
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    // будут выполняться как обычные скрипты, т.е. друг за другом
    script.async = false;
    document.body.append(script);
}

loadScript("test.js");
loadScript("some.js");