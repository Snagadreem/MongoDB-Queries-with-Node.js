// First, create the users collection with unique users
db.tweet.aggregate([
    {
      $group: {
        _id: "$user.id_str", // Group by the unique user ID
        name: { $first: "$user.name" }, // Get the user's name
        screen_name: { $first: "$user.screen_name" }, // Get the user's screen name
        location: { $first: "$user.location" }, // Get the user's location
        description: { $first: "$user.description" }, // Get the user's description
        followers_count: { $first: "$user.followers_count" }, // Get followers count
        // Add more user fields as necessary
      }
    },
    {
      $out: "users" // Output the results to a new collection called users
    }
  ])

db.tweet.aggregate([
{
    $replaceRoot: {
    newRoot: {
        $mergeObjects: [
        "$$ROOT", // Include all fields from the original document
        { user_id: "$user.id" } // Add the user_id from the user object
        ]
    }
    }
},
{
    $unset: "user" // Remove the entire user object
},
{
    $out: "Tweets_Only" // Output the results to a new collection called Tweets_Only
}
])