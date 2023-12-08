/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length,
    start = 0,
    end = n-1;
  
    while (start < end) {
      let sChar = str[start].toLowerCase(),
        eChar = str[end].toLowerCase();
      const sCode = str.toLowerCase().charCodeAt(start),
        eCode = str.toLowerCase().charCodeAt(end);
      if (!(sCode >= 97 && sCode <= 122)) {
        start++;
        continue;
      }
      if (!(eCode >= 97 && eCode <= 122)) {
        end--;
        continue;
      }
      if (sChar !== eChar) return false;
      start++;
      end--;
    }
    return true;
}

module.exports = isPalindrome;
