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
    this[val] = tmp.next;
  }
}
