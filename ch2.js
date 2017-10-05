// 2.1
// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
// Hints: #9, #40

//I would iterate through the whole list, keeping track of the values in a hash table. When I find a value that is a duplicate, I would skip over it. O(n) solution.

function noDuplicates(initialLinkedList) {
  valueList = {};
  _noDuplicates = function (linkedList) {
    // keep track of values
    valueList[linkedList.value] = 0;
    // if we are done
    if(linkedList.next === null) {
     return;
    }
    // remove duplicates
    if(valueList[linkedList.next.value]){
      if(!linkedList.next.next){
        linkedList.next = null;
      } else {
      linkedList.next = linkedList.next.next;
      }
    }
    _noDuplicates(linkedListValue.next)
  }
  _noDuplicates(initialLinkedList)
}

// if no buffer is allowed, we're going to have to use a space of O(1), so we hold where we are, and iterate through each following value in the linked list, removing that duplicate, we're looking at an O(n^2) solution

function noBufferNoDupes(initialLinkedList) {
  let currentValue;
  function removeNextNode(linkedList) {
    if(!linkedList.next.next){
      linkedList.next = null;
    } else {
    linkedList.next = linkedList.next.next
    }
  }
  while(initialLinkedList) {
    currentValue = initialLinkedList.value;
    runnerList = initialLinkedList;
    if(currentValue === runnerList.value){
      removeNextNode(currentValue)
    } else {
      if(runnerList.next) {
        runnerList = runnerList.next;
      } else {
        initialLinkedList = initialLinkedList.next;
      }
    }
  }

}


// 2.2
// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
// Hints: #8, #25, #47, #67, # 726


// 2.3
// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f
// Hints: #72


// 2.4
// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x . lf x is contained within the list, the values of x only need
// to be after the elements less than x (see below) . The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 - > 10 -> 2 -> 1 [partition = 5)
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// Hints: #3, #24
