class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = Array.from(new Set(nums))
        return arr.length === nums.length ? false : true
    }
}
