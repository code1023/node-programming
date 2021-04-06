const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin app');
});

router.get('/products', function (_, res) {
    res.render('admin/products.html',
        { message: "hello" }
    );
})

module.exports = router;