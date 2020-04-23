//factorial of n (n!) = n * ... * 4 * 3 * 2 * 1;
// factorial n! = n * (n -1 ) * (n -2) * ... * 2 * 1;
// n! = n * (n - 1)!


//version 1.0
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
      return fact;
}
console.log(factorial(4))

//version 2.0

function factorialRecursion (n) {
   if (n === 1) {
     return 1
   }
     return   n * factorialRecursion(n - 1);
 }

console.log(factorialRecursion(4))
