/* 
Strings Manipulations:
*/
​
console.clear();
​
//Getting an input from user
let myTweet = prompt('Write your tweet');
/*     Task: 
Create a prompt : “Write your tweet” —-> use prompt
Type random text and calculate the number of sent text and the remaining of sent text
Note Max character is 280.

Example:
Sent:10
Remaining is 270
*/
let tweetLen=myTweet.length;
​
let maxLen=280;
​
console.log(`Sent : ${tweetLen}. Remaining : ${maxLen-tweetLen}`)