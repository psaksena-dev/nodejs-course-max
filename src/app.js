const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>First Page</title></head>');
	res.write('<body>');
	res.write('<h1>Hello from NodeJS</h1>');
	res.write('</body>');
	res.write('</html>');
	res.end();
});

server.listen(3000);
