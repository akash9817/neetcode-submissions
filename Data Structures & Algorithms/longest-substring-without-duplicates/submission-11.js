class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let a = new Set()
       let arr = []
       let largest = 0
       for(let i of s){
        if(!a.has(i)){
            a.add(i)
            arr.push(i)
        }else{
            largest = Math.max(largest, arr.length)
            while(a.has(i)){
                const ele = arr.shift()
                a.delete(ele)
            }
            a.add(i)
            arr.push(i)
        }
       }

       return Math.max(largest, arr.length)
    }
}
