////1, 2, 1 => 1
// //9, 5, 9, 5, 1, 1, 1 => 2

function boomerang(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
            count++
        }
    }
    return count;
}

console.log(boomerang([9, 5, 9, 5, 1, 1, 1]));