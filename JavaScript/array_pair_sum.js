//Given an array arr and a number x, check for pair in arr with sum as x
//Input: arr = [0, -1, 2, -3, 1]
//         x = -2
// Output: -3, 1

function pairSum(arr, sum){
    for (let i = 0; i < arr.length - 1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                return [arr[i], arr[j]];
            }
        }
    }
    return "No valid pair exists";
}

console.log(pairSum([0, -1, 2, -3, 1], -2));
console.log(pairSum([0, -1, 2, -3, 1], -99));