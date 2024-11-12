```cpp
#include <iostream>
#include <queue>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

Node* newNode(int data) {
    Node* node = new Node();
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

bool isCompleteBT(Node* root) {
    if (root == NULL)
        return true;

    queue<Node*> q;
    q.push(root);

    bool flag = false;

    while (!q.empty()) {
        Node* temp_node = q.front();
        q.pop();

        if (temp_node->left) {
            if (flag == true)
                return false;
            q.push(temp_node->left);
        } else
            flag = true;

        if (temp_node->right) {
            if (flag == true)
                return false;
            q.push(temp_node->right);
        } else
            flag = true;
    }
    return true;
}

int main() {
    Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->right->right = newNode(6);

    if (isCompleteBT(root) == true)
        cout << "The Binary Tree is complete\n";
    else
        cout << "The Binary Tree is not complete\n";
    return 0;
}
```