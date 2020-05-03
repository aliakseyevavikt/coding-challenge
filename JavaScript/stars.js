//1 Напишите функцию pattern(n, m) которая
// принимает размеры n, m и возвращает строку,
// содержащую узор: (n звездочек в одном ряду, m рядов)
// **********
// **********
// **********
// **********

// function pattern(n, m) {
//   let str = '';
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       str += '*';
//     }
//     if (i !== m) str += '\n';
//   }
//   return str;
// }

// function pattern(n, m) {
//   let str = '';
//   for (let i = 1; i <= m; i++) {
//     str += '*'.repeat(n);
//     if (i !== m) str += '\n';
//   }
//    return str;
// }

// function pattern(n, m) {
//     let str = (('*'.repeat(n)) + '\n').repeat(m-1) +
//         '*'.repeat(n);
//     return str;
// }
//
// console.log(pattern(10, 4));



/* task2
*
**
***
****
*****
......
 */

// version 1.0 (without method repeat)
console.log("task 2 v. 1.0 *********************");

function stars (num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        if (i !== num) {
            str += '\n';
        }
    }
    return str;
}

console.log(stars(7))


// version 2 (with method repeat)
console.log("task 2 v. 2.0 *********************");

function stars2 (num2) {
    let str2 = '';
    for (let i = 1; i <= num2; i++) {
        str2 += '*'.repeat(i);
        if (i !== num2) {
            str2 += '\n';
        }
    }
    return str2;
}

console.log(stars2(5))



/* task3
......
*****
****
***
**
*
 */
console.log("task 3 v. 1.0 *********************");

function starsReverse(n) {

}