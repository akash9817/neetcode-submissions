class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max_water = 0
        while(left < right){
           const water = Math.abs(left - right) * Math.min(heights[left], heights[right])
           if(heights[left] < heights[right]){
              left++
           }else if (heights[left] > heights[right]){
              right--
           }else{
               left++
               right--
           }
           max_water = Math.max(max_water,water)
        }
        return max_water
    }
}
