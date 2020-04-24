// Is this word a palindrom?
// version 1.0: same case, without spaces
// Example: madam

function palindrom (str) {
    let strPalindrom = str.split('').reverse().join('');
    return str === strPalindrom;
}

console.log(palindrom("madam im adam"));
console.log(palindrom("madama"));

//version 2.0: without methods

//version 3.0: different cases


// version 4.0 different cases, spaces