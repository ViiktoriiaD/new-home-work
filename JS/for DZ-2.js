
// Среднее арифметическое-1. Просто 3 числа
var number1 = +prompt("Первое число");
var number2 = +prompt("Второе число");
var number3 = +prompt("Третье число");
var average = (number1 + number2 + number3) / 3;
console.log("Среднее арифметическое = %s",average);

// Среднее арифметическое-2. Набор чисел через запятую
var inputDate = prompt('Введи числа через запятую');
var array = inputDate.split(",");
var sum = 0;
for (let index = 0; index < array.length; index++) {
    let element = +array[index];
    sum += element;  
}
var averageList = sum / array.length;
console.log("Среднее списка чисел %s", averageList);

// Конвертация валюты
var currencyDollar = +prompt("Введите стоимость в долларах");
confirm("Будет осуществлен перевод в гривну") ? alert("Стоимость в гривнах " + (currencyDollar *= 25.05)) : alert("Не конвертировалась");

// Проверка на соответствие
var valueInput = prompt("Введи значение");
var anotherValue = prompt("Введи еще значение");
console.log("Совпадение по значению и типу %s", valueInput === anotherValue); 

// Угадай число
var num = +prompt("Введи число от 1 до 5");
var gen = Math.floor(Math.random() * 5 + 1);
num === gen ?  console.log("А у меня " + gen + " Угадал!") : console.log("А у меня " + gen + " Не угадал!");






