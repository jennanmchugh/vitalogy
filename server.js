var express = require('express');
var path = require('path');
var app = express(); 
var router = express.Router(); 
var viewsPath = __dirname + '/views/';
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(viewsPath + "index.html");
});

router.get("/bloodpressure", function(req, res) {
    res.sendFile(viewsPath + "bloodpressure.html");
});

router.get("/cholesterol", function(req, res) {
    res.sendFile(viewsPath + "cholesterol.html");
});

router.get("/triglycerides", function(req, res) {
    res.sendFile(viewsPath + "triglycerides.html");
});

app.use("/", router);

app.use("*", function(req, res) {
    res.sendFile(viewsPath + "404.html");
});

app.listen(process.env.PORT || 3000, function() {
    var port = this.address().port;
    console.log("we are up and running on port " + port + "!");
});