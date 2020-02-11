/*
Написать опросник для поступления на работу.
К примеру, захардкоженные условия требуют, чтобы человек был не младше 30 лет,
имел опыт в данной области больше 3-х лет и т.п. Выдать результат: подходит человек на должность, или нет.
*/

var VACANCY_POSITION = "специалист";
var VACANCY_EXPERIENCE = 3;
var VACANCY_AGE = 30;
var personalAge = +prompt("Введите количество полных лет");
var personalExperience = +prompt("Введите стаж работы по специальности");
var personalPosition = prompt("Введите последнюю занимаемую должность (одно слово", "специалист");
// console.log(personalAge, personalExperience, personalPosition);

if (Number.isNaN(personalAge) || Number.isNaN(personalExperience) || personalPosition == null || personalAge == 0) {
    alert ("Вы допустили ошибку во вводимых данных");
} else {
    
    if (personalAge > VACANCY_AGE && personalExperience >= VACANCY_EXPERIENCE && personalPosition == VACANCY_POSITION) {
        alert("Вы нам подходите на свободную вакансию");
    } else {
        alert("К сожалению, для Вас вакансии нет");
        
    }
 }

