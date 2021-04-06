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

router.get('/products', (_, res) => {
    res.render('admin/products.html',
        { message: "hello" }
    );
});

router.get('/products/write', (_, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    res.send(req.body);
});

module.exports = router;