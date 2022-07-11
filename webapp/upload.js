var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

var html = fs.readFileSync('./uploadform.html');

var server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	if (req.method === 'GET') {
		res.end(html);
	} else if (req.method === 'POST') {
		var form = new formidable.IncomingForm();

		form.parse(req, function(err, fields, files) {
			var tempFile = files.userfile.filepath;
			var destFile = './uploads/' + files.userfile.originalFilename;

			fs.rename(tempFile, destFile, function(error) {
				if (error) {
					res.end('Proses upload gagal');
					throw error;
				}
				res.end('Proses upload berhasil');
			});
		});
	}
});

server.listen(3000);
