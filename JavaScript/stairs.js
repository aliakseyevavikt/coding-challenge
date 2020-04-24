/* task1
I
 I
  I
   I
    I
       ...
*/

// version 1.0 (without method repeat)

function stairs (numStairs) {


}

console.log(stairs(7))

// version 2.0 (with method repeat)
console.log();

function stairs1 (numStairs1) {


}

console.log(stairs1(7))



/* task2
*
**
***
****
*****
......
 */

// version 1.0 (without method repeat)
console.log();

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
console.log();

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

function starsReverse(n) {

}