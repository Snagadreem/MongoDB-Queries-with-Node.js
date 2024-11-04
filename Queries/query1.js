db["tweet"].countDocuments({
    retweeted: false,
    in_reply_to_status_id: null
    })
// mongosh "mongodb://localhost:27017/ieeevisTweets" < queries/query1.js
