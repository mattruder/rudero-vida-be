var express = require("express");
var app = express();
var users = require('./data/users.js') 

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

   app.get("/api/people", (req, res, next) => {
    res.json(users);
   });


app.listen(3001, () => {
 console.log("Server running on port 3001");
});