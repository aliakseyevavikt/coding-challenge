/* Directions
Write a function that returns the number of vowels used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.
--- Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0

 */

// version 1

function vowels(str) {
    const vowels = 'aeoiu';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(vowels('asbjue'));

// version with replace

function vowels1(str) {
    return str.replace(/[^aoieu]/gi, '').length;
}

console.log(vowels1('asbjue'));

// version array + filter
function vowels2(str) {
    const vowels = 'aoeiu';
    return str.split('').filter(el => vowels.includes(el)).length;
}

console.log(vowels2('asbjue'));