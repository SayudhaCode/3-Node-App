var events = require('events');

//membuat kelas turunan dari kelas EventEmitter
class MyEventEmitter extends events.EventEmitter {
	constructor() {
		super();
	}
}

//membuat objek dari kelas MyEventEmitter
var obj = new MyEventEmitter();

//mendifinisikan event mulai
obj.on('mulai', function () {
	console.log(`terjadi event 'mulai'`);
});

//mendefinisikan event selesai
obj.on('selesai', function () {
	console.log(`terjadi event 'selesai'`);
});

obj.emit('mulai');
for (let i = 0; i < 20; i++) {
	process.stdout.write((i + 1).toString() + ' ');
}

obj.emit('selesai');
