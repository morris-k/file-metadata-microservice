var express = require("express");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


var app = express();
app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.get("/", function(req, res) {
	res.render("index");
});


app.post("/", upload.single('fileToUpload'), function(req, res) {
	res.json({size: req.file.size});
});

app.listen(8000);
console.log("Listening on port 8000");