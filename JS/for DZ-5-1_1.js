/*
for (var i = 1; i < 10; i++) {
   if (!(i % 2)) break;
   console.log(i);
}
Переписать данный скрипт с использованием циклов while и do/while
*/

// цикл while 
var i = 0;
while (i < 10) {
    i++;
    if (!(i % 2)) break;
    console.log(i);  
}

// цикл do/while
var j = 1;
do {
    if (!(j % 2)) break;
    console.log(j);
    j++;  
} while (j < 10);