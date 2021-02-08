const http = require('http');

const express = require('express');

const app = express();

// allows to add middleware function
app.use((req, res, next) => {
	console.log('In the middleware');
	next(); // allows request to continue to next middleware in line
});

app.use((req, res, next) => {
	console.log('In the next middleware');
});

const server = http.createServer(app);

server.listen(3000);
