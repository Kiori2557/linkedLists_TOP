import { Node } from "./node.js";
export class LinkedList {
  constructor() {
    this.head = new Node();
  }
  append(val) {
    if (this.head.data == null) {
      this.head.data = val;
      return;
    }
    let tmp = this.head;
    while (tmp.next != null) tmp = tmp.next;
    tmp.next = new Node(val);
  }
  prepend(val) {
    if (this.head.data == null) {
      this.head.data = val;
      return;
    }
    let tmp = this.head;
    this.head = new Node(val, tmp);
  }
  size(tmp = this.head) {
    if (this.head == null) {
      return 0;
    }
    if (tmp.next == null) return 1;
    else if (tmp.next != null) {
      tmp = tmp.next;
      return 1 + this.size(tmp);
    }
  }
  head() {
    if (this.head.data == null) {
      return null;
    }
    return this.head();
  }
  tail() {
    if (this.head.data == null) {
      return null;
    }
    let tmp = this.head;
    while (tmp.next != null) tmp = tmp.next;
    return tmp;
  }
  at(index) {
    let pointer = 0;
    let tmp = this.head;
    while (pointer < this.size() && pointer <= index) {
      if (index == pointer) {
        return tmp;
      } else {
        tmp = tmp.next;
        pointer++;
      }
    }
    return tmp;
  }
  pop() {
    if (this.head == null) {
      return;
    }
    let tmp = this.head;

    if (this.size() > 1) {
      while (tmp.next.next != null) {
        tmp = tmp.next;
      }
      tmp.next = null;
    } else {
      this.head = null;
    }
  }
  contain(val) {
    if (this.head == null) {
      return false;
    }
    let tmp = this.head;
    while (tmp.data != val && tmp.next != null) {
      tmp = tmp.next;
    }
    if (tmp.next == null && tmp.data != val) {
      return false;
    } else {
      return true;
    }
  }
  find(val) {
    let index = 0;
    if (this.head == null) {
      return null;
    }
    let tmp = this.head;
    while (tmp.data != val && tmp.next != null) {
      tmp = tmp.next;
      index++;
    }
    if (tmp.next == null && tmp.data != val) {
      return null;
    } else {
      return index;
    }
  }
  toString() {
    let msg = "";
    if (this.head == null) {
      return null;
    }
    let tmp = this.head;
    while (tmp.next != null) {
      msg += `(${tmp.data})->`;
      tmp = tmp.next;
    }
    msg += `(${null})`;
    return msg;
  }
  insertAt(index, val) {
    if (index < 0 || index > this.size()) {
      return;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;
    if (index == 0) {
      this.head = new Node(val, this.head);
    } else {
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
        previousNode = previousNode.next;
      }
      let insertNode = new Node(val, currentNode);
      previousNode.next = insertNode;
    }
  }
  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      return;
    }
    let previousNode = this.head;
    let currentNode = previousNode.next;
    if (index == 0) {
      this.head = this.head.next;
    } else {
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
        previousNode = previousNode.next;
      }
      previousNode.next = currentNode.next;
    }
  }
}
