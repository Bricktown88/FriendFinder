
let friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let user = req.body;
    console.log(user.scores)

    for(let i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
  
      let bestMatchIndex = 0;
      let minimumAcc = 40;
  
      for(let i = 0; i < friends.length; i++) {
        let totalDifference = 0;
        for(let j = 0; j < friends[i].scores.length; j++) {
          let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
          totalDifference += difference;
        }
  
        if(totalDifference < minimumAcc) {
          bestMatchIndex = i;
          minimumAcc = totalDifference;
        }
      }
  
      friends.push(user);
  
      res.json(friends[bestMatchIndex]);
    });

};
