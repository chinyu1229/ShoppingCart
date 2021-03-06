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
            Shops: [
                {
                    name: 'pchome',
                    website: 'https://www.pchomeec.tw/'
                },
                {
                    name: 'Momo',
                    website: 'https://www.momoshop.com.tw/'
                },
                {
                    name: '博客來',
                    website: 'https://www.books.com.tw/'
                }
            ]
            , items: items

        })
    })

})

//新增商品 get/post
router.get('/items/new', function (req, res) {
    res.render('new.html')
})
router.post('/items/new', function (req, res) {
    new Item(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('Server error')

        }
        res.redirect('/home')
    })

})

//編輯修改 get/post
router.get('/items/edit', function (req, res) {
    Item.findById(req.query.id, function (err, item) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('edit.html', {
            item: item
        })
    })
})
router.post('/items/edit', function (req, res) {
    var id = req.body.id

    Item.findByIdAndUpdate(id, req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/home')
    })
})

//刪除商品
router.get('/items/delete', function (req, res) {
    var id = req.query.id
    Item.findByIdAndRemove(id, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/home')
    })
})

module.exports = router