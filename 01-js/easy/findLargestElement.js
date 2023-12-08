/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (!numbers.length) return;
   let max = -Infinity;
   for (let num of numbers) {
        max = num > max ? num : max;
   }
   return max;
}

module.exports = findLargestElement;