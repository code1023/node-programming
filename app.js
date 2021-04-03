// express로 웹 서버 띄워보기

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('express start');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});