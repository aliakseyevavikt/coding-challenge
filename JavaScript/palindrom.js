// Is this word palindrom
// Example: madam

function palindrom (str) {
    let strPalindrom = str.split('').reverse().join('');
    return str === strPalindrom;
}

console.log(palindrom("madam"));
console.log(palindrom("madama"));