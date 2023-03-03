const http = require("http");
const fs = require("fs");

let MainFileHTML = fs.readFileSync("../ClientSide/main.html").toString();
let ProfileFileHTML = fs.readFileSync("../ClientSide/profile.html").toString();
let StyleCSS = fs.readFileSync("../ClientSide/style.css").toString();
let ScriptFile = fs.readFileSync("../ClientSide/script.js").toString();
let myImage = fs.readFileSync("../ClientSide/2.jpg");
let myIcon = fs.readFileSync("../ClientSide/favicon.ico");

var userName = "";

http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
            switch(req.url){
                case "/main.html":
                    // res.writeHead(200,"Ok",{"content-type":"text/html"})
                    // res.writeHead(200,"Ok",{"set-cookie":"userName='Aly'"})
                    // res.setHeader("set-Cookie","userName2='Haitham'");
                    res.setHeader("Access-Control-Allow-Origin","*");//MiddleWare ==> install ==> use
                    //CORS[Front xxx Back]
                    res.write(MainFileHTML);
                break;
                case "/profile.html":
                    res.write(ProfileFileHTML);
                break;
                case "/style.css":
                    res.writeHead(200,"Ok",{"content-type":"text/css"})
                    res.write(StyleCSS)
                break;
                case "/script.js":
                    res.writeHead(300,"Hii",{"content-type":"text/javascript"})
                    res.write(ScriptFile)
                break;
                case "/2.jpg":
                    res.writeHead(200,"ok",{"content-type":"image/jpeg"})
                    res.write(myImage)
                break;
                case "/favicon.ico":
                    res.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
                    res.write(myIcon)
                break;
                default:
                    res.write("<h1>No Page Found</h1>")
                break;
            }
            res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
            // console.log(data)
            // console.log(data.toString())
            // res.write(MainFileHTML);
            userName = data.toString().split("=")[1];
            // userName = data.toString();
            console.log(userName)
        })
        req.on("end",()=>{

            ProfileFileHTML = ProfileFileHTML.replace("{userName}",userName)
            res.write(ProfileFileHTML)
            res.end();
        })
    }
    //#endregion
    //#region PUT
    else if(req.method == "PUT"){

    }
    //#endregion
    //#region DELETE
    else if(req.method == "DELETE"){

    }
    //#endregion
    
}).listen("7001", ()=>{console.log("http://localhost:7001")})