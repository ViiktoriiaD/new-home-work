/*
for(var number = 0, isUserHappy = true; isUserHappy; number++) {
    isUserHappy = confirm("Are you happy that number is " + number + "?");
 }
Переписать данный скрипт с использованием циклов while и do/while
*/

// цикл do/while
var isUserHappy;
var number = 0; 
do {
    isUserHappy = confirm("Are you happy that number is " + number + "?");
    number++;
} while (isUserHappy);

// цикл while 
number = 0;
isUserHappy = true;
while (isUserHappy) {
    isUserHappy = confirm("Are you happy that number is " + number + "?");
    number++;
}


