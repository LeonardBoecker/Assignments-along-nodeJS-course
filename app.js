//------------------------------------------------------
//FIRST PART OF THE EXERCISE
//------------------------------------------------------

// creating and storin routers, http and server themselves
const http = require('http');

const routers = require('./routers');

const server = http.createServer(routers);
// port being listend 3000
server.listen(3000);