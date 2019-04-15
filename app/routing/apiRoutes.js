var app = express();

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });