// task: return the first word of the string

// version 1.0 without methods

console.log("v. 1.0. Result: Hello");

function firstWord (str){
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    for (let j = 0; j < i; j++) {
      newStr += str[j];
    }
    return newStr;
    }
 }
}
console.log(firstWord('Hello world'));

// version 2.0 with string methods

console.log("v. 2.0. Result: It");
function firstWord2 (str2){
    return str2.slice(0, str2.indexOf(' '));
}

console.log(firstWord2('It was a good day'));

//version 3.0 with array

console.log("v. 3.0. Result: My");

function firstWord3 (str3){
    return str3.split(" ")[0];
}

console.log(firstWord3('My dear friend'));

