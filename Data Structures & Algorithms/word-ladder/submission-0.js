class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let words = new Set(wordList);
        let q = new Queue();
        q.push([beginWord, 1]);

        while (!q.isEmpty()) {
            let [word, l] = q.pop();
            if(word == endWord) return l;

            for (let c = 0; c < word.length; c++) {
                for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
                    let candidate = word.slice(0, c) + String.fromCharCode(i) + word.slice(c+1);
                    if (words.has(candidate)) {
                        q.push([candidate, l + 1]);
                        words.delete(candidate);
                    }
                }
            }
        }

        return 0;
    }
}
