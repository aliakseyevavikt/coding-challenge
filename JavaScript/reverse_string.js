/* Directions:
Given a string, return a new string with the reversed order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
*/

// version 1.0 with methods

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(reverse('safety'));

//version 2.0 without methods

function reverse2(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse2('safety'));

//version 3.0 without methods

function reverse3(str) {
    let newStr = '';
    for (let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}

console.log(reverse3('safety'));

//version 4.0. with reduce

function reverse4(str) {
    return str.split('').reduce((res, char) => char + res, '');
}

console.log(reverse4('safety'));