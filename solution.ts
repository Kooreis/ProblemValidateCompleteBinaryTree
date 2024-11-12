Here is a TypeScript solution for the problem:

```typescript
class Node {
    data: number;
    left: Node | null;
    right: Node | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    isComplete(root: Node | null, index: number, nodeCount: number): boolean {
        if (root == null) {
            return true;
        }

        if (index >= nodeCount) {
            return false;
        }

        return (this.isComplete(root.left, 2 * index + 1, nodeCount) &&
            this.isComplete(root.right, 2 * index + 2, nodeCount));
    }

    countNodes(root: Node | null): number {
        if (root == null) {
            return 0;
        }

        return (1 + this.countNodes(root.left) + this.countNodes(root.right));
    }

    isCompleteTree(): boolean {
        let nodeCount = this.countNodes(this.root);
        return this.isComplete(this.root, 0, nodeCount);
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);

console.log(tree.isCompleteTree() ? "The tree is a complete binary tree" : "The tree is not a complete binary tree");
```

This TypeScript solution creates a `Node` class to represent each node in the binary tree and a `BinaryTree` class to represent the binary tree itself. The `BinaryTree` class has a `isCompleteTree` method that checks if the binary tree is complete. It does this by counting the total number of nodes in the tree and then checking if all nodes are at their expected positions in a complete binary tree.