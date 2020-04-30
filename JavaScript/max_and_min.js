// find max and min without methods


//Напишите функцию changeMaxAndMin, которая принимает массив arr в качестве аргумента и возвращает массив, в котором максимальный и минимальный элементы поменялись местами. Если в массиве несколько максимальных или несколько минимальных элементов, поменять местами первые из них. Во всех тестах массив содержит минимум два элемента.
//
// Используйте в решении циклы. Не разрешается использование методов Math.min() и Math.max().

function changeMaxAndMin(arr){
    let min = [arr[0], 0], max = [arr[0], 0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min[0] ) {min[0] = arr[i]; min[1] = i;}
        if (arr[i] > max[0]) {max[0] = arr[i]; max[1] = i;}
    }
    arr[min[1]] = max[0];
    arr[max[1]] = min[0];
    return arr;
}

console.log(changeMaxAndMin([3, 4, 8, 1]));
