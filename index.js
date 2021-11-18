const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

server.start(router.route, requestHandlers.handle);