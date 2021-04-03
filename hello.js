// 내장 모듈을 활용하여 웹서버 띄워보기

const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World!');
    response.end();
}).listen(3000);