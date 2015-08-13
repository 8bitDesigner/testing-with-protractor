var express = require('express')
  , app = express()
  , port = process.env.PORT || 3001
  , standalone = !module.parent

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'))
app.use(express.static('node_modules/angular'))

app.get('/', function(req, res) {
  res.sendFile('public/index.html')
})

app.boot = function() {
  app.listen(port, function() {
    if (standalone) {
      console.log("Server running at http://localhost/"+port+" - Type 'Ctrl + C' to stop.")
    }
  })
}

if (!module.parent) {
  app.boot()
} else {
  module.exports = app
}
