/*
Минимальное натуральное четырехзначное число, состоящее из тех же цифр, что и заданное число
question
Дано натуральное четырехзначное число. Найдите минимальное натуральное четырехзначное число, состоящее из тех же цифр,
 что и заданное. Заметим, что четырехзначные числа не могут начинаться с нуля.

Напишите функцию с именем changeDigitsOrder, которая принимает четырехзначное число num в качестве аргумента
и возвращает минимальное четырехзначное число, состоящее из тех же цифр, что и заданное число.

Пример:

функция changeDigitsOrder(1513) должна возвратить 1135.
 */

function changeDigitsOrder(num){
    num = num.toString().split('');
    let min1 = num[0], ind1 = 0;
    let i = 1;
    while (i < num.length) {
        if (num[i] < min1 && num[i] != 0) {
            min1 = num[i];
            ind1 = i;
        }
        i++;
    }
    num.splice(ind1, 1);
    num = num.map(el => +el)
    let min2 = Math.min(...num);
    num.splice(num.indexOf(min2), 1);
    let min3 = Math.min(...num);
    num.splice(num.indexOf(min3), 1);
    return +('' + min1 + min2 + min3 + num[0]);
}