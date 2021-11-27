var express = require('express')
var app = express()

app.use('/public/', express.static('./public'))
app.engine('html', require('express-art-template'))
app.use('/node_modules', express.static('./node_modules/'))

app.listen(3001, function () {
    console.log('server running')
})