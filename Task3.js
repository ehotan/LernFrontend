"use strict"

//Решения 3 задачи "в лоб"

let maxLength = 3;
let chess = '';

for (let i = 0; i < maxLength; i++ ) {
    for ( let j = 0; j < maxLength; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) chess += '#'
            else chess += ' ';
        } else {
            if (i % 2 != 0) {
                if (j % 2 == 0) chess += ' '
                else chess += '#';
            }
        }
    }
    chess += '\n';
}
console.log (chess);






/*
let text = '';
let str = '#';

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j < 8; j++) {
        if (str.at(-1) == '#') {
            str += ' '
        } else {
            str += '#';
        }
    }
    text += `${str}\n`
    str = str[1];
}
console.log (text); 
*/

