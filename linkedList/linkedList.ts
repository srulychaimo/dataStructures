import { LinkedList as InLinkedList, Node as InNode } from "./interfaces";

// Class of a single Node

// User defined class node
export class Node implements InNode {
  element: number;
  index: number;
  next: InNode | null;
  // constructor
  constructor(element: number, index: number) {
    this.element = element;
    this.index = index;
    this.next = null;
  }
}

// linkedlist class
export class LinkedList implements InLinkedList {
  head: InNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: number) {
    const node = new Node(element, this.size);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
}
