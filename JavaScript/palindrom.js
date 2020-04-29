// Is this a palindrom?
// task 1.  same case, without spaces (one word)
// version 1.0. with methods

console.log("task 1 v. 1.0. Result: true, false ");
function palindrom (str) {
    let strPalindrom = str.split('').reverse().join('');
    return str === strPalindrom;
}

console.log(palindrom("madam"));
console.log(palindrom("madama"));

//version 2.0: without methods
console.log();
console.log("task 1 v. 2.0. Result: true, false ");

function palindrom1(str1){
    let strNew = '';
    for (let i = 0; i < str1.length; i++) {
        strNew = str1[i] + strNew;
    }
    return strNew === str1;
}
console.log(palindrom1('madam'));
console.log(palindrom1('madan'));

//task 2: different cases


// task 3: without space
// version 1.0 without methods
console.log();
console.log("task 3 v. 1.0. Result: true, true, false");

function isPalindrome(str3){
    let strNoSpace = '';
    let strReverse = '';
    for (let i = 0; i < str3.length; i++) {
        if (str3[i] !== ' ') {
            strNoSpace += str3[i];
            strReverse = str3[i] + strReverse;
        }
    }
    return strNoSpace === strReverse;
}
console.log(isPalindrome("was it a car or a cat i saw"));
console.log(isPalindrome("pull up if i pull up"));
console.log(isPalindrome("pulll up if i pull up"));


// version 5.0 different cases, spaces