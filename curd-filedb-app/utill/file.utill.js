const fs = require('fs');


module.exports = {
	async getUid () {
		return Math.floor(Math.random() * 1000);
	},

	async getFileArr () {
		let data = fs.readFileSync('./file.json');
		return JSON.parse(data);
	},

	async writeFile(dataArr) {
		let content = JSON.stringify(dataArr);
		fs.writeFileSync('./file.json', content, 'utf8', (err) => {
			if (err) console.log(err);
		});
	}
 }