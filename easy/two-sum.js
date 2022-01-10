/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let startIndex = 0;
  let nextIndex = startIndex++;

  while (nums[startIndex] + nums[nextIndex] !== target) {
    startIndex += 1;
    nextIndex += 1;
  }

  return [startIndex, nextIndex];
};
