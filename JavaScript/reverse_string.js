// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//

// version 1.0 with methods

function reverse(str) {
    return str.split('').reverse().join('');
}

//version 2.0 without methods

function reverse2(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

//version 3.0 without methods

function reverse3(str) {
    let newStr = '';
    for (let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}

//version 4.0. with reduce

function reverse3(str) {
    return str.split('').reduce((res, char) => char + res, '');
}