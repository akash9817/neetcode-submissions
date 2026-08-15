class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let o_left = 0
        let o_right = matrix.length - 1
        while(o_left <= o_right){
            let o_center = Math.floor((o_left + o_right)/2)
            let left = 0
            let right = matrix[o_center].length - 1
            let arr = matrix[o_center]
            if(target >= arr[left] &&  target <= arr[right]){
                while(left <= right){
                    let center = Math.floor((left + right)/2)
                    if(target === arr[center]){
                        return true
                    }else if (target > arr[center]){
                        left = center + 1
                    }else{
                        right = center - 1
                    }
                }
                return false
            }else{
                if(target > arr[right]){
                    o_left = o_center + 1 
                }else {
                    o_right = o_center - 1
                }
            }
        }
        return false
    }
}
