/* TASK: check is this brackets valid or not
 Example: '[]][[[]]'
 hint if anytime ']' more than '[' => it's invalid
*/

function isBalanced(s) {
  let count1 = 0, count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') count1++;
    if (s[i] === ']') count2++;
    if (count2 > count1) return 'invalid';
  }
  return count1 === count2? 'valid': 'invalid';
}
console.log(isBalanced('[][][[]]')); // valid
console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid
console.log(isBalanced('[]][[[]]')); // invalid
console.log(isBalanced('][[[]][][')); // invalid

// task 2. [[]]{{[]}}[]{}