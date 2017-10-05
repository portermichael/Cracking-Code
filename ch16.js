// 16.1
// Number Swapper: Write a function to swap a number in place (that is, without temporary vari-
// ables).

function numberSwap(first, second) {

  let difference = first - second;
  first = second;
  second = first - difference;
  return [first, second]
};

// 16.2
// Word Frequencies: Design a method to find the frequency of occurrences of any given word in a
// book. What if we were running this algorithm multiple times?
// Hints: #489, #536

// assuming both are strings, change book into an array of strings, fix punctuation edge cases
function wordFreq(word, book) {
  return book.split(' ').search(word);
}

// multiple times, we'll use a constructor to create a book object, set the title and add words as properties to the word object inside of book

class wordCount {
  constructor(title) {
    this.title = title;
     this.words = {};
  };
  wordCount (book) {
    book.split(' ').map((eachWord) => {
      return eachWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').trim();
    }).map((eachWordIntoObject) => {
      if(!this.words[eachWordIntoObject]) {
        this.words[eachWordIntoObject] = 1;
      } else {
        this.words[eachWordIntoObject] = this.words[eachWordIntoObject] + 1;
      }
    })
  }
}



// 16.3
// Intersection: Given two straight line segments (represented as a start point and an end point),
// compute the point of intersection, if any.
// Hints: #465, #472, #497, #517, #527



// 16.4
// Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe.
// Hints: #710, #732

// the game is won when someone has 3 in a row. brute force is to go to each point, check the directions, row, col, diag and if the same shape is in that direction go one farther. If you go one farther return true. We could improve it by using some dynamic programming to keep track of the ones we solved already, so we aren't repeating ourselves. bu

// 16.5
// Factorial Zeros: Write an algorithm which computes the number of trailing zeros in n factorial.
// Hints: #585, #711, #729, #733, #745

//

// 16.6
// Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each
// array) with the smallest (non-negative) difference. Return the difference.
// EXAMPLE
// Input: {1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
// Output: 3. That is, the pair (11 , 8).
// Hints: #632, #670, #679
// questions does it go first then second? are both arrays the same length? are we staying with 2^31 numbers? or are we using 2^32?

//there is an easy brute force method where we take each of the values in the first array and subtract the value in the second array, absolute value it and if it's less than our current difference keep it. return the current difference at the end.O(n*m)

function strawberry() {
  let firstArray = [1, 3, 15, 11, 2]
  let secondArray = [23, 127, 235, 19, 8]
  let firstArrayValue;
  let firstArrayCurrent;
  let secondArrayCurrent;
  let secondArrayValue;
  let difference = 2^31

  for(let firstArrayNum = 0; firstArrayNum < firstArray.length; firstArrayNum++) {
    for(let secondArrayNum = 0; secondArrayNum < secondArray.length; secondArrayNum++) {
        firstArrayCurrent = firstArray[firstArrayNum];
        secondArrayCurrent = secondArray[secondArrayNum];
        newDifference = Math.abs(firstArrayCurrent-secondArrayCurrent)

      if(newDifference < difference)
      {
        firstArrayValue = firstArrayCurrent;
        secondArrayValue = secondArrayCurrent;
        difference = newDifference;
        if(newDifference === 0)
          return [firstArrayValue, secondArrayValue];
      }
    }
  }
  return [firstArrayValue, secondArrayValue];
};

//  we could sort them which costs nlogn, mlogm, {1, 2, 3, 11, 15}, {8, 19, 23, 127, 235}
// then calculate the min, and only move the smaller one, touching each one so O(n + m)

function blackberry() {
  let firstArray = [1, 3, 15, 11, 2]
  let secondArray = [23, 27, 35, 19, 8]
  let firstArrayValue;
  let firstArrayCurrent = 0;
  let secondArrayCurrent = 0;
  let secondArrayValue;
  let difference = Math.pow(2,31);
  let newDifference;

  firstArray = firstArray.sort(function(a, b) {
  return a - b;
});
  secondArray = secondArray.sort(function(a, b) {
  return a - b;
});

  while(difference !== 0){
    newDifference = (firstArray[firstArrayCurrent] - secondArray[secondArrayCurrent]);
    if(Math.abs(newDifference) < Math.abs(difference)) {
      difference = newDifference;
      firstArrayValue = firstArray[firstArrayCurrent];
      secondArrayValue = secondArray[secondArrayCurrent];
    }
    if(firstArray[firstArrayCurrent] < secondArray[secondArrayCurrent]) {
      firstArrayCurrent++;
    } else {
      secondArrayCurrent++;
    }
    if(firstArrayCurrent >= firstArray.length || secondArrayCurrent >= secondArray.length) {
      break;
    }
  }
  return [firstArrayValue, secondArrayValue];
}


// 16.7
// Number Max: Write a method that finds the maximum of two numbers. You should not use if-else
// or any other comparison operator.
// Hints: #473, #513, #707, #728

// 16.24 Pairs with Sum: Design an algorithm to find all pairs of integers within an array which sum to a
// specified value.

// instead of using an object, a set is probably better suited
// doesn't work for a single 5 in 10.

pairsArray = [3, 5, 1, 6, 9, 7, 2, 10, 4];

function pairsOfIntegers(arr, target) {
  pairsHolder = {};
  result = [];
  duplicate = false;
  arr.map((ele) => {
    if(pairsHolder[ele] && pairsHolder[ele] === target-ele)

    pairsHolder[ele] = target - ele;
    if(pairsHolder[target-ele]) {
      result.push([pairsHolder[ele], pairsHolder[target-ele]])
    }
  });
  return result;
};

console.log(pairsOfIntegers(pairsArray, 10));
