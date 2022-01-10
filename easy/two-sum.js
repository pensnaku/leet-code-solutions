/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let currentIndex = 0;
  let nextIndex = 1;

  while (nums[currentIndex] + nums[nextIndex] !== target) {
    if (nextIndex === nums.length - 1) {
      currentIndex++;
      nextIndex = currentIndex + 1;
    } else {
      nextIndex++;
    }
  }

  return [currentIndex, nextIndex];
};
