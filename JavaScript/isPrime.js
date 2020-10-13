// isPrime - > Prime number can be divided only on 1 and itself.
// But 1 - is not a Prime
// ! no one integer cannot be divided on integer that more than it's half
// => so we should check integers from 2 to n/2

//TAsk 1: is "num" Prime?

//version 1:
function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
    //another version of isPrime function:
    //         function isPrime(num){
    //             let count = 0;
    //             for (let i = 2; i <= num/2; i++) {
    //                 if (num % i === 0) count++
    //             }
    //             return count === 0 && num !== 1;
    //         }
// version 2: recursion
////???????


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

function countOfPrimeNumbers(n, m) {
    let count = 0;
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}

console.log(countOfPrimeNumbers(1, 90));

// return all prime element until n

function isPrime(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        //  console.log(i);
        console.log(arr[i]);
        let count = 0;
        for (let j = 2; j <= arr[i] / 2; i++) {
            if (arr[i] % j === 0) count++;
        }
        if (count === 0) newArr.push(arr[i]);
    }

    return newArr;
}

console.log(isPrime(10));