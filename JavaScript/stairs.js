/* task1
I
 I
  I
   I
    I
       ...
*/

// version 1.0 (without method repeat)
console.log("task 1 v. 1.0 *********************");
function stairs (numStairs) {


}

console.log(stairs(7))

// version 2.0 (with method repeat)

console.log("task 1 v. 2.0 *********************");

function stairs1 (numStairs1) {


}

console.log(stairs1(7))


TASK 9 Walk-up Stairs
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