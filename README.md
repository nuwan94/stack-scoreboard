# stackscore

This is a simple way to create a scoreboard for Stackoverflow. Using Stackexchange API we can get the data as a json object.

#### DEMO : https://nuwan94.github.io/stackscore/

## Usage 
1. Open stackscore.js in a Editor. Add set of stackoverflow user IDs seperated with semicolon `;` (except last id).
```
   var userids = "userid1;userid2;userid3; ..... userid53";
```

2. Run index.html in a browser.

## Customize

Click this link to find out what are the data fields you can get from API,
https://api.stackexchange.com/2.2/users/3125964?order=desc&sort=reputation&site=stackoverflow

If you need to show the users reputation gain for this week, use following json data.

`data.items[x].reputation_change_week`
