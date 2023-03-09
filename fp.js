"use strict"
/* 
let admin;
let name = 'Джон';

admin = name;
alert (admin); */

// let planetName = 'Земля';
// let currentUserName;

/* let str = "3214  ";
let num = Number(str);
alert (str);
alert (num); */


/* let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 12 */



/* let officialName = prompt("Какое официальное название JS?", '');
if (officialName == 'ECMAScript') {
    alert ("Верно!");
} else {
    alert ('Не знаете? “ECMAScript”!');
}; */


/* let num = prompt("Введите число", '');
if (num > 0) {
    alert ( 1 );
} else if (num < 0 ) {
    alert ( -1 );
} else {
    alert ( 0 );
} */


// let result;
// result = (a + b < 4) ? 'Мало': 'Много';



/* let message;
message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здарвствуйте' :
    (login == '') ? 'Нет логина' :
    ''; */


/* let age = 12;

if (age >= 14 && age <= 90) {
    alert ( true );
} else {
    alert ( false );
} */


// if (age < 14 || age > 90)


/* let userName = prompt ("Кто там?", '');
let password;

if (userName === 'Админ') {
     password = prompt ("Пароль?",'');
     if (password === 'Я Главный') {
        alert ("Здравствуйте!");
     } else if (password === null || password == '') {
        alert ("Отменено");
     } else {
        alert ("Неверный пароль");
     }
} else if (userName === null  || userName == '') {
    alert ("Отменено");
} else {
    alert ("Я вас не знаю")
} */


/* for (let i = 2; i <= 10; i++) {
    if (i % 2 == 1) continue;
    alert (i);
}
 */



/* 
let i = 0;
while (i < 3) {
    alert (`number ${i}!`);
    i++;
} */



/* 
let num = prompt ('Введите число больше 100', '');
while (num <= 100 && num) {
    num = prompt ('Введите число больше 100', '');
}
alert (`Вы ввели ${num}`); */



/* let n = prompt (`Введите число`, '');
mainProcess:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue mainProcess;
    }
    alert (i);
} */


/* let browser = prompt ("Your browser", '');
if (browser == 'Edge') {
    alert ("You've got the Edge!")
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == "Opera") {
    alert ("Okay we support these browsers too")
} else {
    alert ("We hope that this page looks ok!");
} */



/* let number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert ('Вы ввели число 0');
        break;
    case 1:
        alert ('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert ('Вы ввели число 2, а может и 3');
        break;
} */



/* function checkAge(age) {
    return (age > 18) ? true : confirm ('Родители разрешили?');
  }
 */



/*   function checkAge(age) {
    return (age > 18) || confirm ('Родители разрешили?');
  } */




/* function min (a,b) {
    return (a <= b) ? a : b;
}
alert ( min(2, 5));
alert (min(3, -1));
alert (min(1,1)); */


/* function pow(x,n) {
    return x ** n;
}
let x = +prompt ('Введите x', '');
let n = +prompt ('Введите n', '');
alert (pow(x, n)); */


/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  ); */




/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
   "Вы согласны?",
   () => { alert("Вы согласились."); },
   () => { alert("Вы отменили выполнение."); }
 ); */




