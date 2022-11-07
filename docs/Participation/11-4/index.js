
let express = require('express')

let app = express()
app.use(express.urlencoded({ extended: false }))/
app.use(express.static('public'))
app.listen(3000, function() {
    console.log("listening on port 3000")
});

const http = require("http");
const _ = require("underscore");

//TODO: link this file with server,js?
// const server_lib = require("./server.js")
// http.createServer(respond).listen(8080);
var msg = "Testy mesty"

// function respond(request, response){
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<!DOCTYPE html>\n<html>\n");
//     response.write(`<title>${msg}</title>\n`);
//     response.write("<body>\n");
//     response.write("<h1>Hello</h1>\n");
//     response.write("</body>\n</html>");
//     response.end();
// }

app.get("/submission.html", function(request, response) {
    let first_name = request.body.first;
    let last_name = request.body.last;
    response.send(`<h2>${first_name}</h2>\n<h2>${last_name}</h2>`);
})
