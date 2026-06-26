class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;

        while (i < j) {
            let current = numbers[i] + numbers[j];
            if (current < target) i++;
            else if (current > target) j--;
            else return [i + 1, j + 1];
        }
        return [];
    }
}
