var express = require('express')
var mdb = require('moviedb')('7227ee533c81a8acbb443c98ec625841')
var app = express()
app.use(express.static('public'))

app.get('/:id', function(req, response){
  var id = req.params.id
  mdb.movieInfo({id: id}, function(err, res){
    response.send(JSON.stringify(res))
  })
})

app.listen(3000)
