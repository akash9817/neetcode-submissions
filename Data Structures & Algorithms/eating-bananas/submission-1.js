class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1 , right = Math.max(...piles)
        let ans = right
        while(left <= right){
            const mid = Math.floor((left + right)/2)
            let hour = 0
            for(let p of piles){
                hour += Math.ceil(p/mid)
            }
            if(hour <= h){
                ans = mid
                right = mid - 1
            }else{
                left = mid + 1
            }
        }

        return ans
    }
}
