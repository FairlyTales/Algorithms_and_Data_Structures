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
}

const list = new LinkedList();

list.append("lol3");
list.append("lol4");
list.append("lol5");
list.append("lol6");
list.prepend("lol2");
list.prepend("lol1");

console.table(list);

console.log("\narray from linked list:");
console.table(list.toArray());

const removedWithShift = list.shift();
const removedWithPop = list.pop();

console.log("\nelement removed with shift:");
console.log(removedWithShift);

console.log("\nelement removed with pop:");
console.log(removedWithPop);
