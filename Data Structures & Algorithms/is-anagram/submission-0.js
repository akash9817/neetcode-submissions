class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let s_map = {}
        let t_map = {}

        for(let i of s){
            s_map[i] = s_map[i] ? s_map[i] + 1 : 1
        }

        for(let i of t){
            t_map[i] = t_map[i] ? t_map[i] + 1 : 1
        }

        for(let i in s_map){
            if(!t_map[i] || t_map[i] !== s_map[i])return false
        }

        return true
    }
}
