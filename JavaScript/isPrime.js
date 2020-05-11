// isPrime - > Prime number can be divided only on 1 and itself.
// But 1 - is not a Prime
// ! no one integer cannot be divided on integer that more than it's half
// => so we should check integers from 2 to n/2

//TAsk 1: is "num" Prime?

function isPrime(num) {
    if (num === 1) return false;
    let count = 0;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) count++;
    }
    return count === 0;
}
    //another version of isPrime function:
    //         function isPrime(num){
    //             let count = 0;
    //             for (let i = 2; i <= num/2; i++) {
    //                 if (num % i === 0) count++
    //             }
    //             return count === 0 && num !== 1;
    //         }

console.log(isPrime(8));
console.log(isPrime(11));

//TASK 2: Return all primes from n till m as array

//version 1. We will use 2 function: isPrime and second one that creates array

function primeNumbers(n,m){
    let arr = [];
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) arr.push(i);
    }
    return arr;
}

console.log(primeNumbers(2, 50));

//TASK 3. How much primes from n1 till m1?

function countOfPrimeNumbers(n, m){
    let count = 0;
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}

console.log(countOfPrimeNumbers(1, 90));

