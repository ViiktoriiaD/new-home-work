/*
Запросить у пользователя значение,
кратное которому будут выводиться выводиться в консоль числа из первой тысячи,
и подсчитать их количество
*/
var denominator = +prompt("Введи делитель", 25);

// Используется цикл for

var numberCounter = 0;

for (let number = 1; number <= 1000; number++) {
    if (Boolean(number % denominator)) continue;
    numberCounter++;
    console.log(number);
}
console.log(numberCounter + " чисел, кратных " + denominator);

// Используется цикл while

var number1 = 0;
var numberCounter1 = 0;

while (number1 <= 1000) {
    number1++;
    if (Boolean(number1 % denominator)) continue;
    numberCounter1++;
    console.log(number1);   
}
console.log(numberCounter1 + " чисел, кратных " + denominator);