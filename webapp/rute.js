var http = require('http');

var server = http.createServer((req, res) => {
	if (req.url == '/') {
		res.end(`<h2>Halaman Utama</h2>`);
	} else if (req.url == '/katalog') {
		res.end(`<h2>Halaman Katalog</h2>`);
	} else if (req.url == '/kontak') {
		res.end(`<h2>Halaman Kontak</h2>`);
	} else {
		res.status = 404;
		res.end(`<h2>404: Halaman tidak ditemukan</h2>`);
	}
});

server.listen(3000);
