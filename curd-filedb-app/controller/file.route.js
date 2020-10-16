const express = require('express');
const router = express.Router();

const Utill = require('../utill/file.utill');
const file = require('../model/file.model');


//router for generic response
router.get('/', (req, res)=>{
	res.status(200).send({message : 'Server is listening....!!!!'});
});

//router for create data
router.post('/save', async (req, res) => {
	try {
		let obj = {
			id: await Utill.getUid(),
			title: req.body.title,
			description: req.body.description
		};

		await file.saveData(obj);

		res.status(201).send({ status: 'Success', message: 'Data saved successfuly' });

	} catch (err) {
		console.log(err);
	}

});

//router for get all data
router.get('/all', async (req, res)=>{

	try {
		let dataArr = await file.getAllData();
		res.status(200).send({ message: 'Data fetched successfuly', data: dataArr });
	} catch (err) {
		console.log(err);
	}
	
});


//router for update specific data
router.put('/:id', async (req, res)=>{
	try {
		let id = parseInt(req.params.id);
		let obj = {
			title: req.body.title,
			description: req.body.description
		};

		await file.updateById(id, obj);

		res.status(200).send({ status: 'Success', message: 'Data updated successfuly' });

	} catch (err) {
		console.log(err);
	}
});

//route for deleting all data
router.delete('/:id', async (req, res)=>{
	try {
		let id = req.params.id;
		await file.deleteById(id);

		res.status(200).send({ status: 'Success', message: 'Data deleted successfuly' });

	} catch (err) {
		console.log(err);
	}
});




module.exports = router;