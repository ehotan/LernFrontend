/* 
function isEven (n) {
    if (n == 0) {
        return (true);
    } else if (n == 1) {
        return (false)
    } else return (isEven(n - 2));
} 
*/


/*
при значении -1 происходит переполнение стека рекурсии,
т.к. условие вывода базы рекурсии не выполняется

Избежать этого можно, используя метод Math.abs внутри функции, как на примере ниже
*/

function isEven (n) {
    n = Math.abs(n)
    if (n == 0) {
        return (true);
    } else if (n == 1) {
        return (false)
    } else return (isEven(n - 2));
} 

console.log (isEven(-50));
