/* Скрипт о запросе на угадывание сгенерированного числа так,
чтобы человек мог отменить игру, либо угадывать, пока число не станет соответствовать

Другими словами, Угадывать число, пока не угадаешь */

var numberUser;
var checkNumber;
var failureCounter;
var text;

var  numberGenerator= Math.floor(Math.random() * 5 + 1);

// На основе оператора do/while
failureCounter = 0;
do {
    numberUser = +prompt("Введи число от 1 до 5");
    
    if (numberUser == 0) {
        console.log("Вы не ввели число!");
    } else {
        checkNumber = (numberUser === numberGenerator);
        text = checkNumber ?  "И у меня " + numberGenerator + " Угадал!" : " Не угадал!";  
        console.log(text);
        failureCounter++;
    }
    
} while (!checkNumber);

console.log ("Количество угадываний " + failureCounter);


// На основе оператора while
failureCounter = 0;
checkNumber = false;
while (!checkNumber) {
    numberUser = +prompt("Введи число от 1 до 5");
    
    if (numberUser == 0) {
        console.log("Вы не ввели число!");
    } else {
        checkNumber = (numberUser === numberGenerator);
        text = checkNumber ?  "И у меня " + numberGenerator + " Угадал!" : " Не угадал!";  
        console.log(text);
        failureCounter++;
            }
}
console.log ("Количество угадываний " + failureCounter);