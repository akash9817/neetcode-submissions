class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        let result = []
        for(let i of nums){
            obj[i] = (obj[i] || 0) + 1
        }

        let arr = Object.values(obj).sort((a,b) => b - a).slice(0,k)

        for(let j in obj){
            if(arr.includes(obj[j])){
                result.push(parseInt(j))
            }
        }

        return result 
    }
}
