// TASK 1. Print picture:
// **********
// **********
// **********
// **********

function pattern(n, m) {
    let str = '';
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            str += '*';
        }
        if (i !== m) str += '\n';
    }
    return str;
}

console.log(pattern(8, 5));

function pattern1(n, m) {
    let str = '';
    for (let i = 1; i <= m; i++) {
        str += '*'.repeat(n);
        if (i !== m) str += '\n';
    }
    return str;
}

console.log("###########");
console.log(pattern1(8, 5));

function pattern2(n, m) {
    return (('*'.repeat(n)) + '\n').repeat(m - 1) +
        '*'.repeat(n);
}

console.log("###########");
console.log(pattern2(8, 5));