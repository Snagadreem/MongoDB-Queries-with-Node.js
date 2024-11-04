db.tweet.aggregate([
    {
      $group: {
        _id: "$user.screen_name", // Group by screen_name
        total_retweets: { $sum: { $cond: [{ $ne: ["$retweeted", true] }, "$retweet_count", 0] } }, // Count retweets
        tweet_count: { $sum: { $cond: [{ $ne: ["$retweeted", true] }, 1, 0] } } // Count total tweets
      }
    },
    {
      $match: {
        tweet_count: { $gt: 3 } // Filter users who have tweeted more than 3 times
      }
    },
    {
      $project: {
        screen_name: "$_id", // Rename _id to screen_name
        average_retweets: { $divide: ["$total_retweets", "$tweet_count"] } // Calculate average retweets
      }
    },
    {
      $sort: { average_retweets: -1 } // Sort by average_retweets in descending order
    },
    {
      $limit: 10 // Limit the results to the top 10
    }
  ])