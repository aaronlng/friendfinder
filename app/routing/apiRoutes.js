var friendsArray = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    //set up variables for finding match
    var newFriend = req.body;
    var newScore = newFriend.scores;
    var total = 0;
    var bestMatch = 100;
    var index = -1;

    for (var i = 0; i < friendsArray.length; i++) {
      total = 0;

      for (var j = 0; j < newScore.length; j++) {
        var diff = Math.abs(newScore[j] - friendsArray[i].scores[j]);
        total += diff;
      }

      if (total < bestMatch) {
        bestMatch = total;
        index = i;
      }
    }
    console.log("Best Match: ", friendsArray[index]);
    friendsArray.push(newFriend);
    res.json(friendsArray[index]);
  })
}