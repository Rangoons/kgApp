var express = require('express')
var mdb = require('moviedb')('7227ee533c81a8acbb443c98ec625841')
var app = express()
app.use(express.static('public'))


app.get('/:title', function(req, response){
  var title = req.params.title
  mdb.searchMovie({query: title}, function(err, res){
    response.send((res))
  })
})
//get all of the popular movies
app.get('/', function(req, response){
  mdb.miscPopularMovies(function(err, res){
    response.send(res)
  })
})
app.listen(3000)
