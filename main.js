import { LinkedList } from "./linkedList.js";
let list = new LinkedList();
list.append("hi");
list.append("hello");
list.append("hey");
list.append("there");
list.prepend("first");

console.log(list.toString());
