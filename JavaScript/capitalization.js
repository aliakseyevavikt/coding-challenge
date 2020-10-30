/* Directions
Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then
return the capitalized string.

  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'

 */

function capitalize(str) {
    return str.split(' ')
        .map(el => el.split('')
            .map((char, i) => i === 0 ? char.toUpperCase() : char)
            .join(''))
        .join(' ');
}

console.log(capitalize('i love you'));

// version 2

function capitalize1(str) {
    return str.split(' ')
        .map(el => el.slice(0, 1).toUpperCase() + el.slice(1))
        .join(' ');
}

console.log(capitalize1('i love you'));

// version 3

function capitalize3(str) {
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] !== ' ') {
            res += str[i];
        } else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}

console.log(capitalize3('i love you'));