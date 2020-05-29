// TASK: reverse vowels in the string
function changeVowels(str) {
    let vowels = 'aoeiuAOEIU';
    let arr = [];
    for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            arr.push(str[i]);
        }
    }
    str = str.split('');
    for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            str[i] = arr.pop();
        }
    }
    return str.join('');
}

console.log(changeVowels("I like JavaScript"));