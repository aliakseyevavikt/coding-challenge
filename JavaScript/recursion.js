// count sum from n to 1
// n + (n - 1) + (n - 2) ... 1;

function countSum (n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + countSum(n - 1);
    }
}

console.log(countSum(4))