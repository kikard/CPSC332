
var http = require("http");

http.createServer(http.createServer).listen(3000);

function createServer(request, response){
    response.writeHead(200, {"content-Type": "text/html"});

    response.write("<h1>Node.js please work</h1>");
    response.end();
}