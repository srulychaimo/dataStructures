export interface Node {
  element: number;
  index: number;
  next: Node | null;
}

export interface LinkedList {
  head: Node | null;
  size: number;
}
