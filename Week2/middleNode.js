/*

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Note:

The number of nodes in the given list will be between 1 and 100.

*/

function middleNode() {
  let counter = 0;
  let current = this.head;

  //counter will basically be the length of the linked list

  while (current !== null) {
    //keep looping till next property is null
    current = current.next;
    counter += 1;
  }
  let idx = Math.floor(counter / 2);
  let rm = counter % 2;

  let middlenode = this.head;
  let nodeCounter = 0;

  // if there's a remainder then return the value at idx
  if (rm > 0) {
    while (nodeCounter < idx) {
      middlenode = middlenode.next;
      nodeCounter++;
    }
    return middlenode.val;
  }
  // if there's no remainded then return value at idx + 1
  while (nodeCounter < idx) {
    middlenode = middlenode.next;
    nodeCounter++;
  }
  return middlenode.val;
}
