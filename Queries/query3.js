db.tweet.aggregate([
    {
      $group: {
        _id: "$user.screen_name", // Group by screen_name
        tweet_count: { $sum: 1 } // Count the number of tweets for each screen_name
      }
    },
    {
      $sort: { tweet_count: -1 } // Sort by tweet_count in descending order
    },
    {
      $limit: 1 // Limit the results to the top user
    },
    {
      $project: {
        screen_name: "$_id", // Rename _id to screen_name
        tweet_count: 1 // Keep tweet_count in the output
      }
    }
  ])