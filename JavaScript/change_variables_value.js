module.exports = {changeValue};
/*TASK: You have 2 variables: a = 37, b = 64. Return a = 64, b = 37.
You cannot use the third variable
 */

function changeValue(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return (`a = ${a}, b = ${b}`);
}

console.log(changeValue(3, 4));

//version 2

function changeValue1(a, b) {
    [a, b] = [b, a];
    return (`a = ${a}, b = ${b}`);
}

console.log(changeValue1(3, 4));
