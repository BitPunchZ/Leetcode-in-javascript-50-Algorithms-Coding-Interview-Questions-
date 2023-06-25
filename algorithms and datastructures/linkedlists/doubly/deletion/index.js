class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    createList(arr) {
        let start = this.head;
        let n = arr.length;
        let temp = start;
        let i = 0;

        while(i < n) {
            let newNode = new Node(arr[i]);
            if(i === 0) {
                start = newNode;
                newNode.prev = start;
                temp = start;
            } else {
                temp.next = newNode;
                newNode.prev = temp;
                temp = temp.next;
            }
            i += 1;
        }
        this.head = start;
        return start;
    }

    printList() {
        let temp = this.head;
        let linked_list = "";
        while(temp) {
            linked_list += (temp.data + " ");
            temp = temp.next;
        }

        console.log(linked_list);
    }

    countList() {
        let temp = this.head;
        let count = 0;

        while (temp !== null) {
            temp = temp.next;
            count += 1;
        }

        return count;
    }

    deleteAtLocation(index) {
        let temp = this.head;

        let count = this.countList();

        if(count < index) {
            return temp;
        }

        if(index === 1) {
            temp = temp.next;
            this.head = temp;
            return this.head;
        }

        if(count === index) {
            while(temp.next !== null && temp.next.next !== null) {
                temp = temp.next;
            }
            temp.next = null;
            return this.head;
        }

        let i = 1;
        while(i < index - 1) {
            temp = temp.next;
            i += 1;
        }

        let prevNode = temp;
        let nodeAtTarget = temp.next;
        let nextNode = nodeAtTarget.next;

        nextNode.prev = prevNode;
        prevNode.next = nextNode;

        return this.head;
    }
}

let arr = [1, 2, 3, 4, 5];
let llist = new LinkedList();

llist.createList(arr);

llist.deleteAtLocation(2);

llist.printList();
