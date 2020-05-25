// Resolve: 7321 = 7+3+2+1 = 13 = 1+3 = 4 (the answer should be onr digit

// while
function sumOfDidits(num) {
    while (num >= 10) {
        num = num.toString()
            .split('')
            .reduce((acc, cur) => acc + +cur, 0);
    }
    return num;
}

console.log(sumOfDidits(7321));

// recursion
function sumOfDidits2(num) {
    if (num < 10) {
        return num;
    }
    num = num.toString()
        .split('')
        .reduce((acc, cur) => acc + +cur, 0);

    return sumOfDidits2(num);
}

console.log(sumOfDidits2(7321));

