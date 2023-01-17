import { userInput } from "../userInput/userInput";
import { LinkedList } from "./linkedList";
import { sortTheList } from "./sortList";

export const fillTheList = () => {
  const listLength = 50000;
  const linkedList = new LinkedList();
  for (let i = 0; i < listLength; i++) {
    const randomNum = Math.round(Math.random() * listLength);
    linkedList.add(randomNum);
  }
  return linkedList;
};

const searchInList = async (sorted: boolean = false) => {
  const num = await userInput();
  const start = performance.now();
  let linkedList = fillTheList();

  if (sorted) {
    linkedList = sortTheList(linkedList);
  }

  let isFound = false;
  let h = linkedList.head;
  let indexNum;

  while (h !== null) {
    if (num === h.element) {
      isFound = true;
      indexNum = h.index;
    }
    h = h.next;
  }

  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);

  console.log("Is in list?", isFound ? indexNum : false);

  return isFound ? indexNum : false;
};

// searchInList();
