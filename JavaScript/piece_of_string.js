// TASK: Return a piece of string (str) from index start (n) to index end (m).

//version 1.0 with methods
console.log("v. 1.0. Result: Five");

function cutString(str, n, m) {
    return str.substring(n, m + 1);
}
console.log(cutString('Five little monkeys jumping on the bed', 5, 8));


//version 2.0 without methods
console.log("v. 2.0. Result: Nine");

function cutString1(str1, n, m){
    let newStr = '';
    for (let i = n; i <= m; i++) {
        newStr += str1[i];
    }
    return newStr;
}
console.log(cutString1('Nine little monkeys jumping on the bed', 5, 8));
