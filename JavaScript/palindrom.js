/*Directions:
 Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that
 form the same word if it is reversed.
 */

// without spaces (one word)
// version 1.0. with methods

console.log("task 1 v. 1.0. Result: true, false ");

function isPalindrom(str) {
    let rev = str.split('').reverse().join('');
    return str === rev;
}

console.log(isPalindrom("madam"));
console.log(isPalindrom("madama"));

//version 2.0: without methods
console.log();
console.log("task 1 v. 2.0. Result: true, false ");

function isPalindrom1(str) {
    let strNew = '';
    for (let i = 0; i < str.length; i++) {
        strNew = str[i] + strNew;
    }
    return strNew === str;
}

console.log(isPalindrom1('madam'));
console.log(isPalindrom1('madan'));

//task 2: different cases


// task 3: without space
// version 1.0 without methods
console.log();
console.log("task 3 v. 1.0. Result: true, true, false");

function isPalindrome2(str) {
    let strNoSpace = '';
    let strReverse = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            strNoSpace += str[i];
            strReverse = str[i] + strReverse;
        }
    }
    return strNoSpace === strReverse;
}

console.log(isPalindrome2("was it a car or a cat i saw"));
console.log(isPalindrome2("pull up if i pull up"));
console.log(isPalindrome2("pulll up if i pull up"));


// version 5.0 different cases, spaces

function isPalindrome3(str) {
    str = str.toLowerCase().replace(/\s/g, '').split('');
    return str.join('') === str.reverse().join('');
}

console.log(isPalindrome3("pull up if i pull up"));
console.log(isPalindrome3("pulll up if i pull up"));


//version with every method

function isPalindrome4(str) {
    str = str.replace(/[^a-z]/gi, '');
    return str.split('')
        .every((el, i) => el === str[str.length - 1 - i]);
}

console.log('isPalindrome4 => true, false')
console.log(isPalindrome4("pull up if i pull up"));
console.log(isPalindrome4("pulll up if i pull up"));

//находим количество палиндромов в массиве строк