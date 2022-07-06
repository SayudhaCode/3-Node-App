var n = process.argv.length;

console.log('Jumlah argumen: ' + n);
for (let i = 0; i < n; i++) {
	console.log(`process.argv[${i}]: ` + process.argv[i]);
}

console.log('\nDirektori aktif\t\t: ' + process.cwd());
console.log('Lokasi Node.js\t\t: ' + process.execPath);
console.log('Versi Node.js\t\t: ' + process.version);
console.log('Sistem Operasi\t\t: ' + process.platform);
console.log('Arsitektur Prosesor\t: ' + process.arch);