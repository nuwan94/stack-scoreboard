# stackscore

This is a small guide to make a scoreboard with Stackoverflow reputation points.

I used StackExchange API to get data from Stackoverflow and append them to table rows in a table.

## Usage 
1. Add your ids seperated with `;` (semicolon) in `userids`.
```
   var userids = "";
```

2. click this link to find out what are the data you can get from API,

https://api.stackexchange.com/2.2/users/3125964?order=desc&sort=reputation&site=stackoverflow

Example : 
if you need to show the users reputation gain for this wee,
all you have to do is accsess it using,

`data.itemes[x].reputation_change_week`
