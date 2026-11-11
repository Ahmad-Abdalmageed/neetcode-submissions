class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adjList = {}
        let indegree = {}
        let ans = ''

        for(let word of words) {
            for(let c of word) {
                adjList[c] = new Set();
                indegree[c] = 0
            }
        }

        for(let i = 0; i < words.length - 1; i++) {
            let s1 = words[i];
            let s2 = words[i + 1];
            let min = Math.min(s1.length, s2.length);

            if(s1.length > s2.length && s1.slice(0, min) === s2.slice(0, min)) return '';

            for(let j = 0; j < min; j++) {
                if(s1[j] !== s2[j]) {
                    if(!adjList[s1[j]].has(s2[j])) {
                        adjList[s1[j]].add(s2[j]);
                        indegree[s2[j]]++;
                    }
                    break;
                }
            }
        }

        let q = new Queue();

        for(let c in indegree) {
            if(indegree[c] == 0) {q.push(c)};
        }

        while(!q.isEmpty()) {
            let c = q.pop();
            ans += c;

            for(let nei of adjList[c]) {
                indegree[nei]--;
                if(indegree[nei] == 0) q.push(nei)
            }
        }

        if(ans.length !== Object.keys(indegree).length) return ''

        return ans;
        

    }
}
