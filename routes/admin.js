const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next) {
    console.log('first middleware');
    next();
}

function testMiddleWare2(req, res, next) {
    console.log('second middleware');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    res.send('admin app');
});

router.get('/products', function (_, res) {
    res.render('admin/products.html',
        { message: "hello" }
    );
})

module.exports = router;