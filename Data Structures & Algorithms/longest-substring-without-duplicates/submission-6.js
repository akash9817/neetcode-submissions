class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let set = new Set()
        let maxLength = 0
        for(let i = 0; i < s.length; i++){
            while(set.has(s[right])){
                set.delete(s[left])
                left++
            }
            set.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        }

        return maxLength
    }
}
