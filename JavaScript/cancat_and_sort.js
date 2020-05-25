/*You have 2 arrays:
arr1 = [1, 3, 5, 7, 9]
arr2 = [2, 4, 6, 8, 10];
TASK1: Create a function that will concat two arrays and sort the result array;
 */

function contatAndSort(arr1, arr2){
    return arr1.concat(arr2).sort((a, b) => a - b);
}
console.log(contatAndSort([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));

//TASK2: Do the same without concat and sort methods

function contatAndSort1(arr1, arr2){
    for (let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }

for (let i = 0; i < arr1.length; i++){
    for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
        let temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
    }
    }
}
    return arr1;
}
console.log(contatAndSort1([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));

//TASK3: Arrays could be different lengths + we cannot use any methods push;

function contatAndSort2(arr1, arr2){
    let start = arr1.length;
    for (let i = start, j = 0; j < arr2.length; i++, j++){
        arr1[i] = arr2[j];
    }

    for (let i = 0; i < arr1.length; i++){
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
    }
    return arr1;
}
console.log(contatAndSort2([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12]));




