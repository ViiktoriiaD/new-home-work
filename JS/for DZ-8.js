/*  Функция, которая возвращает количество часов,
прошедших с момента введенной даты. */

function getHours(date) {
   // Текущая дата с нулевым временем
   let now = new Date();
   let zeroTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());   
   return (zeroTime - date)/1000/60/60 + 2;
}

let enterDate = prompt("Введите дату в формате ГГГГ-ММ-ДД", "2020-02-25");

let dateUser = new Date(enterDate);
let hours = getHours(dateUser);
console.log("От " + enterDate + " прошло "  + hours + " часов");


/* Написать скрипт, который будет выводить
часы в консоль. В формате HH:mm:ss */

let now = new Date();
let setHours = now.getHours();
let setMinutes = now.getMinutes();
let setSeconds = now.getSeconds();
console.log("Время " + setHours + " : " + setMinutes + " : " + setSeconds);





