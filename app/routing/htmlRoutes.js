var path = require("path");


module.exports = function (app) {

    //route to take user to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //route to catch all extensions and direct to homepage
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

}