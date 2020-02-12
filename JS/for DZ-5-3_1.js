/* Запросить у пользователя значение,
кратное которому будут выводиться числа - вывести их в консоль
*/
// Показать числа из первой тысячи, кратные введенному числу

var denominator = +prompt("Введи делитель", 2);

// Используется цикл for
for (let number = 1; number <= 1000; number++) {
    if (Boolean(number % denominator)) continue;
    console.log(number);
}

// Используется цикл do/while
var num = 0;
do {
    num++;
    if (Boolean(num % denominator)) continue;
    console.log(num);
} while (num <= 1000);