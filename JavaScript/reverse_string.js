module.exports = {reverse, reverse1, reverse11};

// TASK: reverse a string (all letters) Example: "Hello world" => "dlrow olleH"

// version 1.0 with methods

function reverse (str) {
    return str.split('').reverse().join('');
}

//version 2.0 without methods

function reverse1 (str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i-- ) {
        newStr += str[i];
    }
    return newStr;
}

//version 3.0 without methods

function reverse11 (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}
//console.log(reverse11('Hello everyone!'))