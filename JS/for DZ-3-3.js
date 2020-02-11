/*
Ввести сумму денег для конвертации.
После чего спросить пользователя в какую валюту будет производиться перевод.
В соответствии с выбором конвертировать значение
*/
var receivedCurrency;
var currencyName;
var inputCurrency = +prompt("Введите сумму для перевода");
if (!(Number.isNaN(inputCurrency))) {
    var typeOfCurrency = prompt("Введите валюту для перевода: гривна доллар евро злотый");
    switch (typeOfCurrency) {
        case "гривна":
            receivedCurrency = inputCurrency;
            currencyName = "UAH";
            break;
        case "доллар":
            receivedCurrency = inputCurrency / 24.85;
            currencyName = "USD";
            break;
        case "евро":
            receivedCurrency = inputCurrency / 27.46;
            currencyName = "EUR";
            break;
        case "злотый":
            receivedCurrency = inputCurrency / 6.42;
            currencyName = "PLN";
            break;
        default:
            currencyName = "Такой валюты нет";
            receivedCurrency = 0;
            break;
    }
    alert(currencyName + " " + receivedCurrency.toFixed(2));
} else {
   alert("Вы неправильно ввели сумму денег");
}
