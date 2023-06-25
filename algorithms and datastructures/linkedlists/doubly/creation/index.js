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
}

let arr = [1,2,3,4,5];

let llist = new LinkedList();

llist.createList(arr);

llist.printList();
