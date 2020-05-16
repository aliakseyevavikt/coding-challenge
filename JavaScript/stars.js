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

// 2Напишите функцию drawTriangle(n) которая
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *
// **
// ***
// ****

function drawTriangle(n) {
 let str = '*';
  for (let i = 2; i <= n; i++) {
    str += '\n' + '*'.repeat(i);
  }
  return str;
}

console.log(drawTriangle(4));

/* task2
*
**
***
****
*****
......
 */

// // version 1.0 (without method repeat)
// console.log("task 2 v. 1.0 *********************");
//
// function stars (num) {
//     let str = '';
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= i; j++) {
//             str += '*';
//         }
//         if (i !== num) {
//             str += '\n';
//         }
//     }
//     return str;
// }
//
// console.log(stars(7))
//
//
// // version 2 (with method repeat)
// console.log("task 2 v. 2.0 *********************");
//
// function stars2 (num2) {
//     let str2 = '';
//     for (let i = 1; i <= num2; i++) {
//         str2 += '*'.repeat(i);
//         if (i !== num2) {
//             str2 += '\n';
//         }
//     }
//     return str2;
// }
//
// console.log(stars2(5))
//
//
//
// /* task3
// ......
// *****
// ****
// ***
// **
// *
//  */
// console.log("task 3 v. 1.0 *********************");
//
// function starsReverse(n) {
//
// }

function drawTriangle(n) {
//   let str = '';
//   for (let i = n; i >= 1; i--) {
//     str += '*'.repeat(i);
//     if (i !== 1) str += '\n';
//   }
//   return str;
// }

    function drawTriangle(n) {
        let str = '';
        for (let i = n; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                str += '*';
            }
            if (i !== 1) str += '\n';
        }
        return str;
    }

    console.log(drawTriangle(4));

 //   Напишите функцию drawTriangle(n) которая
// принимает ширину треугольника (здесь 7) n и возвращает строку,
// содержащую рисунок:
//     *
//    ***
//   *****
//  *******

// function pattern(n){



// }
// console.log(pattern(7));


//5 Напишите функцию, которая принимает количество ступенек n (n = 5)
// и рисует лесенку:
// #
// _#
// __#
// ___#
// ____#

// function pattern(n){



// }
// console.log(pattern(7));

//6 Узор из чисел: (n  чисел в строке, m строк)
// 11111
// 22222
// 33333
// 44444

// function pattern(n, m){



// }
// console.log(pattern(5, 4));


//7 Треугольник из чисел (n - количество строк)

// "1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15"


// function digitTriangle(n){

// }

// console.log(digitTriangle(10));


//8 Walk-down Stairs
// "1 1
// 1 2 2 1
// 1 2 3 3 2 1
// 1 2 3 4 4 3 2 1
// 1 2 3 4 5 5 4 3 2 1
// 1 2 3 4 5 6 6 5 4 3 2 1 "


// function stairs(n){

// }

// console.log(stairs(6));


// TASK 9 Walk-up Stairs
// https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/train/javascript

// "
//                                     1 1
//                                 1 2 2 1
//                             1 2 3 3 2 1
//                         1 2 3 4 4 3 2 1
//                     1 2 3 4 5 5 4 3 2 1
//                 1 2 3 4 5 6 6 5 4 3 2 1
//             1 2 3 4 5 6 7 7 6 5 4 3 2 1
//         1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
//     1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1"


    function stairs(n) {
        let str = '';
        for (let i = 1; i <= n; i++) {
            str += ' '.repeat(n * 4 - 2 - (i * 4 - 2));
            for (let j = 1; j <= i; j++) {
                str = (j < 10)?  str + j + ' ': str + j % 10 + ' ';
            }
            for (let j = i; j >= 1; j--) {
                if (j < 10) str = (j !==1)? str + j + ' ': str + j;
                else {
                    let temp = j % 10;
                    str += temp + ' ';
                }
            }
            if (i != n) str += '\n';
        }
        return str;
    }


 console.log(stairs(10));