// Получение случайного целого числа из заданного диапазона
function getRandomArbitrary(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
};

// Ввод пользователем числа или отказ от игры
function circularRequest() {
    let answer = confirm("Будете вводить число?");
    if (answer) {
        num = +prompt("Введите число от 1 до 5");
        return num;
    } else {
        return null;   
    }    
};

// Сравнение чисел
function checkNumber(random, user) {
    let check = (user === random);
    text = check ?  "И у меня " + random + " Угадал!" : " Не угадал!";
    return text;  
};

