import { LinkedList } from "./linkedList";
import { LinkedList as InLinkedList } from "./interfaces";
import { margeSort } from "../arrays/mergeSort";

export const sortTheList = (list: InLinkedList) => {
  const listArr = listToArr(list);
  const mergeArr = margeSort(listArr);

  const newLinkedList = new LinkedList();
  for (let i = 0; i < mergeArr.length; i++) {
    newLinkedList.add(mergeArr[i]);
  }

  return newLinkedList;
};

const listToArr = (list: InLinkedList) => {
  const arr = new Array(list.size);
  let h = list.head;

  for (let i = 0; i < list.size; i++) {
    if (h === null) {
      return arr;
    }

    arr[i] = h.element;
    h = h.next;
  }

  return arr;
};
