//sort array

//with method
function sorting(arr){
    return arr.sort((a, b) => a - b);
}
console.log(sorting([2, 5, 7, 1, 9, -7, -99, 56]));

//version without methods
function sorting2(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sorting2([2, 5, 7, 1, 9, -7, -99, 56]));