/* Directions
Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses
the same characters in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False

 */

// version 1 (words without spaces)

function anagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagram('night', 'thing'));
console.log(anagram('neght', 'thing'));

//  version 2 "is the phrase anagram?"

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
    return str1 === str2;
}

console.log(anagram2('elEven Plus Two', 'twelve pLus one'));
console.log(anagram2('elevEn plas Two', 'twelve pLus one'));

// version 3
function anagram3(str1, str2) {
    function reformString(str) {
        return str.toLowerCase()
            .replace(/' '/g, '')
            .split('')
            .sort()
            .join('');
    }

    return reformString(str1) === reformString(str2);
}

console.log(anagram3('elEven Plus Two', 'twelve pLus one'));
console.log(anagram3('elevEn plas Two', 'twelve pLus one'));

// version 3 with objects

function anagrams4(stringA, stringB) {

    function createObj(str) {
        str = str.replace(/[^a-z]/gi, '').toLowerCase();
        let obj = {};
        for (let i = 0; i < str.length; i++) {
            if (obj.hasOwnProperty(str[i])) {
                obj[str[i]]++;
            } else {
                obj[str[i]] = 1;
            }
        }
        return obj;
    }

    let objA = createObj(stringA);
    let objB = createObj(stringB);

    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }

    for (let key in objA) {
        if (objB[key] !== objA[key]) return false;
    }
    return true;
}

console.log(anagrams4('he    llo', 'oLelh'));
console.log(anagrams4('he    llo', 'oLelhs'));
