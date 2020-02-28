/* Разделить задачу с угадыванием числа на функции.
    Первая функция - циклический запуск запроса и проверка на завершенность.
    Вторая функция - запрос и проверка на соответствие со сгенерированным числом */
        /* Угадывание число: Пользователь вводит число,
        пока не угадает сгенерированное компом число, или пока не нажмет Отмена
        */

function toRepeat(a, b) {
  let randomNumber = random(a, b);
      
  while (true) {
    let result = verify(randomNumber);
    if (result) {
      break;
    }
  }
}
       
function verify(randomNumber) {
  let value = prompt("Ваше число");
      
  if (value === null || Number.isNaN(+value)) {
    console.log("Вы не ввели число");
    return true;
  }
      
  if (+value === randomNumber) {
    console.log("Было " + randomNumber + " Угадал!");
    return true;
  }     
  return false;
}

// Сгенерировать случайное число из диапазона (a, b)
function random(a, b) {
  return Math.floor(a + Math.random() * (b - a + 1));
}

let min = 1;
let max = 5;

toRepeat(min, max);
      
      