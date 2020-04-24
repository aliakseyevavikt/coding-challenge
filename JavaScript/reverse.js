//  task 1 : reverse a string (letters)
// "Hello world" => "dlrow olleH"

// version 1.0

function reverse (str) {
    return str.split('').reverse().join('');
}
console.log(reverse("Hello World"));


// task 2: reverse words in the string

function reverse2 (str2) {
    return str2.split(' ').reverse().join(' ');
}
console.log(reverse2("Hello my dear World"));

// task 3: reverse array without method reverse

// version 1.0 (push)


// version 2.0 (without any methods)