/**
 * @param {number[]} stones
 * @return {number}
 */
class Heaps {
  constructor(arr) {
    this.heaps = [];
    this.insert(arr);
  }

  insert(val) {
    for (let i = 0; i < val.length; i++) {
      this.heaps.push(val[i]);
      this.bubbleUp(val[i]);
    }
  }

  bubbleUp(i) {
    let index = this.heaps.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.heaps[parentIndex] < this.heaps[index]) {
      this.swap(this.heaps, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      if (index <= 0) break;
    }
    return this;
  }

  swap(arr, a1, a2) {
    [arr[a1], arr[a2]] = [arr[a2], arr[a1]];
  }

  extractMax() {
    let index = this.heaps.length - 1;
    let root = 0;

    this.swap(this.heaps, index, root);
    let max = this.heaps.pop();

    let childtoBeSwapped = 0;
    let childIndex = 0;

    do {
      let parent = this.heaps[root];
      let leftChild = this.heaps[2 * root + 1];
      let rightChild = this.heaps[2 * root + 2];

      if (leftChild && rightChild) {
        childtoBeSwapped = Math.max(leftChild, rightChild);
        childIndex = this.heaps.indexOf(childtoBeSwapped);
      } else if (leftChild) {
        childtoBeSwapped = leftChild;
        let childIndex = this.heaps.indexOf(leftChild);
      } else if (rightChild) {
        childtoBeSwapped = rightChild;
        let childIndex = this.heaps.indexOf(rightChild);
      }

      if (parent < childtoBeSwapped) {
        this.swap(this.heaps, root, childIndex);
        root = childIndex;
      }
    } while (parent < childtoBeSwapped);
    return max;
  }

  length() {
    return this.heaps.length;
  }

  peek(i) {
    return this.heaps[i];
  }
}

const lastStoneWeight = (arr) => {
  const heap = new Heaps(arr);
  console.log(heap);

  let x = 0;
  let y = 0;
  let diff = 0;

  while (heap.length() > 1) {
    x = heap.extractMax();
    y = heap.extractMax();

    if (x === y) continue;
    else {
      diff = x - y;
      heap.insert([diff]);
    }
    if (heap.length() === 2) {
      x = heap.extractMax();
      y = heap.extractMax();

      if (x === y) return heap.peek(0);
    }
  }
  return heap.peek(0);
};
