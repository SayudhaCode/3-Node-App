var http = require('http');
var url = require('url');
var qs = require('querystring');

var server = http.createServer((req, res) => {
    var query = url.parse(req.url).query;
    var params = qs.parse(query)

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<strong>Nama path:</strong>' + url.parse(req.url).pathname + '<br><br>');
    res.write('<strong>Daftar parameter:</strong><br>');
    for (var property in params) {
        res.write(property + ': ' + params[property] + '<br>');
    }
    res.end();
})

server.listen(3000);