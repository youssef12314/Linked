
class LinkedList {
	constructor() {
		// test-code: change later
		this.head = null;
    this.tail = null;
	}

	dumpList() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(`
      node: ${currentNode.data}
      -----------
        prev: ${currentNode.prev?.data}
        next: ${currentNode.next?.data}
      `);
      // find next node
      currentNode = currentNode.next;
    }
    
  }

  add(node){
    if(!this.head){
        this.head=node;
        this.tail=node;
    } else{
        node.prev=this.tail;
        this.tail.next=node;
        this.tail=node;
    }
  }
  addFirst(payload){
    const newNode={
        prev: null,
        next: null,
        data: payload
    };

    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
    } else {
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
    }
  }

  addLast(payload){
    const newNode={
        prev: null,
        next: null,
        data:payload
    };
    this.add(newNode);
}

removeLast(){
    if(this.tail){
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
        } else {
           const newTail=this.tail.prev;
           newTail.next=null;
           this.tail=newTail;
        }
    }
}
removeFirst() {
  if (this.head) {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      }
    }
  }

  removeNode(nodeToRemove){
    if(nodeToRemove===this.head){
      this.removeFirst();
    } else if (nodeToRemove===this.tail){
      this.removeLast();
    } else {
      const prevNode=nodeToRemove.prev;
      const nextNode=nodeToRemove.next;
      prevNode.next=nextNode;
      nextNode.prev=prevNode;
    }
  }

  insertBeforeNode(existingNode, payload) {
    const newNode = {
      prev: null,
      next: null,
      data: payload
    };

    if (existingNode === this.head) {
      this.addFirst(payload);
    } else {
      const prevNode = existingNode.prev;
      newNode.prev = prevNode;
      newNode.next = existingNode;
      prevNode.next = newNode;
      existingNode.prev = newNode;
    }
  }

  insertAfterNode(existingNode, payload) {
    const newNode = {
      prev: null,
      next: null,
      data: payload
    };

    if (existingNode === this.tail) {
      this.addLast(payload);
    } else {
      const nextNode = existingNode.next;
      newNode.prev = existingNode;
      newNode.next = nextNode;
      existingNode.next = newNode;
      nextNode.prev = newNode;
    }
  }

  swapNodes(node1, node2) {
    if (node1 === node2) {
      return; 
    }

    const node1Prev = node1.prev;
    const node1Next = node1.next;
    const node2Prev = node2.prev;
    const node2Next = node2.next;

    
    if (node1Prev) {
      node1Prev.next = node2;
    } else {
      this.head = node2;
    }

    if (node1Next) {
      node1Next.prev = node2;
    } else {
      this.tail = node2;
    }

   
    if (node2Prev) {
      node2Prev.next = node1;
    } else {
      this.head = node1;
    }

    if (node2Next) {
      node2Next.prev = node1;
    } else {
      this.tail = node1;
    }

    [node1.prev, node1.next, node2.prev, node2.next] = [node2Prev, node2Next, node1Prev, node1Next];
  }


  nodeAt(index) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }
}



const ll = new LinkedList();
console.log("Initial List:");
ll.dumpList();


ll.addLast("Node 1");
ll.addLast("Node 2");
ll.addLast("Node 3");
ll.addLast("Node 4");
ll.addLast("Node 5");
ll.addLast("Node 6");
ll.addLast("Node 7");
ll.addLast("Node 8");



console.log("\nList after adding nodes:");
ll.dumpList();

ll.addFirst("Node 0");
console.log("\nList after adding a node at the beginning:");
ll.dumpList();

ll.removeLast();
console.log("\nList after removing the last node:");
ll.dumpList();

ll.removeFirst();
console.log("\nList after removing the first node:");
ll.dumpList();

ll.removeNode(ll.head);
console.log("\nList after removing the first node:");
ll.dumpList();

ll.removeNode(ll.tail);
console.log("\nList after removing the last node:");
ll.dumpList();

ll.insertBeforeNode(ll.head.next, "Node X");
console.log("\nList after inserting a node before an existing node:");
ll.dumpList();

ll.insertAfterNode(ll.head.next, "Node XX");
console.log("\nList after inserting a node after an existing node:");
ll.dumpList();

const node2 = ll.head.next; 
const node3 = ll.tail; 

ll.swapNodes(node2, node3);
console.log("\nList after swapping nodes:");
ll.dumpList();

console.log("\nNode at index 2:", ll.nodeAt(2).data);
console.log("Node at index 5:", ll.nodeAt(5).data);

const nodeAtIndex2 = ll.nodeAt(2);
const nodeAtIndex5 = ll.nodeAt(5);
ll.swapNodes(nodeAtIndex2, nodeAtIndex5);

console.log("\nList after swapping nodes at index 2 and 5:");
ll.dumpList();
