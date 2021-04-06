// express로 웹 서버 띄워보기

const express = require('express');
const admin = require('./routes/admin');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});