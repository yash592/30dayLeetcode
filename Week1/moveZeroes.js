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

const optimalMoveZeroes = (arr) => {
  let i = 0;
  let j = 1;

  if (!arr.includes(0)) return arr;

  while (j < arr.length) {
    if (arr[i] === 0 && arr[j] === 0) {
      j++;
    } else if (arr[j] - arr[i] === arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j++;
    } else if (arr[j] - arr[i] !== 0) {
      i++;
      j++;
    }
  }
  return arr;
};

const nums = [0, 1, 0, 3, 12];

const nums1 = [0, 0, 0, 0, 1, 2];

const nums2 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];

console.log(optimalMoveZeroes(nums2));

console.log(moveZeroes(nums2));
