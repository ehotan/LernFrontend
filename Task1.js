let n = 7;
let text = '';

for (let oct = '#'; oct.length <= n; oct += '#') {
    text += `${oct}\n`;
}

console.log (text);

// Ниже - первоначальные (кривоватенькие) версии решения
/* function addOct () {
    oct += "#";
}
let oct = "#";
let n = 7;
let i = 1;

do {
    console.log (oct + "\n");
    addOct();
    i++;
} while (i <= n);
 */



/* function addOct (n) {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            oct += "#";
        }
        j = 1;
        oct += '\n';                
    }
    return oct;
}

let i = 1;
let j = 1;
let oct = '';
let n = 7;

console.log (addOct(n));
 */



/* let n = 10;
let oct = '#';
let text = '';

for (let i = 1; i <= n; i++) {
    text += oct;
    oct += "#";
    text += "\n";      
}

console.log (text); */

