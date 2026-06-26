class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsTable = {};
        for(const str of strs){
            const key = str.split("").sort().join('');
            anagramsTable[key] = (anagramsTable[key] || []).concat([str]);
        }
        return Object.values(anagramsTable);
    }

}
