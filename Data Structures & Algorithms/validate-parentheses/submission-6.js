class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let obj = {
        ']' : '[',
        '}' : '{',
        ')' : '('
      }
      let arr = []
      for(let str of s){
        if(str === ']'|| str === '}' || str === ')'){
            const ele = arr.pop()
            if(obj[str] !== ele)return false
        }else{
            arr.push(str)
        }
      }
      return arr.length === 0
    }
}
