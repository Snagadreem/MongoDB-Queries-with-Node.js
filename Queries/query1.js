db["tweet"].countDocuments({
    retweeted: false,
    in_reply_to_status_id: null
    })
