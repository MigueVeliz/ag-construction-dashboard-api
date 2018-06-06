const router = require('express').Router(),
	Fotos = require('../models/fotos');

	router.post('/fotos', (req,res) => {
		console.log("Posting this:", req.body);

		const { url, description, details} = req.body;

		Fotos.addFoto( url, description, details)
			.then( data => {
				res.json(data);
			})
			.catch( err => console.log("Controller POST Error: " + err));
	});


	router.get('/fotos', (req,res) => {
		Fotos.findAll()
			.then( data => {
				res.json(data);
			})
			.catch( err => console.log('Controller get error: ' + err));
	});


	router.put('/fotos/edit/:id', (req,res) => {

		const { id, url, description, details} = req.body;

		Fotos.updateFoto(id, url, description, details)
			.then( data => res.json(data))
			.catch( err => console.log("PUT error: " + err));
	});


	router.delete('/fotos/:id', (req, res) => {
		const id = req.params.id;

		Fotos.delete(id)
			.then( data => {
				res.send('Deleted from DB');
			})
			.catch( err => console.log('Controller Delete Error: ' + err));
	});




module.exports = router;



