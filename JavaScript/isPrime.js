// is this number a Prime? 1 - is not a Prime

function isPrime(n){
    if (n === 1) return false;
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {count++;}
    }
    return count === 0;
}
console.log(isPrime(80));
console.log(isPrime(13));
