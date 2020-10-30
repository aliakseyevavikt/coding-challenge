/* Directions
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

 */

//version 1
function chunk(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
        let temp = i;
        let tempArr = [];
        while (temp !== i + size && temp < arr.length) {
            tempArr.push(arr[temp]);
            temp++;
        }
        res.push(tempArr);
    }
    return res;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));

//version 2

function chunk1(arr, size) {
    let res = [];
    while (arr.length !== 0) {
        let temp = arr.splice(0, size);
        res.push(temp);
    }
    return res;
}

console.log(chunk1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunk1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunk1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));

//version 3

function chunk3(arr, size) {
    let res = [];
    while (arr.length !== 0) {
        let temp = arr.slice(0, size);
        arr = arr.slice(size);
        res.push(temp);
    }
    return res;
}

console.log(chunk3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunk3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunk3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));

// version 4

function chunk4(arr, size) {
    let res = [];
    let index = 0;
    while (index < arr.length) {
        let temp = arr.slice(index, index + size);
        res.push(temp);
        index += size;
    }
    return res;
}

console.log(chunk4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunk4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunk4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));