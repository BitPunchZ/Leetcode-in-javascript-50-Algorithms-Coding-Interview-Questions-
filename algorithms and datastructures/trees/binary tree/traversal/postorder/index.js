class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

function postorder(node) {
    if(node !== null) {
        postorder(node.left);
        postorder(node.right);
        console.log(node.data);
    }
}

// Create root
let root = new Node(4);

//          4
//      /       \
//    null      null

root.left = new Node(5);
root.right = new Node(6);

// 5 becomes left child and 6 becomes right child of 4
//                   4
//               /       \
//             5           6
//          /  \         /  \
//       null  null  null  null


root.left.left = new Node(7);

// 7 becomes left child of 5
//                   4
//               /       \
//             5           6
//          /  \         /  \
//         7  null  null  null
//       /  \
//   null  null

postorder(root);  // Prints: 7 5 6 4
