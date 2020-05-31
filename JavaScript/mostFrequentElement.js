/*
Напишите функцию mostFrequentElement, которая принимает массив arr в качестве аргумента и возвращает элемент,
 встречающийся наибольшее число раз. Если таких элементов несколько, вернуть все элементы в виде массива.

Примеры:

функция mostFrequentElement([5, 2, 1, 5]) должна возвратить [5] (так как 5 встречается в массиве 2 раза - чаще,
чем все остальные элементы).

функция mostFrequentElement([5, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1]) должна возвратить [1]
(так как 1 встречается в массиве 4 раза - чаще, чем все остальные элементы).
 */

function mostFrequentElement(arr){
    if(arr.length === 0) return [];
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }
    let max = Math.max(...Object.values(obj));
    let res = [];
    for (let key in obj) {
        if (obj[key] === min) res.push(+key);
    }
    return res;
}