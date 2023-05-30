const express = require("express");
const app = express();
const users = require('./data/users.js') 
const cors = require('cors')


app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

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

