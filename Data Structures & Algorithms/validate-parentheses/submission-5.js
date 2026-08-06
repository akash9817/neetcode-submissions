class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map= {
            '(':')',
            '{':'}',
            '[':']'
        }
        let lastChar = []
        for(let i = 0; i < s.length; i++){
                if(map[s[i]]){
                    lastChar.push(s[i])
                }else if(map[lastChar[lastChar.length - 1]] === s[i]){
                    lastChar.pop()
                }else{
                    return false
                }
        }
        return lastChar.length === 0
    }
}
