
const fs = require("fs");
var WelcomeHTML = fs.readFileSync("../clientSide/welcome.html").toString();
const { json } = require("body-parser");
const express = require("express");
const app = express();
const path = require("path")
let jsonFile = "./users.json";

app.use(express.json())

var userName = "";
var email = "";
var mobile = "";
var address = "";
var allData = "";
let PORT = process.env.PORT || "7007";
app.use(express.urlencoded({ extended: true }));
let readJson = fs.readFileSync(jsonFile, "utf-8");

function createPath(urPath) { 
    return path.join(__dirname, urPath);
}


app.get("/index.html", (req, res) => {
    res.sendFile(createPath("../clientSide/index.html"));
    
},
    app.get("/style.css", (req, res) => {
        res.sendFile(createPath("../clientSide/style.css"));
    }),
app.get("/script.js",(req,res)=>{
    res.sendFile(createPath("../clientSide/script.js"));
})),
app.get("/welcomeStyle.css", (req, res) => {
    res.sendFile(createPath("../clientSide/welcomeStyle.css"));
})

app.get("/serverSide/users.json", (req, res) => {
    res.sendFile(createPath("../serverSide/users.json"));
})
app.post("/welcome.html", (req, res, next) => {

    userName = req.body["name"]

    email = req.body["email"]
    mobile = req.body["mobile"]
    address = req.body["address"]

    WelcomeHTML = WelcomeHTML.replace("{username}", userName);
    WelcomeHTML = WelcomeHTML.replace("{email}", email)
    WelcomeHTML = WelcomeHTML.replace("{mobile}", mobile)
    WelcomeHTML = WelcomeHTML.replace("{address}", address)
    let user = {
        userName,
        email,
        mobile,
        address
    }
    

    let usersArray = [];
    
    if (readJson === "") {
  
        usersArray.push(user);
        fs.appendFileSync(jsonFile, JSON.stringify(usersArray));
  
    } else {
  
        let usersArray = fs.readFileSync(jsonFile, "utf-8");
        usersArray = JSON.parse(usersArray);
  
        usersArray.push(user);
        fs.writeFileSync(jsonFile, JSON.stringify(usersArray))
        next();
    
    }
}, (req, res) => {
    res.send(WelcomeHTML);
});

app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})