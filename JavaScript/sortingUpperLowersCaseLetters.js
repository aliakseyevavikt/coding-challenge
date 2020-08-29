// move all Upper case letters at the beginning, leave Lowers Case letters at their places

function sortLetters(str) {
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str1 += str[i];
            str = str.slice(0, i) + str.slice(i + 1);

        }
    }

    return str1 + str;
}

console.log(sortLetters('JavaScript'));