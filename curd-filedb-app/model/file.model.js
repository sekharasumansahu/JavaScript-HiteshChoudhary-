const fs = require('fs');
const Utill = require('../utill/file.utill');

module.exports = {
	async saveData(obj) {
		try {
			let dataArr = await Utill.getFileArr();
			console.log(dataArr);

			dataArr.push(obj);
			await Utill.writeFile(dataArr);
		} catch (err) {
			console.log(err);
		}
	},


	async getAllData() {
		try {
			let dataArr = await Utill.getFileArr();
			return dataArr;
			
		} catch (err) {
			console.log(err);
		}
	},

	async updateById(id, obj) {
		try {
			let dataArr = await Utill.getFileArr();
			let index = dataArr.findIndex((d) => {
				return d.id == id;
			});

			dataArr[index] = {id, ...obj};
			await Utill.writeFile(dataArr);
			
		} catch (err) {
			console.log(err);
		}
	},

	async deleteById(id) {
		try {
			let dataArr = await Utill.getFileArr();
			let filterData = dataArr.filter((d)=>{
				return d.id != id;
			});
			await Utill.writeFile(filterData);

		} catch (err) {
			console.log(err);
		}
	}
};