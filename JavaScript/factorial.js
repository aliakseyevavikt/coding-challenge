//factorial of n (n!) = 1 * 2 * 3 * 4 * ... * n

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
      return fact;
}
console.log(factorial(4))