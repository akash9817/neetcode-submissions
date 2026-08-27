class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let group = {}
       for(let s of strs){
            const sorted_string = s.split('').sort().join('')
            if(!group[sorted_string]){
                group[sorted_string] = []
            }
            group[sorted_string].push(s)
       }
       return Object.values(group)
    }
}
