
const http = require("http");
http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        let reqUrl = req.url.split("/");
        let operation = reqUrl[1];
        var result;
        if (operation == "add") {
            result = 0;
            for (let i = 2; i < reqUrl.length; i++){
                result += Number(reqUrl[i]);
            }
        } else if (operation == "sub") {
            result = 0;
            for (let i = 2; i < reqUrl.length; i++){
                result -= Number(reqUrl[i]);
            }
        }else if (operation == "mul") {
            result = 1;
            for (let i = 2; i < reqUrl.length; i++){
                result *= Number(reqUrl[i]);
            }
        }else if (operation == "div") {
            result = 1;
            for (let i = 2; i < reqUrl.length; i++){
                result /= Number(reqUrl[i]);
            }
        }
     
        res.write("The result is: " + result)
    }
    res.end();
})
    .listen("8000",
        () => {
            console.log("listeniing on port 8000");
        })