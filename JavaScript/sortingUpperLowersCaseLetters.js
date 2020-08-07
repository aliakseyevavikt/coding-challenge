// move all Upper case letters at the beginning, leave Lowers Case letters at their places

function sortLetters(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            arr.push(str[i]);
            str = str.slice(0, i) + str.slice(i + 1);

        }
    }

    return arr.join('') + str;
}

console.log(sortLetters('JavaScript'));