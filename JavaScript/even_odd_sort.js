// Sort array: odd numbers on their places, even - sort

function oddEvenSort(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    even = even.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            arr[i] = even.shift(0);
        }
    }
    return arr;
}

console.log(oddEvenSort([1, 22, 8, 3, 5, 4, 16, 2]))