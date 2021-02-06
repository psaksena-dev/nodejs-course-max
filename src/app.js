const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write('<body>');
		res.write(
			'<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
		);
		res.write('</body>');
		res.write('</html>');
		return res.end();
	} else if (url === '/message' && method === 'POST') {
		fs.writeFileSync('/messages.txt', 'DUMMY');
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}
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
