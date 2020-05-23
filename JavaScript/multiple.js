/*TASK:
Return array of numbers from start to end, that could be divided on 3 and 7 at the same time
*/
function multiple (start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if(i % 3 === 0 && i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(multiple(3, 100));
