// Return a piece of string (str) from index start (n) to index end (m).

//version 1.0 with methods
console.log("task 1 v. 1.0. *********************");

function cutString(str, n, m) {
    return str.substring(n, m + 1);
}
console.log(cutString('Five little monkeys jumping on the bed', 5, 8));

//version 2.0 without methods
console.log("task 1 v. 2.0. *********************");

function cutString1(str1, n, m){
    let newStr = '';
    for (let i = n; i <= m; i++) {
        newStr += str1[i];
    }
    return newStr;
}
console.log(cutString1('Five little monkeys jumping on the bed', 5, 8));

