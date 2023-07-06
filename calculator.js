const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));           //by using urlencoded we get the form data we have to use every single time whenever we use body parser.

app.get("/", function(req, res){
  //res.sendFile("index.html"); instead of just sending a reletive file path. we can use a constant __dirname as below
  res.sendFile(__dirname + "/index.html"); // __dirname gives the file path of the current file no matter where it is hosted (sombody's pc, in the cloud, in a remote server. anywhere)
});

app.post("/", function(req, res){

  var n1 = Number(req.body.num1);   //num1 and num2 are name attributes to the form input in index.html
  var n2 = Number(req.body.num2);

  var result = n1 - n2;
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
