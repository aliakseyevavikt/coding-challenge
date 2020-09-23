/* TASK: check is this brackets valid or not
 Example: '[]][[[]]'
 hint if anytime ']' more than '[' => it's invalid
*/

//version 1

function isBalanced(s) {
    let count1 = 0, count2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') count1++;
        if (s[i] === ']') count2++;
        if (count2 > count1) return 'invalid';
    }
    return count1 === count2 ? 'valid' : 'invalid';
}

console.log(isBalanced('[][][[]]')); // valid
console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid
console.log(isBalanced('[]][[[]]')); // invalid
console.log(isBalanced('][[[]][][')); // invalid

//version 2

function validParentheses1(parens) {
    let sum = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '()') {
            sum++;
        } else {
            sum--;
        }
        if (sum < 0) return false;
    }
    return sum === 0;
}

//version 3

function validParentheses2(parens) {
    while (parens.includes('()')) {
        parens = parens.replace('()', '');
    }
    return parens.length === 0;
}


// task 2. [[]]{{[]}}[]{}

function validBraces(braces) {
    while (braces.includes('{}') || braces.includes('()') || braces.includes('[]')) {
        braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
    }
    return braces.length === 0;
}