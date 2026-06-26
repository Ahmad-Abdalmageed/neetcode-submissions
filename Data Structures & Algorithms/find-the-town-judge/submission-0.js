class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {

            const link = {};
    const trusts = {}
    for(let l of trust) {
        link[l[1]] = 1 + (link[l[1]] || 0);
    }

    for(let l of trust) {
        trusts[l[0]] = l[1]
    }

    for(let i = 1; i <= n; i++) {
        if(link[i] === (n - 1) && !trusts[i]) return i;
    }
    return -1
    }
}
