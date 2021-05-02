// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
      let currentNode: LinkedList | null = linkedList;
      while (currentNode !== null) {
          let distinct: LinkedList | null = currentNode.next;
          while (distinct !== null && distinct.value === currentNode.value) {
              distinct = distinct.next;
          }
          currentNode.next = distinct;
          currentNode = distinct;
      }
    return linkedList;
  }
  