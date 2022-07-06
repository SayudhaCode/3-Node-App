var http = require('http');

http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('<h1>Hello Node.js</h1>');
	})
	.listen(3000);

console.log('Server aktif di localhost: 3000');
