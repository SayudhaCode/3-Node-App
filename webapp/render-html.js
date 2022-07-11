var http = require('http');
var fs = require('fs');

function renderHtml(path, res) {
	fs.readFile(path, null, (err, data) => {
		if (err) {
			res.writeHead(404);
			res.write('File tidak ditemukan');
		} else {
			res.write(data);
		}
		res.end();
	});
}

var server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	renderHtml('./index.html', res);
});

server.listen(3000);
