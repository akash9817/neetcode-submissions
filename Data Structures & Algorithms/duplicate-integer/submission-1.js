class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let obj = {}
        // for(let n of nums){
        //     obj[n] = (obj[n] || 0) + 1
        // }
        const arr = Array.from(new Set(nums))
        return arr.length === nums.length ? false : true
    }
}
