/* Создать массив из заданного количества слов,
сгенерированной длины,
из сгенерированных букв английского алфавита

Подсчитать количество слов одинаковой длины
*/
let alfabet = "abcdefghijklmnopqrstuvwxyz";
let minSymbol = +prompt("Введи минимальное количество символов", 2);
let maxSymbol = +prompt("Введи максимальное количество символов", 6);
let wordCount = +prompt("Введи количество слов", 10);

let myTextArr = [];
let keyObject = [];

let arrayOfLengths = Array(maxSymbol-minSymbol + 1).fill(0);

for (let j = 1; j <= wordCount; j++) {
    let wordLength= Math.floor(minSymbol + Math.random() * (maxSymbol - minSymbol + 1));

    arrayOfLengths[wordLength - minSymbol]++;

    // console.log("количество символов в слове " + wordLength);
    let word = "";
    let i = 0;  
   
    while (i <= wordLength-1) {
        let generatorSymbol = Math.floor(Math.random() * 26);
        // console.log("номер буквы в алфавите " + generatorSymbol);
        word += alfabet[generatorSymbol];
        i++;
    }
   
    myTextArr.push(word);
}
console.log("Массив из " + wordCount + " слов " + myTextArr);
// console.log("Массив длин " + arrayOfLengths);

for (let index = 0; index < arrayOfLengths.length; index++) {
    let answer = arrayOfLengths[index] + " слова длиной " + (minSymbol + index) + " символов";
    keyObject[index] = minSymbol + index;
    console.log(answer);   
}

//Создание объекта. Подготовительная работа

// Сортируем массив слов по возрастанию количества букв в слове
for (let i = 0; i < wordCount; i++) {
    for (let j = 0; j < wordCount - 1 - i; j++) {
         if (myTextArr[j+1].length < myTextArr[j].length) {
            let t = myTextArr[j+1]; myTextArr[j+1] = myTextArr[j]; myTextArr[j] = t;
        }
    }
}
// Имеем три массива соответствующих значений
console.log("Сортированный массив " + myTextArr);
console.log("Количество слов соответственно длине " + arrayOfLengths);
console.log("Ключи для объекта соответственно " + keyObject);


/* Формируем объект.
Сгруппировать слова в объект по количеству символов в слове
*/
let  obj = {};

let j = 0;
while (j < arrayOfLengths.length) {
    
    let arrIntermediate = [];
    for (let index = 0; index < arrayOfLengths[j]; index++) {
       
        arrIntermediate[index] = myTextArr.shift(arrayOfLengths[index]);
        
	    // console.log("Massiv arr " + myTextArr);  
    }
    obj[keyObject[j]] = arrIntermediate;
    j++;
}
console.log(obj);