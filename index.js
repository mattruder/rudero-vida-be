var express = require("express");
var app = express();
var users = require('./data/users.js') 


app.use(cors({
    origin: "http://localhost:4000"
}))

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

   app.get("/api/people", (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
   });


app.listen(4000, () => {
 console.log("Server running on port 4000");
});

