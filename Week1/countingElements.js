// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.

const countElements = (arr) => {
  let count = 0;
  /*

  instantiate a count variable
  loop through the array
    check if array includes arr[i] + 1, if true then increment count
  return count

  */
  arr.forEach((element) => {
    if (arr.includes(element + 1)) count++;
  });

  return count;
};

console.log(countElements([1, 2, 3])); // 2
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0
