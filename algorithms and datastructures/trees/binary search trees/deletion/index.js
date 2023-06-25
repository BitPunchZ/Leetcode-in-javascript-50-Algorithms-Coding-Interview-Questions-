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

function minValueNode(node) {
    while(node.left !== null) {
        node = node.left;
    }
    return node;
}

function deleteNode(root, key) {
    if(root === null) {
        return root;
    }

    if(key < root.data) {
        root.left = deleteNode(root.left, key);
    } else if(key > root.data) {
        root.right = deleteNode(root.right, key);
    } else {
        if(root.left === null) {
            return root.right;
        } else if(root.right === null) {
            return root.left;
        }

        let temp = minValueNode(root.right);
        root.data = temp.data;
        root.right = deleteNode(root.right, temp.data);
    }

    return root;
}

let tree = new Node(5);
insert(tree, new Node(3));
insert(tree, new Node(2));
insert(tree, new Node(4));
insert(tree, new Node(7));
insert(tree, new Node(6));
insert(tree, new Node(8));

deleteNode(tree, 7);

preorder(tree);
