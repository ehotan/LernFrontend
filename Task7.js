
function range (firstNum, lastNum) {
    let arr = [];
    for (let i = firstNum; i <= lastNum; i++) {
        arr.push(i);
    }
    return arr;
}

console.log (range(1, 10));



function sum (arr) {
    return arr.reduce ((accum, current) => {
        return accum + current 
    }, 0);
}

console.log (sum(range(1, 10)));



/* function sum (arr) {
    let summ = 0;
    for (let num of arr) { 
        summ += num;
    }
    return summ;
}

console.log (sum(range(1, 10))); */



