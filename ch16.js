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


class wordCount {
  constructor(title) {
    'title' : title,
     
  };
  wordCount = () =>
}

// multiple times, we'll use a constructor to create a book object, set the title and add words as properties to the word object inside of book

// 16.3
// Intersection: Given two straight line segments (represented as a start point and an end point),
// compute the point of intersection, if any.
// Hints: #465, #472, #497, #517, #527



// 16.4
// Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe.
// Hints: #710, #732
// 16.5
// Factorial Zeros: Write an algorithm which computes the number of trailing zeros in n factorial.
// Hints: #585, #711, #729, #733, #745
// 16.6
// Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each
// array) with the smallest (non-negative) difference. Return the difference.
// EXAMPLE
// Input: {1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
// Output: 3. That is, the pair (11 , 8).
// Hints: #632, #670, #679
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
