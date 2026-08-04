class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = s.toLowerCase().split('')
        let left = 0
        let right = arr.length - 1
        let alp = /^[a-zA-Z0-9]+$/
        while(left < right){
            if(!alp.test(arr[left])){
                left++
                continue
            }else if(!alp.test(arr[right])){
                right--
                continue
            }
            else if(arr[left] === arr[right]){
                left++
                right--
            }else{
                return false
            }
        }
        return true
    }
}
