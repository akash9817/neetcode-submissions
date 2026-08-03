class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq_map = {}
        let result = []
        for(let n of nums){
            freq_map[n] = freq_map[n] ? freq_map[n] + 1 : 1 
        }
        let freq_arr = Object.values(freq_map).sort((a,b) => b-a).slice(0,k)
        for(let f in freq_map){
            if(freq_arr.includes(freq_map[f])){
                result.push(f)
            }
        }
        return result
    }
}
