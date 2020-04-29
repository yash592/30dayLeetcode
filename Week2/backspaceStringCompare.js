/*

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.

*/

const backSpaceStringCompare = (x, y) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < x.length; i++) {
    x[i] !== "#" ? arr1.push(x[i]) : arr1.pop();
  }

  for (let i = 0; i < y.length; i++) {
    y[i] !== "#" ? arr2.push(y[i]) : arr2.pop();
  }

  return arr1.toString() === arr2.toString();
};

const backSpaceStringCompareOn = (x, y) => {};

console.log(backSpaceStringCompare("ab#c", "ad#c"));
