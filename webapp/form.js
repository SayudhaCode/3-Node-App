var http = require('http');

var server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });

	if (req.url === '/') {
		switch (req.method) {
			case 'GET':
				res.end(
					'<h2>Demo Penanganan Form</h2>' +
						'<form action="/" method="post">' +
						'Nama:<br> ' +
						'<input type="text" name="nama"><br><br>' +
						'Email:<br> ' +
						'<input type="email" name="email"><br><br>' +
						'<input type="submit" name="btnSubmit" value="Kirim"><br><br>' +
						'</form>'
				);
				break;
			case 'POST':
				var body = '';

				req.on('data', (data) => {
					body += data;
				});
				req.on('end', () => {
					res.end('Data yang dikirim:<br>' + body);
				});
				break;
			default:
				res.end('Metode pengiriman tidak dikenal');
		}
	}
});

server.listen(3000);
