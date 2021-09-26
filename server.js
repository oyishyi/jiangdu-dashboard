var express = require('express')
var app = require('express')();
var server = require('http').createServer(app)

server.listen(8080)
app.use(express.static('./dist'))
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})