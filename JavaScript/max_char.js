/* Directions
Given a string, return the character that is most commonly used in the string.

maxChar("abcccccccd") === "c"
maxChar("699987 hfjk 69589") === "1"

!!! Lower and Upper Case does matter !!!
 */

function maxChar(str) {
    let obj = {};
    for (let char of str) {
        // if(obj.hasOwnProperty(char)){
        //     obj[char]++;
        // } else {
        //     obj[char] = 1;
        // }
        obj[char] = obj.hasOwnProperty(char) ? obj[char] + 1 : 1

    }

    let max = 0;
    let maxChar = '';
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxChar = key;
        }
    }
    return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("699987 hfjk 69589"));

