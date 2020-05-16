//Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
//task 1. return N elements Fibonacci as array

console.log("task 1");

function fibonacci(n){
    if (n === 0) return [];
    if (n === 1) return [0];
    let res = [0, 1];
    for (let i = 2; i < n; i++) {
        res.push(res[res.length-1] + res[res.length -2]);
    }
    return res;
}
console.log(fibonacci(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//task 2. Return Nth element Fibanacci;
// version 1.0

console.log("task 2. V. 1.0");

function nthFibonacci(n) {
    let f1 = 0;
    let f2 = 1;
    let f3;
    for (let i = 3; i <= n; i++) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return n === 1? f1: n === 2? f2: f3;
}
console.log(nthFibonacci(10)); // 34

// version 2.0

console.log("task 2. V. 2.0");

function nthFibonacci1(n1){
    let arr = [0, 1];
    for (let i = 2; i < n1; i++) {
        arr.push(arr[arr.length-1] + arr[arr.length -2]);
    }
    return arr[n1 -1];
}

console.log(nthFibonacci1(10)); //34

//version 3

function fib(n) {
    let [x, y] = [0, 1];
    for (let i = 1; i < n; i++) [x, y] = [y, x + y];
    return x;
}

// task 3.

// Given that
//
// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// You will be given a number and your task is to return the nth fibonacci string. For example:
//
// solve(3) = '01001'

function solve(n){
    let f0 = '0';
    let f1 = '01';
    let f2;
    let i = 2;
    while (i <= n) {
        f2 = f1 + f0;
        f0 = f1;
        f1 = f2;
        i++;
    }
    return n === 0? f0: n=== 1? f1: f2;
}

//version2
function solve1(n){
    if(n==0) return '0';
    else if(n==1) return '01';
    return solve1(n-1)+solve1(n-2);
}

// task 4.