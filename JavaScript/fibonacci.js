/* Fibonacci
The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.
 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 0, 1, 2, 3, 4, 5, 6, 7,  8,   9
forms the first ten entries of the fibonacci series.
*/

//task 1. Print out n-th elements

console.log("task 1");

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    let res = [0, 1];
    for (let i = 2; i <= n; i++) {
        res.push(res[res.length - 1] + res[res.length - 2]);
    }
    return res;
}

console.log(fibonacci(9)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//task 2. Return Nth element Fibanacci;
// version 1.0

console.log("task 2");

function nthFibonacci(n) {
    let f1 = 0;
    let f2 = 1;
    let f3;
    for (let i = 2; i <= n; i++) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return n === 1 ? f1 : n === 2 ? f2 : f3;
}

console.log(nthFibonacci(9)); // 34

// version 2.0

function nthFibonacci1(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        // version 3
        // res.push(res[i - 1] + res[i - 2]);
    }
    return arr[n];
}

console.log(nthFibonacci1(9)); //34

//version 3

function nthFibonacci2(n) {
    let [x, y] = [0, 1];
    for (let i = 1; i <= n; i++) {
        [x, y] = [y, x + y];
    }
    return x;
}

console.log(nthFibonacci2(9)); //34

// version 4

function nthFibonacci4(n) {
    if (n < 2) {
        return n;
    }
    return nthFibonacci4(n - 1) + nthFibonacci4(n - 2);
}

console.log(nthFibonacci4(9)); //34

// version 5
/* MEMOIZATION

In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs
by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
 */

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


// task 3.

// Given that
//
// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// You will be given a number and your task is to return the nth fibonacci string. For example:
//
// solve(3) = '01001'

console.log("task 3");

function solve(n) {
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
    return n === 0 ? f0 : n === 1 ? f1 : f2;
}

console.log(solve(4));

//version2 recursion
function solve1(n) {
    if (n == 0) return '0';
    else if (n == 1) return '01';
    return solve1(n - 1) + solve1(n - 2);
}

console.log(solve1(4));

