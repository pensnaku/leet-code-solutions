class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        
        xAsString = str(x)
        leftIndex = 0
        rightIndex = len(xAsString) - 1
        
        while(leftIndex <= rightIndex):
            if xAsString[leftIndex] != xAsString[rightIndex]:
                return False
            leftIndex += 1
            rightIndex -= 1
            
        return True
