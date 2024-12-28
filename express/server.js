const express = require("express");
const app = express();
// app.listen(3000);


app.get("/", function(request,respond){
  respond.send("<h1>Hello</h1>");
})

app.get("/contact", function(request,respond){
  respond.send("<p>contact me at wshreyas0@gmail.com</p>");
})

app.get("/about", function(request,respond){
  respond.send("<p>I am a full stack web developer</p>");
})

app.get("/hobbies", function(request,respond){
  respond.send("<ul><li>Chess</li><li>Design</li><li>Sleep</li></ul>");
})


app.listen(3000, function(){
  console.log("server started on port number 3000");
})
