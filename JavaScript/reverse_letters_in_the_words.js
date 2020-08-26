//You have a string. Reverse letters in the words
// Example: 'I like JavaScript' => "I ekil tpircSavaJ"

//Version1

function reverseWords(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }

    return arr.join(' ');
}

console.log(reverseWords('I like JavaScript'));

// Version 2
function reverseWords1(str) {
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ');
}