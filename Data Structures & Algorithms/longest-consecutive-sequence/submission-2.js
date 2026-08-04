class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const dist_set = new Set(nums)
        let longest = 0
        for(let num of dist_set){
            if(!dist_set.has(num - 1)){
                let n = num
                let temp_long = 1
                while(dist_set.has(n + 1)){
                    n++
                    temp_long++
                }
                longest = Math.max(longest, temp_long)
            }
        }
        return longest
    }
}
