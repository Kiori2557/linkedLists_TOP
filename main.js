import { LinkedList } from "./linkedList.js";
let list = new LinkedList();
list.append("hi");
list.append("hello");
list.append("hey");
list.append("there");
list.prepend("first");

console.log(list.contain("hi"));
console.log(list.contain("hello"));
console.log(list.contain("hey"));
console.log(list.contain("there"));
console.log(list.contain("first"));
