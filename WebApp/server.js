// create web application
// which will act like web app

var http=require("http");
// on each and every request arrival
// call onReceive function
var onReceiveRequest=function(req,res){
console.log("request is received from client..");
res.write("<h1>Welcome to web application<h1>");
res.end();
};


var server=http.createServer(onReceiveRequest);
server.listen(7878);
console.log("server is listening on port number 7878");