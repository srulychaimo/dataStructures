import { userInput } from "../userInput/userInput";
import { margeSort } from "./mergeSort";

export const fillTheArr = (): number[] => {
  const arrLength: number = 50000;
  const arr: number[] = Array(arrLength);
  for (let i = 0; i < arr.length; i++) {
    const randomNum = Math.round(Math.random() * arrLength);
    arr[i] = randomNum;
  }
  return arr;
};

const searchInArray = async (sorted: boolean = false): Promise<boolean> => {
  let num = await userInput();

  let arr: number[] = fillTheArr();
  const start = performance.now();
  let isInArr = false;

  if (sorted) {
    arr = margeSort(arr);
    isInArr = arr.find((n) => n === num) ? true : false;
  } else {
    isInArr = arr.find((n) => n === num) ? true : false;
  }

  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);

  console.log("Is In Arr? ", isInArr);

  return isInArr;
};

searchInArray(true);
