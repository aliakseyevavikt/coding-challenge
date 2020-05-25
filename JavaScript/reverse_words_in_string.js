// TASK: reverse words in the string

//version 1 with methods
function reverseWords (str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello my dear World"));

//version 2 without method reverse
