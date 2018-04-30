# stackscore

This is a small guide to make a scoreboard for Stackoverflow. Using Stackexchange API we can get data as a json object.

#### DEMO : https://nuwan94.github.io/stackscore/

## Usage 
1. Add set of stackoverflow IDs seperated with `;` (semicolon).
```
   var userids = "";
```

2. Click this link to find out what are the data firlds you can get from API,

https://api.stackexchange.com/2.2/users/3125964?order=desc&sort=reputation&site=stackoverflow

Example : 
if you need to show the users reputation gain for this week,

`data.itemes[x].reputation_change_week`
