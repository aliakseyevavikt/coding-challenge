/*Directions
Write a function that accepts a positive number N.
The function should console log a pyramid shape with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides

  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(4)
   1   '   #   '
   2   '  ###  '
   3   ' ##### '
   4   '#######'

*/

function pyramid(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        let space = n - i;
        str = ' '.repeat(space) + '#'.repeat(i * 2 - 1) + ' '.repeat(space);
        console.log(str);
    }
}

console.log(pyramid(4));

//version 2 without repeat

function pyramid1(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        let space = n - i;
        let stairs = i * 2 - 1;
        for (let j = 1; j <= n * 2 - 1; j++) {
            if (j > space && j <= space + stairs) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

console.log(pyramid1(4));

//version 3 with recursion

function pyramid2(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

console.log(pyramid2(4));
