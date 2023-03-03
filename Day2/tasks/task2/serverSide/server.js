// import fetch from 'node-fetch';
const http = require("http");
const fs = require("fs");
const { json } = require("node:stream/consumers");



let MainFileHTML = fs.readFileSync("../clientSide/index.html").toString();
let WelcomeHTML = fs.readFileSync("../clientSide/welcome.html").toString();
let StyleCSS = fs.readFileSync("../clientSide/style.css").toString();
let ScriptFile = fs.readFileSync("../clientSide/script.js").toString();
let StyleWelcomeCss = fs.readFileSync("../clientSide/welcomeStyle.css").toString();
let usersFile = fs.readFileSync("../serverSide/users.json").toString();
var userName = "";
var email = "";
var mobile = "";
var address = "";
var allData = "";
let obj = []

var obj2 = fs.readFileSync("users.json", "utf-8");
obj = JSON.parse(obj2);

http.createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
        switch (req.url) {

            case "/index.html":
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.write(MainFileHTML);
                break;
            case "/welcome.html":
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.write(WelcomeHTML);
                break;
            case "/style.css":
                res.writeHead(200, "Ok", { "content-type": "text/css" })
                res.write(StyleCSS)
                break;
            case "/welcomeStyle.css":
                res.writeHead(200, "Ok", { "content-type": "text/css" })
                res.write(StyleWelcomeCss)
                break;
            case "/script.js":
                res.writeHead(300, "OK", { "content-type": "text/javascript" })
                res.write(ScriptFile)
                break;
            case "/serverSide/users.json":
                console.log(req.url);
                res.writeHead(300, "OK", { "content-type": "application/json" })
                res.write(usersFile)
                break;
            default:
                res.write("<h1>No Page Found</h1>")
                break;
        }
        console.log(req.url);
        res.end();
    }
    //#endregion
    //#region POST
    else if (req.method == "POST") {//url
        req.on("data", (data) => {


            let allData = decodeURIComponent(data.toString()).replace(/\%/g, "@").replace(/\+/g, "\ ").split("&");

            userName = allData[0].split("=")[1];
            email = allData[1].split("=")[1];

            //email = email;
            mobile = allData[2].split("=")[1];
            address = allData[3].split("=")[1];
            //address = address

            console.log(userName, email, mobile, address);
            WelcomeHTML = WelcomeHTML.replace("{Name}", userName)
            WelcomeHTML = WelcomeHTML.replace("{mobile}", mobile)
            WelcomeHTML = WelcomeHTML.replace("{email}", email)
            WelcomeHTML = WelcomeHTML.replace("{address}", address)

            var dataTofile =
            {

                "name": `${userName}`,
                "mobile": `${mobile}`,
                "email": `${email}`,
                "address": `${address}`


            };

            obj.push(dataTofile);
            fs.writeFileSync("users.json", JSON.stringify(obj));


        })
        req.on("end", () => {

            res.write(WelcomeHTML)
            res.end();
        })
    }

}).listen("8017", () => { console.log("http://localhost:8017") })