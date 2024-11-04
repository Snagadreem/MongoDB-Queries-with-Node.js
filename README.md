# MongoDB-Queries-with-Node.js

## How to Run it

* Install files from github and run mongoimport -h localhost:27017 -d ieeevisTweets -c tweet --file ieeevis2020Tweets.dump
* run mongosh "mongodb://localhost:27017/ieeevisTweets" < queries/filename.js in terminal, replacing filename with the query file you would like to run 

## Queries

* **Query 1**: How many tweets are not retweets or replies? (hint the field retweeted_status contains an object when the tweet is a retweeet)
	* Run **query1.js**
* **Query 2:** Return the top 10 screen_names by their number of followers.
	* Run **query2.js**
* **Query 3:** Who is the person that got the most tweets?
	* Run **query3.js**
* **Query 4:** Who are the top 10 people that got more retweets in average, after tweeting more than 3 times
	* Run **query4.js**
* **Query 5:** Write the instructions that will separate the Users information into a different collection. Create a user collection that contains all the unique users. Create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id.
	* Run **query5.js** and **undoquery5.js** to undo