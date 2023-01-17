import { userInput } from "../userInput/userInput";
import { fillTheList } from "./implementingLinkedList";
import { LinkedList, Node } from "./linkedList";
import { sortTheList } from "./sortList";

const sortedList = () => {
  const list = fillTheList();
  const sorted = sortTheList(list);

  return sorted;
};

const addToSortedList = async (sortedList: LinkedList) => {
  const num = await userInput();
  const start = performance.now();

  let current = sortedList.head;
  let newNode: Node = new Node(num, 0);

  // Edge case: the list is empty
  if (!current) {
    sortedList.head = newNode;
    sortedList.size = 1;
    return;
  }

  // Edge case: the new value is smaller than the first node
  if (current.element > num) {
    newNode.next = current;
    sortedList.head = newNode;

    sortedList.size++;
    updateIndex(current);

    return;
  }

  // Find the correct position to insert the new node
  while (current.next && current.next.element < num) {
    current = current.next;
  }

  // Insert the new node
  newNode.next = current.next;
  current.next = newNode;
  sortedList.size++;

  updateIndex(newNode);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
};

const updateIndex = (node: Node | null) => {
  while (node) {
    node.index++;
    node = node.next;
  }
};

const linkedList = sortedList();

addToSortedList(linkedList);
