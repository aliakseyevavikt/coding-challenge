/* Directions:
Implement a Queue datastructure using two stacks.
Queue should implement the methods 'add', 'remove', and 'peek'.

    const q = new Queue();
    q.add(1);
    q.add(2);
    q.peek();  // returns 1
    q.remove(); // returns 1
    q.remove(); // returns 2
 */

class Stack {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            const addedElement = this.first.pop();
            this.second.push(addedElement);
        }
        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }

    peek() {
        while (this.first.peek()) {
            const addedElement = this.first.pop();
            this.second.push(addedElement);
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

}

