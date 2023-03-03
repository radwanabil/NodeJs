const http = require("http");
http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        let reqUrl = req.url.split("/");
        let result;
        if (reqUrl[1] == "add") {
            result = Number(reqUrl[2]) + Number(reqUrl[3]);
        } else if (reqUrl[1] == "sub") {
            result = Number(reqUrl[2]) - Number(reqUrl[3]);
        }else if (reqUrl[1] == "div") {
            result = Number(reqUrl[2]) / Number(reqUrl[3]);
        }else if (reqUrl[1] == "mul") {
            result = Number(reqUrl[2]) * Number(reqUrl[3]);
        }
        res.write("The result is: " + result)
    }
    res.end();
})
    .listen("7000",
        () => {
            console.log("listeniing on port 7000");
        })