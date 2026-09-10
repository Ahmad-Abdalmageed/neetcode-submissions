class Twitter {
    constructor() {
        this.postMap = {};
        this.followMap = {};
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.postMap[userId]) {
            this.postMap[userId] = [];
        }
        this.postMap[userId].push([tweetId, this.time]);
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let posts = [];
        let heap = new MaxPriorityQueue((x) => x[0]);
        if (!this.followMap[userId]) {
            this.followMap[userId] = new Set();
        }
        this.followMap[userId].add(userId);

        for(let followeeId of this.followMap[userId]) {
            if(this.postMap[followeeId]) {
                let posts = this.postMap[followeeId];
                let idx = posts.length - 1;
                let [tweetId, time] = posts[idx];
                heap.enqueue([time, tweetId, followeeId, idx - 1]);
            }
        }

        while(posts.length < 10 && heap.size()) {
            let [time, tweetId, followeeId, idx] = heap.dequeue();
            posts.push(tweetId);
            if(idx >= 0)  {
                let [prevTweet, prevTime] = this.postMap[followeeId][idx];
                heap.enqueue([prevTime, prevTweet, followeeId, idx - 1]);
            }
        }
        return posts;

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap[followerId]) {
            this.followMap[followerId] = new Set();
        }
        this.followMap[followerId].add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap[followerId]) {
            this.followMap[followerId].delete(followeeId);
        }
    }
}
