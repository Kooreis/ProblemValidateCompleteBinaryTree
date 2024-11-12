Here is a JavaScript solution using a breadth-first search (BFS) approach:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isComplete() {
        if (!this.root) {
            return true;
        }

        let queue = [];
        queue.push(this.root);

        let flag = false;

        while (queue.length > 0) {
            let node = queue.shift();

            if (node.left) {
                if (flag) {
                    return false;
                }
                queue.push(node.left);
            } else {
                flag = true;
            }

            if (node.right) {
                if (flag) {
                    return false;
                }
                queue.push(node.right);
            } else {
                flag = true;
            }
        }

        return true;
    }
}

let bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.root.right.left = new Node(6);

console.log(bt.isComplete() ? "The binary tree is complete" : "The binary tree is not complete");
```

This script creates a binary tree and checks if it is complete. A binary tree is complete if all levels are completely filled except possibly for the last level, which is filled from left to right.