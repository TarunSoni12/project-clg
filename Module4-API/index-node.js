

const http = require("http");
const { listeners } = require("process");


http.createServer((req, res) =>{
        res.end("Hello World From NodeJS")
}) .listen(3200);

console.log("Server is Listening on 3200");