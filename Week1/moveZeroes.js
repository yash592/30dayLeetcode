// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// suboptimal solution

const moveZeroes = (arr) => {
  let res = [];
  let numberOfZeroes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numberOfZeroes++;
    } else {
      res.push(arr[i]);
    }
  }

  for (let j = 0; j < numberOfZeroes; j++) {
    res.push(0);
  }
  return res;
};

// optimal solution

const nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
