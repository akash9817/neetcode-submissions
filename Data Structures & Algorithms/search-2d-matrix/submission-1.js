class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let result = []
        let left = 0
        let right = matrix.length - 1
        while(left <= right){
            const mid = Math.floor((left + right)/2)
            const arr = matrix[mid]
            if(arr[arr.length - 1] < target){
                left = mid + 1
            }else if(arr[arr.length - 1] >=  target && arr[0] <= target){
                let inLeft = 0
                let inRight = arr.length - 1
                while(inLeft <= inRight){
                    const mid = Math.floor((inLeft + inRight)/2)
                    if(arr[mid] === target){
                        return true
                    }
                    else if(arr[mid] < target){
                        inLeft = mid + 1
                    }
                    else {
                        inRight = mid - 1
                    }
                }return false
            }else{
                right = mid - 1
            }
        }
        return false
    }
    
}