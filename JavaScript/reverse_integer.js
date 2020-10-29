/* Directions
Given an integer, return an integer that is the reverse ordering of numbers.

  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9

 */

// version 1
function reverseInt(n) {
    if (n === 0) {
        return 0;
    }
    let str = n + '';
    while (str[str.length - 1] === '0') {
        str = str.slice(0, str.length - 1)
    }
    str = str.split('').reverse('').join('');
    if (str[str.length - 1] === '-') {
        str = str.slice(0, str.length - 1);
        return +str * (-1);
    } else
        return +str;
}

console.log(reverseInt(-50));
console.log(reverseInt(-19));
console.log(reverseInt(51));
console.log(reverseInt(0));

// version 2
function reverseInt1(n) {
    let str = n.toString().split('').reverse().join('');
    if (n < 0) {
        return parseInt(str) * (-1);
    } else {
        return parseInt(str);
    }
}

console.log(reverseInt1(-50));
console.log(reverseInt1(-19));
console.log(reverseInt1(51));
console.log(reverseInt1(0));

// version 3

function reverseInt2(n) {
    let str = n.toString().split('').reverse().join('');
    return parseInt(str) * Math.sign(n);
}

console.log(reverseInt2(-50));
console.log(reverseInt2(-19));
console.log(reverseInt2(51));
console.log(reverseInt2(0));

//version 4 (only positive and 4 digits) + without methods

function reverseInt4(num) {

    let fourth = num % 10;
    num = (num - fourth) / 10;
    let third = num % 10;
    num = (num - third) / 10;
    let second = num % 10;
    let first = (num - second) / 10;

    return fourth * 1000 + third * 100 + second * 10 + first;
}

console.log(reverseInt4(1234));