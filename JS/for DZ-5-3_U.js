/*
Вывести первые N чисел, кратные заданному числу
*/
let denominator = +prompt("Введи делитель", 17);
let N = +prompt("Сколько вывести чисел?", 3);
for (let index = 1; index <= N; index++) {
    const multipleNumber = denominator * index;
    console.log (multipleNumber);  
}
