class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keyMap = {};
        const aCode = 'a'.charCodeAt(0);
        for(let str of strs){
            let key = new Array(26).fill(0);
            for(let c of str){
                key[c.charCodeAt(0) - aCode] += 1;
            }
            key = key.join(',');
            if(keyMap[key] !== undefined){
                keyMap[key].push(str);
                continue;
            }
            keyMap[key] = [str];
        }
        return Object.values(keyMap);
    }
}
