var friendsArray = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    //set up variables for finding match
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 100
    };
    
    var userData = req.body;
    var userScores = userData.scores;
    var userName = userData.name;
    var userPhoto = userData.photo;

    var totalDifference = 0;

    for (var i = 0; i < friendsArray.length; i++) {
      console.log(friendsArray[i].name);
      totalDifference = 0;

      for (var j = 0; j < 11; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friendsArray[i].name;
          bestMatch.photo = friendsArray[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friendsArray.push(userData);

    res.json(bestMatch);
  });
}