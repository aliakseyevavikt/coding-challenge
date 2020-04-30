// is this number a Prime? 1 - is not a Prime
// no one integer cannot be divided on integer that more than it's half
// so we should check integers from 2 to n/2

function isPrime(n){
    if (n === 1) return false;
    let count = 0;
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {count++;}
    }
    return count === 0;
}
console.log(isPrime(80));
console.log(isPrime(89));

//Return all primes from 1 till 100 as array

