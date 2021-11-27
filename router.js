var fs = require('fs')
var Item = require('./items')
var express = require('express')
const { runInNewContext } = require('vm')
//把router掛載到router容器中
var router = express.Router()

router.get('/home', function (req, res) {

    Item.find(function (err, items) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            fruits: [

                'apple',
                'banana',
                'orange',

            ]
            , items: items//JSON.parse(data).items

        })
    })
})

module.exports = router