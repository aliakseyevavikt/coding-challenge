//  task 1 : reverse a string (all letters)
// "Hello world" => "dlrow olleH"

// version 1.0 with methods

console.log("task 1 v. 1.0. Result: !dlroW olleH");

function reverse (str) {
    return str.split('').reverse().join('');
}
console.log(reverse("Hello World!"));

//version 2.0 without methods

console.log();
console.log("task 1 v. 2.0. Result: !dlroW iH");

function reverse1 (str1) {
    let newStr = '';
    for (let i = str1.length - 1; i >= 0; i-- ) {
        newStr += str1[i];
    }
    return newStr;
}
console.log(reverse1('Hi World!'))

//version 3.0 without methods

console.log();
console.log("task 1 v. 3.0. Result: !enoyreve olleH");

function reverse11 (str2) {
    let newStr2 = '';
    for (let i = 0; i < str2.length; i++) {
        newStr2 = str2[i] + newStr2;
    }
    return newStr2;
}
console.log(reverse11('Hello everyone!'))

// task 2: reverse words in the string

console.log();
console.log("task 2 *");

function reverse2 (str3) {
    return str3.split(' ').reverse().join(' ');
}
console.log(reverse2("Hello my dear World"));

// task 3: reverse only vowels in the string

console.log();
console.log("task 3");

// task 4: reverse array without method reverse

// version 1.0 (push)

console.log();
console.log("task 4 v. 1.0");

// version 2.0 (without any methods)

console.log();
console.log("task 4 v. 2.0");