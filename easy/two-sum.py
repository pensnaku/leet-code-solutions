from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        start_index = 0;
        next_index = 1;
        
        while nums[start_index] + nums[next_index] != target:
            start_index = start_index + 1
            next_index = next_index + 1
            
        return [start_index, next_index]