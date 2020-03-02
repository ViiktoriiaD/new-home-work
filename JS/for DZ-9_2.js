/* Нарисовать фигуру
###############
####       ####
#### ##### ####
#### ##### ####
     #####     
###############
используя значения заданного объекта lab_scheme {} и значения массива
[
    ['NO', 'BR', 'LR', 'LB', 'NO'],
    ['LR', 'LT', 'NO', 'TR', 'LR']
]
*/

let lab_scheme = {
    'NO': ['###', '###', '###'],
    'LR': ['###', '   ', '###'],
    'LT': ['# #', '  #', '###'],
    'BR': ['###', '#  ', '# #'],
    'LB': ['###', '  #', '# #'],
    'TR': ['# #', '#  ', '###']
}

function render(array) {
 
// Массив для формирования строк фигуры
    let mas= Array(6).fill('');

    for (let index = 0; index < array.length; index++) {
        const el = array[index];
        

        for (let i = 0; i < el.length; i++) {
            const element = el[i];

            for (let j = 0; j < 3; j++) {

                if (index === 0) {
                    mas[j] += lab_scheme[element][j];  
                } else {
                    mas[j+3] += lab_scheme[element][j];
                }
            }            
        }
    }
    // console.log(mas);
    
// Выделим элементы из массива для "распечатки"
    for (let k = 0; k < mas.length; k++) {
        const element = mas[k];
        console.log(element);
    }
}    

// Вызов функции
render([
    ['NO', 'BR', 'LR', 'LB', 'NO'],
    ['LR', 'LT', 'NO', 'TR', 'LR']
]);
