//remove vowels in the string

//version 1 with RegEx
function removeVowels(str){
    return str.replace(/[aouie]/gi, '');
}
console.log(removeVowels("I like javaScript"));

//version 2 without RegEx

function removeVowels1(str){
    let vowels = "AEIOUaeiou";
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (!vowels.includes(str[i])){
            res += str[i];
        }
    }
    return res;
}
console.log(removeVowels1("I like javaScript"));

//version 3 without new variable (temp)

function removeVowels2(str){
    let vowels = "AEIOUaeiou";
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            str = str.slice(0,i) + str.slice(i+1);
        }
    }
    return str;
}
console.log(removeVowels2("I like javaScript"));

// version 3 without any methods

function removeVowels3(str){
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] !== 'a' && str[i] !== 'o' && str[i] !== 'e' && str[i] !== 'u' && str[i] !== 'i' &&
            str[i] !== 'A' && str[i] !== 'O' && str[i] !== 'E' && str[i] !== 'U' && str[i] !== 'I'){
            res += str[i];
        }
    }
    return res;
}

console.log(removeVowels3("I like javaScript"));