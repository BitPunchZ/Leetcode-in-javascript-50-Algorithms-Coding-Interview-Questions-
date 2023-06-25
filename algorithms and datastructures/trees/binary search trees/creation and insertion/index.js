class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

function insert(root, node) {
    if(root === null) {
        root = node;
    } else if(root.data < node.data) {
        if(root.right === null) {
            root.right = node;
        } else {
            insert(root.right, node);
        }
    } else {
        if(root.left === null) {
            root.left = node;
        } else {
            insert(root.left, node);
        }
    }
}

function preorder(node) {
    if(node !== null) {
        console.log(node.data);
        preorder(node.left);
        preorder(node.right);
    }
}

let tree = new Node(5);
insert(tree, new Node(3));
insert(tree, new Node(2));
insert(tree, new Node(4));
insert(tree, new Node(7));
insert(tree, new Node(6));
insert(tree, new Node(8));

preorder(tree);
