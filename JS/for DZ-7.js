/* угадай число с использованием функций */
let userNumber;
let generated;
let answer;
userNumber = circularRequest();
if (userNumber !== null) {
    console.log("Число пользователя " + userNumber);
    generated = getRandomArbitrary(1, 5);
    console.log("Сгенерированное число " + generated);
    answer = checkNumber(generated, userNumber);
    console.log(answer);
} else {
    console.log("Пользователь не играет");
}

