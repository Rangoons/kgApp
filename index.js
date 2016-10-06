var express = require('express')
var mdb = require('moviedb')('7227ee533c81a8acbb443c98ec625841')
var app = express()
var movieRes = '';
  mdb.movieInfo({id: 666}, function(err, res){
    movieRes = JSON.stringify(res)
  })
app.get('/', function(req, res){
  res.send(movieRes)
})


app.listen(3000)
