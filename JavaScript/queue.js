/* task 1
Description:
Create a queue data structure.  The queue should be a class with methods 'add' and 'remove'.
Adding to the queue should store an element until it is removed
--- Examples
    const q = new Queue();
    q.add(1);
    q.remove(); // returns 1;
 */

/*
Task 2.
Directions:
Implement a 'peek' method in this Queue class.
Peek should return the last element (the next one to be returned) from the queue *without* removing it.
 */

/*
Task 3.
Directions:
Implement the 'weave' function.  Weave receives two queues as arguments and combines the
contents of each into a new, third queue.
The third queue should contain the *alterating* content of the two queues.  The function should handle
queues of different lengths without inserting 'undefined' into the new one.
*Do not* access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.
--- Example
   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);
   const queueTwo = new Queue();
   queueTwo.add('Hi');
   queueTwo.add('There');
   const q = weave(queueOne, queueTwo);
   q.remove() // 1
   q.remove() // 'Hi'
   q.remove() // 2
   q.remove() // 'There'
*/

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    remove() {
        return this.data.shift();
    }

// task 2
    peek() {
        let last = this.data.length - 1;
        return this.data[last];
    }
}

//check solution
const q = new Queue();

q.add(1);
q.add(2);
console.log(q);
let last = q.peek();
console.log(last);
q.remove();
console.log(q);

// TASK 3
function weave(sourceOne, sourceTwo) {
    let newQueue = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            newQueue.add(sourceOne.remove());
        }
        if (sourceTwo.peek()) {
            newQueue.add(sourceTwo.remove());
        }
    }
    return newQueue;
}

//check solution
const sourceOne = new Queue();
sourceOne.add(1);
sourceOne.add(2);
sourceOne.add(3);
sourceOne.add(4);
const sourceTwo = new Queue();
sourceTwo.add('one');
sourceTwo.add('two');
sourceTwo.add('three');
sourceTwo.add('four');
console.log(weave(sourceOne, sourceTwo))
