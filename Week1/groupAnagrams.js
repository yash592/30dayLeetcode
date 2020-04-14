/* Given an array of strings, group anagrams together.
 Example:

 Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 Output:
 [
   ["ate","eat","tea"],
   ["nat","tan"],
   ["bat"]
 ]

 One way to find anagrams is to build a hashmap 
 of the letters and compare the hashmaps of two 
 strings
 We follow a similar idea here where we will build
  a hashmap of the split letters of each element of the array
 and store their anagrams as the value of the keys(split letters)


 for each element of the array:
 split the letters
    if the split letters are already in the array then we  push to the existing array
    else make a new key:value pair with split letters as the keys and their corresponding strings inside an array
 Now simply loop over the object and push the arrays into a new results array and return
 👍👍👍
*/

const groupAnagrams = (arr) => {
  // instantiate an empty object
  let obj = {};

  // loop over each element of the array

  arr.forEach((element) => {
    // split and sort them
    let split = element.split("").sort();
    if (!obj.hasOwnProperty(split)) {
      // if the split key doesn't exist in the hashmap, store it
      // as a key value pair with the string as the value
      obj[split] = [element];
    } else {
      // if the key alredy exists, push the string into
      // the array of the existing key
      obj[split].push(element);
    }
  });

  // make a results array
  let res = [];
  for (const key in obj) {
    // loop and push the arrays in the objects into results
    res.push(obj[key]);
  }
  return res;
};

const arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr1));
