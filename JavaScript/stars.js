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





//

  //  !!! функция принимает нечетное число n (например n = 7)
// и выводит строку рисующую ромб
// (символы "_" изображают пробелы)
//    ___*___
//    __***__
//    _*****_
//    *******
//    _*****_
//    __***__
//    ___*___

// function triangle(n) {
//   let str = '';
//   for (let i = 1; i <= n; i +=2) {
//     let space = (n - i) / 2;
//     str += '_'.repeat(space) + '*'.repeat(i) + '_'.repeat(space) + '\n';
//   }
//   for (let i = n - 2; i >= 1; i -=2) {
//     let space = (n - i) / 2;
//     str += '_'.repeat(space) + '*'.repeat(i) + '_'.repeat(space);
//     if (i !== n) str += '\n';
//   }

//   return str;
// }

//  console.log(triangle(7));