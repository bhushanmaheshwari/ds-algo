import { Node_SL } from "./model";


class SinglyLinkList {
    head: Node_SL;
    tail: Node_SL;
    length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const n = new Node_SL(val);
        if (this.length === 0) {
            this.head = n;
            this.tail = n;
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length += 1;

    }

    pop() {
        if (this.length === 0 || this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
        let n = this.head;
        while (n.next && n.next.next) {
            n = n.next;
        }
        n.next = null;
        this.tail = n;
        this.length--;
    }

    shift() {
        if (this.length === 0) {
            return;
        }

        let n = this.head;
        this.head = n.next;
        this.length--;
    }

    unshift(val) {
        if (this.length === 0) {
            this.push(val);
            return;
        }
        const n = new Node_SL(val);
        n.next = this.head;
        this.head = n;
        this.length++;
    }

    get(index) {
        if (this.length === 0 || index < 0 || index >= this.length) {
            return null;
        }
        let n = this.head;
        let count = 0;
        while (count < index) {
            n = n.next;
            count++;
        }
        return n;

    }

    set(val, index) {
        let n = this.get(index);
        if (n) {
            n.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        if (index == this.length) {
            this.push(val);
            return true;
        }

        let prevNode = this.get(index - 1);

        if (prevNode) {
            const newNode = new Node_SL(val);

            const temp = prevNode.next;
            newNode.next = temp;
            prevNode.next = newNode;

            this.length++;

            return true;
        }
        return false;
    }

    remove(index) {
        if (index === 0) {
            this.shift();
            return true;
        }
        if (index === this.length) {
            this.pop();
            return true;
        }

        let prevNode = this.get(index - 1);

        const temp = prevNode.next;
        prevNode.next = temp.next;
        this.length--;
        return true;

    }

    print() {
        let n = this.head;
        let s = [];
        while (n) {
            s.push(n.val);
            n = n.next;
        }
        console.log(s.join('-->'));
    }


    reverse() {
        console.log('before');
        this.print()

        if (this.length < 2) {
            return this.head;
        }

        let node = this.head;


        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        console.log('after');
        this.print()

        return 'Reversed';
    }
}

var a = new SinglyLinkList();
a.print();
a.push(1);
a.push(4);
a.push(10);
a.push(6);
a.print();
a.pop();
a.print();
a.shift();
a.print();
a.unshift(50);
a.print();
a.insert(12, 0);
a.print();