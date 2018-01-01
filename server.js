'use stricy';

const http = require('http');

const server = http.createServer(function(request,response){
    console.log('Hello!');
});

server.listen(3000);
console.log('server started!');
//node server.js