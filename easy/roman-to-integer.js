/**
 * @description returns integer representation of a single roman numeral
 * @param {string} s
 * @return {number}
 */
function getValueFromNumeral(numeral) {
  switch (numeral) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    default:
      return 1000;
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let currentIndex = 0;
  let total = 0;
  while (currentIndex < s.length) {
    let currentNumeral = s[currentIndex];
    if (currentIndex === s.length - 1) {
      return total + getValueFromNumeral(currentNumeral);
    }

    let nextNumeral = s[currentIndex + 1];
    if (
      (currentNumeral === 'I' &&
        (nextNumeral === 'V' || nextNumeral === 'X')) ||
      (currentNumeral === 'X' &&
        (nextNumeral === 'L' || nextNumeral === 'C')) ||
      (currentNumeral === 'C' && (nextNumeral === 'D' || nextNumeral === 'M'))
    ) {
      total +=
        getValueFromNumeral(nextNumeral) - getValueFromNumeral(currentNumeral);
      currentIndex++;
    } else {
      total += getValueFromNumeral(currentNumeral);
    }
    currentIndex++;
  }

  return total;
};
