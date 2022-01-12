/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  //convert to string
  const xAsString = `${x}`;

  let leftIndex = 0;
  let rightIndex = xAsString.length - 1;

  while (leftIndex <= rightIndex) {
    if (xAsString[leftIndex] != xAsString[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};
