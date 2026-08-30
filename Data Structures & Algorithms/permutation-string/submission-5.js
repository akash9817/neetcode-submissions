class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false
        let left = 0
        let s1_freq = {}
        let right = s1.length-1
        for(let s of s1){
            s1_freq[s] = (s1_freq[s] || 0) + 1
        }
        
        while(right - left + 1 <= s1.length && right < s2.length){
            const val = this.isEqual(s1_freq, this.getFreq(s2.slice(left, right + 1)))
            if(val){
                return true
            }
            left++
            right++
        }
     
        return false
        
    }

    getFreq(s1){
       let obj = {}
       for(let s of s1){
            obj[s] = (obj[s] || 0) + 1
       }
       return obj
    }

    isEqual(obj1, obj2){
        if(Object.keys(obj1).length !== Object.keys(obj2).length){
            return false
        }

        for(let k in obj1){
            if(obj1[k] !== obj2[k]) return false
        }
        return true
    }
    
}

