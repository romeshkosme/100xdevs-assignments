/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
  let count = 0;
  for (let char of str) {
    char = char.toLowerCase();
    if (VOWELS.includes(char)) count++;
  }
  return count;
}

module.exports = countVowels;