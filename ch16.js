// 16.24 Pairs with Sum: Design an algorithm to find all pairs of integers within an array which sum to a
// specified value.

// instead of using an object, a set is probably better suited
// doesn't work for a single 5 in 10.

pairsArray = [3, 5, 1, 6, 9, 7, 2, 10, 4];

function pairsOfIntegers(arr, target) {
  pairsHolder = {};
  result = [];
  arr.map((ele) => {
    pairsHolder[ele] = target - ele;
    if(pairsHolder[target-ele]) {
      result.push([pairsHolder[ele], pairsHolder[target-ele]])
    }
  });
  return result;
};

console.log(pairsOfIntegers(pairsArray, 10));
