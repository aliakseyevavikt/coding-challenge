//task 1. Find equal elements and return first of them as [element, element]

console.log('task 1')

function equalElementsInArray(arr){
  if(arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        return [arr[i], arr[j]]
      }
    }
  }
 return "All elements are different"
}
console.log(equalElementsInArray([]));
console.log(equalElementsInArray([1, 5, 2, 8, 3, 14, 7, 5]));

//task 2. Find all pairs of equal elements and return them as [[element, element], ...]
console.log('task 2')

function equalElementsPairs(array) {
  let res = [];
  if(array.length === 0) return [];
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[i] === array[j]){
        res.push([array[i], array[j]]);
        array.splice(i, 1);
        array.splice(j - 1, 1);
        i--;
        break;
      }
    }
  }
return res;
}
console.log(equalElementsPairs([2, 6, 1, 5, 9, 6, 1, 4, 6, 1, 5, 6, 1, 6]));