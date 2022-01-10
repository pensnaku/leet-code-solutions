from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        current_index = 0;
        next_index = 1;
        nums_length = len(nums)
        
        while nums[current_index] + nums[next_index] != target:
            if next_index == nums_length - 1:
                current_index = current_index + 1
                next_index = current_index + 1
            else:
                next_index = next_index + 1
            
        return [current_index, next_index]