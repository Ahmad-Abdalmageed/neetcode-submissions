class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const currSum = numbers[left] + numbers[right];
            if (target < currSum) {
                right--;
            } else if (target > currSum) {
                left++;
            } else {
                return [left + 1, right + 1]
            }
        }
        return [];

    }
}
