/*
Очень четное число. Число является очень четным, если оно однозначное и четное.
Если число состоит из 2 и более цифр, находим суму его цифр пока сумма не станет однозначным числом.
Если в результате получится четное число, число является очень четным.
 */

//version 1
function veryEven(num) {
    while (num > 9) {
        num = num + '';
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += +num[i];
        }
        num = sum;
    }
    return num % 2 === 0;
}

//version 2

function veryEven(num) {
    if (num <= 9) return num % 2 === 0;
    else {
        num = num + '';
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += +num[i];
        }
        return veryEven(sum);
    }
}