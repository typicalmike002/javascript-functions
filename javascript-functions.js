/**
 * Implementation of a Singly-Linked List
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value);
    var currentNode = this.head;

    // 1st case: empty list:
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2nd case: non-empty list:
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

SinglyList.prototype.getNodeAt = function(position) {
    var currentNode = this.head;
    var length = this._length;
    var count = 1;

    // 1st case: position is invalid:
    if (length === 0 || position < 1 || position > length) {
        throw new Error('A node was not found in this position.');
    }

    // 2nd case: position is valid:
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.removeNodeAt = function(position) {
    var currentNode = this.head;
    var length = this._length;
    var count = 0;
    var beforeNodeToDelete = null;
    var nodeToDelete = null;
    var deletedNode = null;

    // 1st case: position is invalid:
    if (position < 0 || position > length) {
        throw new Error('A node was not found in this position.');
    }

    // 2nd case: position is the first node:
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3rd case: position is not the first node:
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};