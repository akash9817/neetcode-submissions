class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length
        while(left <= right){
            const i = Math.floor((left + right)/2)
            if(nums[i] === target){
                return i
            }else if(nums[i] < target){
                left = i + 1
            }else{
                right = i - 1
            }
        }
        return -1
    }
}
