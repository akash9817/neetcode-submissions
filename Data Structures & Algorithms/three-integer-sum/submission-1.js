class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       nums.sort((a,b) => a-b)
        let result = []
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > 0)break
            if(i > 0 & nums[i] === nums[i-1]) continue;
            const pairs = this.twoSum(nums, i+1 ,Math.abs(nums[i]))
            for(let p of pairs){
                result.push([nums[i],...p])
            }
        }
        return result
    }

    twoSum(nums,start,target){
         let left = start
        let right = nums.length-1
        let pair_r = []
        while(left < right){
            const sum = nums[left] + nums[right]
            if(sum === target){
                pair_r.push([nums[left], nums[right]])
                    while(left < right && nums[left] === nums[left+1]){
                            left++
                    }
                    while(left < right && nums[right] === nums[right-1]){
                        right--
                    }
                left++
                right--    
            }
            else if(sum < target)left++;
            else right--
        }
        return pair_r 
    }
}
