//you have some numbers (we do not know how much), we need to count them

function sum(...args) {
    return args.reduce((acc, el) => acc + el, 0);
}

console.log(sum(1, 2, 3));