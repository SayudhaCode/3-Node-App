var events = require('events');

// Membuat objek dari kelas EventEmitter
var obj = new events.EventEmitter();

// Mendefinisikan event 'mulai'
obj.on('mulai', function () {
	console.log(`Terjadi event 'mulai'`);
});

// Mendefinisikan event 'selesai'
obj.on('selesai', function () {
	console.log(`Terjadi event 'selesai'`);
});

obj.emit('mulai');
for (let i = 0; i < 20; i++) {
	process.stdout.write((i + 1).toString() + ' ');
}
obj.emit('selesai');
