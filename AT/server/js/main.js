const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World 2')
})

app.listen(3000, function (){
  console.log("Server started!")
})


