// Anagrams are words or phrases you spell by rearranging the letters of another word or phrase.
// Task 1. Is this word/phrases anagram? night = thing

//version 1 "is the word anagram?"

function anagram (str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagram('night', 'thing'));
console.log(anagram('neght', 'thing'));

//  version 2 "is the phrase anagram?"

function anagram1 (str1, str2) {
    str1 = str1.replace(/' '/g, '')
        .split('')
        .sort()
        .join('');
    str2 = str2.replace(/' '/g, '')
        .split('')
        .sort()
        .join('');
    return  str1 === str2;
}

console.log(anagram1('eleven plus two', 'twelve plus one'));
console.log(anagram1('eleven plas two', 'twelve plus one'));

// version 3 "is the phrase with different case anagram?"

function anagram2 (str1, str2) {
    str1 = str1.toLowerCase()
            .replace(/' '/g, '')
            .split('')
            .sort()
            .join('');
    str2 = str2.toLowerCase()
            .replace(/' '/g, '')
            .split('')
            .sort()
            .join('');
    return  str1 === str2;
}

console.log(anagram2('elEven Plus Two', 'twelve pLus one'));
console.log(anagram2('elevEn plas Two', 'twelve pLus one'));


