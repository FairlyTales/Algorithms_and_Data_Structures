type ListNode = {
  data: string;
  next: ListNode | null;
};

interface LinkedListInterface {
  head: ListNode | null;
  tail: ListNode | null;

  // add a new element to the start
  append(data: string): void;

  // add a new element to the end
  prepend(data: string): void;

  // remove and return last element
  pop(): ListNode | null;

  // remove and return first element
  shift(): ListNode | null;

  // convert linked list to array
  toArray(): ListNode[];

  // reverse the linked list
  reverseList(): void;
}

class LinkedList implements LinkedListInterface {
  head: ListNode | null = null;
  tail: ListNode | null = null;

  append(elementData: string): void {
    const node: ListNode = {
      data: elementData,
      next: null,
    };

    // if we append to the empty list -> also assign current element to the head
    if (!this.head) {
      this.head = node;
    }

    // add link to new last element in the 'next' field of the element
    // which was the previous last element
    if (this.tail) {
      this.tail.next = node;
    }

    // set new last element
    this.tail = node;
  }

  prepend(elementData: string): void {
    const node: ListNode = {
      data: elementData,
      next: this.head,
    };

    // if we append to the empty list -> also assign current element to the tail
    if (!this.head) {
      this.tail = node;
    }

    this.head = node;
  }

  pop(): ListNode | null {
    const removedElement = this.tail;

    if (!removedElement) {
      return null;
    }

    let currentElement = this.head;

    // go from first to last - 1 element using cycle
    while (currentElement) {
      if (currentElement.next === removedElement) {
        currentElement.next = null;
        this.tail = currentElement;
      }

      currentElement = currentElement.next;
    }

    return removedElement;
  }

  shift(): ListNode | null {
    const removedElement = this.head;

    if (!removedElement) {
      return null;
    }

    if (this.head) {
      this.head = this.head.next;
    }

    return removedElement;
  }

  toArray(): ListNode[] {
    const arr: ListNode[] = [];
    let currentElement = this.head;

    while (currentElement) {
      arr.push(currentElement);
      currentElement = currentElement.next;
    }

    return arr;
  }

  reverseList(): void {
    if (this.head) {
      const previousHead = this.head;
      const previousTail = this.tail;

      let currentNode = this.head;
      let previousNode = null;

      // this pointer is used to move through the list
      let nextNode = currentNode.next;

      while (nextNode) {
        // update the pointer to the next node (to move through the list)
        nextNode = currentNode.next;

        // update the pointer to the next node stored in the current node
        currentNode.next = previousNode;

        // update the stored links to the previous and the current nodes
        // to continue moving through the list
        if (nextNode) {
          previousNode = currentNode;
          currentNode = nextNode;
        }

        // if we are at the end of the list (nextNode === null) we swap
        // the head and the tail pointers of the list object
        this.head = previousTail;
        this.tail = previousHead;
      }
    } else {
      throw new Error('No elements in the list');
    }
  }
}

const list = new LinkedList();

// add node to the list
list.append('3');
list.append('4');
list.append('5');
list.append('6');
list.prepend('2');
list.prepend('1');

console.log('Default list:');
console.table(list);

// reverse the array order
console.log('\nList before reverse (array view):');
console.table(list.toArray());

list.reverseList();

console.log('\nList after reverse (array view):');
console.table(list.toArray());

// pop and shift methods
const removedWithShift = list.shift();
const removedWithPop = list.pop();

console.log('\nElement removed with shift:');
console.log(removedWithShift);

console.log('\nElement removed with pop:');
console.log(removedWithPop);

console.log('\nList after removing the first and the last nodes:');
console.table(list.toArray());
