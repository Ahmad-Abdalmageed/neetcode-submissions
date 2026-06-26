class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Complexity O(n2 mlogm) -- Brute force
        // let res = [];
        // let used = new Array(strs.length).fill(false);

        // for (let i = 0; i < strs.length; i++) {
        //     if (used[i]) continue;
        //     let tmp = [strs[i]];
        //     let comp = strs[i].split("").sort().join();
        //     used[i] = true;
        //     for (let j = i + 1; j < strs.length; j++) {
        //         if (used[j]) continue;
        //         if (comp === strs[j].split("").sort().join()) {
        //             tmp.push(strs[j]);
        //             used[j] = true;
        //         }
        //     }
        //     res.push(tmp);
        // }
        // return res;
        // Using hash and sort O(n mlogm)
        // let hash = {};

        // for(let str of strs) {
        //     let sStr = str.split('').sort().join();
        //     if(!hash[sStr]) hash[sStr] = []
        //     hash[sStr].push(str)
        // }

        // return Object.values(hash)

        // Using hash and frequency arr
        let res = {};
        for (let str of strs) {
            let freq = new Array(26).fill(0);
            for (let c of str) {
                freq[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = freq.join(',');
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(str);
        }
        return Object.values(res);
    }
}
