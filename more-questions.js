// var _ = require('underscore');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


/*
Question 1:

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4
\ /   / \
 3   5   8
  \ / \   \
   6   7   9

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample output:
Zero parents: 1, 2, 4
One parent: 5, 7, 8, 9

var parentChildPairs = [
   [1, 3], [2, 3], [3, 6], [5, 6],
   [5, 7], [4, 5], [4, 8], [8, 9]
];

zero parents - find all where not listed on right
one known parent - find all where left exists for right once

noParents = {
1 : 0;
}

oneKnownParent = {
right: value;
 3 : 1;
}

 */

let parentChildPair = (arr) => {
  let noParents = {};
  let oneKnownParent = {};
  let noParentsArray = [];
  let oneKnownParentArray = [];
  function _iterateThrough (arr4, hashTable) {
    arr4.map((ele) => {
      if(!hashTable[ele[0]])
        hashTable[ele[0]] = 0
      hashTable[ele[1]] = hashTable[ele[0]] + 1
    });
  }

  function _noParents(arr2) {
    _iterateThrough(arr2, noParents);
    for(let key in noParents) {
     if(noParents[key] === 0)
       noParentsArray.push(key);
    }
  };

  _noParents(arr);
  function _oneKnownParent(arr3) {
    arr3.map((ele) =>
     {
      oneKnownParent[ele[1]] ? oneKnownParent[ele[1]] = (oneKnownParent[ele[1]] + 1) : oneKnownParent[ele[1]] = 1
    });
   console.log(oneKnownParent)
  for(let key in oneKnownParent)
    if(oneKnownParent[key] === 1)
      oneKnownParentArray.push(key)
  };

  _oneKnownParent(arr)
     console.log(noParentsArray, oneKnownParentArray)
}

var parentChildPairs = [
   [1, 3], [2, 3], [3, 6], [5, 6],
   [5, 7], [4, 5], [4, 8], [8, 9]
];

parentChildPair(parentChildPairs);
