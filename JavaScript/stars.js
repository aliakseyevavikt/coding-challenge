// Directions:

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

// TASK 2. Print picture:
// *
// **
// ***
// ****

// version 1

function drawTriangle(n) {
    let res = '';
    for (let i = 1; i <= n; i++) {
        if (i !== n) {
            res += '*'.repeat(i) + ' '.repeat(n - i) + '\n';
        } else {
            res += '*'.repeat(n);
        }
    }
    return res;
}

console.log("###########");
console.log(drawTriangle(1));
console.log("###########");
console.log(drawTriangle(5));

// version 2

// version 2 (with method repeat)

function drawTriangle1(num) {
    let res = '';
    for (let i = 1; i <= num; i++) {
        res += '*'.repeat(i);
        if (i !== num) {
            res += '\n';
        }
    }
    return res;
}

console.log("###########");
console.log(drawTriangle1(5))

//  version 3 (without method repeat)

function drawTriangle2(num) {
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

console.log("###########");
console.log(drawTriangle2(7))

// TASK 3
//  steps(4) => console.log each string
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 1; i <= n; i++) {
        let res = '#'.repeat(i) + ' '.repeat(n - i);
        console.log(res);
    }
}

console.log("TASk 3 ###########");
console.log(steps(8))


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

// function drawTriangle(n) {
// //   let str = '';
// //   for (let i = n; i >= 1; i--) {
// //     str += '*'.repeat(i);
// //     if (i !== 1) str += '\n';
// //   }
// //   return str;
// // }
//
//     function drawTriangle(n) {
//         let str = '';
//         for (let i = n; i >= 1; i--) {
//             for (let j = 1; j <= i; j++) {
//                 str += '*';
//             }
//             if (i !== 1) str += '\n';
//         }
//         return str;
//     }
//
//     console.log(drawTriangle(4));

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