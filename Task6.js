/* 
function countBs (str) {
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt (i) == 'B') j += 1;
    }
    return j;
}
console.log (countBs('B'));
 */

function countChar (str, symb) {
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt (i) == symb) j += 1;
    }
    return j;
}
console.log (countChar('big Brotherbs', 'b'));