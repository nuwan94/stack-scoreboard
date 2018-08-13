# Stack Score Board - Scoreboard for the Stackoverflow
![](https://camo.githubusercontent.com/5da8b2c14c5219aa07bcc4c6eb99511f47695405/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6e65757472616c696e6f6a732f6e65757472616c696e6f6a732e737667) 
[![HitCount](http://hits.dwyl.io/nuwan94/https://github.com/Nuwan94/Stack-Score-Board.svg)](http://hits.dwyl.io/nuwan94/https://github.com/Nuwan94/Stack-Score-Board)
<a href="https://twitter.com/intent/tweet?text=Wow:&amp;url=https%3A%2F%2Fgithub.com%2FNuwan94%2FStack-Score-Board" rel="nofollow"> <img src="https://camo.githubusercontent.com/e34624bed1b4a93d716b2df8eaea2181e4271409/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f75726c2f68747470732f6769746875622e636f6d2f6e65757472616c696e6f6a732f6e65757472616c696e6f6a732e7376673f7374796c653d736f6369616c" alt="Twitter" data-canonical-src="https://img.shields.io/twitter/url/https/github.com/neutralinojs/neutralinojs.svg?style=social" style="max-width:100%;"></a>

This is a simple way to create a scoreboard for Stackoverflow. Using Stackexchange API we can get the data as a json object.

#### DEMO : https://nuwan94.github.io/Stack-Score-Board

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
