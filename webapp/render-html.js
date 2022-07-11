var http = require('http');
var fs = require('fs');

function renderCSS(req, res) {
	if (req.url === '/style.css') {
		res.writeHead(200, { 'Content-Type': 'text/css' });
		var fileContents = fs.readFileSync('./style.css', { encoding: 'utf-8' });
		res.write(fileContents);
		res.end();
	}
}
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
	renderCSS(req, res);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	renderHtml('./index.html', res);
});

server.listen(3000);
