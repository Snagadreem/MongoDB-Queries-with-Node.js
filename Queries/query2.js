db.tweet.aggregate([
    {
      $group: {
        _id: "$user.screen_name", // Group by screen_name
        total_followers: { $first: "$user.followers_count" } // Get the followers_count for each screen_name
      }
    },
    {
      $sort: { total_followers: -1 } // Sort by total_followers in descending order
    },
    {
      $limit: 10 // Limit the results to the top 10
    },
    {
      $project: {
        screen_name: "$_id", // Rename _id to screen_name
        total_followers: 1 // Keep total_followers in the output
      }
    }
  ])