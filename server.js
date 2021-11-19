const http = require('http');
const url = require('url');
const { route } = require('./router');

function start(route, handle) {

    const onRequest = function (request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');

        route(handle, pathname);

        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write('Hello nodejs');
        response.end();
    }

    const server = http.createServer();

    http.createServer(onRequest).listen(8888);

    server.on('ClientError', function(socket) {
        console.log('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
}

exports.start = start;
