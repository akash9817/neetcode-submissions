class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         let g_map = {}
    for(let s of strs){
        const sorted_string = s.split('').sort().join('')
        if(!g_map[sorted_string]){
            g_map[sorted_string] = []
        }
        g_map[sorted_string].push(s) 
    }

    return Object.values(g_map)
    }
}
