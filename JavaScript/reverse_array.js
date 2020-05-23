// task: reverse array without method reverse

// version 1.0 (with method)
function reverse(arr) {
    return arr.reverse();
}

console.log(reverse([1, 2, 3, 4, 5]));

// version 2.0 (with temp array)

function reverse1(arr) {
    const arrNew = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrNew.push(arr[i]);
    }
    return arrNew;
}

console.log(reverse1([1, 2, 7, 6, 4, 5]));

// version 2.0 (without temp array)

function reverse2(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 -i] = temp;
    }
    return arr;
}

console.log(reverse2([1, 0, 89, 6, 4, 5]));