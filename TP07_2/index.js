var express = require('express');
var readFile = require('fs').readFile;
var app = express();
app.get('/', function (req, res) {
    readFile('./index.html', 'utf8', function (err, html) {
        if (err)
            res.status(500).send("Error");
        res.send(html);
    });
});
app.listen(3000, function () {
    console.log("Your app is available on  http://localhost:3000"); //set local host
});
