class Twitter {
    constructor() {
        this.posts = {};
        this.follows = {};
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    checkUser(userId) {
        if (this.posts[userId] == undefined) {
            this.posts[userId] = new Set();
        }
        if (this.follows[userId] == undefined) {
            this.follows[userId] = new Set();
            this.follows[userId].add(userId);
        }
    }
    postTweet(userId, tweetId) {
        this.checkUser(userId);
        this.posts[userId].add([tweetId, this.time]);
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        this.checkUser(userId);
        let heap = new MaxPriorityQueue((x) => x[1]);
        for(let user of this.follows[userId]) {
            let pool = this.posts[user];
            for(let post of pool) {
                heap.enqueue(post);
            }
        }
        let posts = [];
        while(heap.size() && posts.length < 10) {
            posts.push(heap.dequeue()[0]);
        }
        return posts
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.checkUser(followerId);
        this.checkUser(followeeId);
        this.follows[followerId].add(followeeId);

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.follows[followerId]) return;
        this.follows[followerId].delete(followeeId);

    }
}
