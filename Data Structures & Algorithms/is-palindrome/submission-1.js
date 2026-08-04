class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().split('')
        let left = 0
        let right = s.length - 1
        let alp = /^[a-zA-Z0-9]+$/
        while(left < right){
            if(!alp.test(s[left])){
                left++
                continue
            }else if(!alp.test(s[right])){
                right--
                continue
            }
            else if(s[left] === s[right]){
                left++
                right--
            }else{
                return false
            }
        }
        return true
    }
}
