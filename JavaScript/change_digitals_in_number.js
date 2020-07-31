//reverse digits in number (type XXXX )

//with string + array
function reverse(num){
    return +num.toString()
        .split('')
        .reverse()
        .join('');
}

console.log(reverse(1234));

//without string + array

function reverse2(num){

    let fourth = num % 10;
    num = (num - fourth) / 10;
    let third = num % 10;
    num = (num - third) / 10;
    let second = num % 10;
    let first = (num - second) / 10;

    return fourth * 1000 + third * 100 + second * 10 + first;
}
 console.log(reverse2(1234));



