const express = require('express');
const Router = express.Router();
const ssModel = require('./model');

Router.post('/add', (req, res) => {
	const data = req.body;
	const userdata = new ssModel({
		studentFirstName: data.studentFirstName,
		collegeName: data.collegeName,
		location: data.location
	});
	const jdata = JSON.stringify({ result: 'Success' });

	userdata
		.save()
		.then(result => res.send(jdata))
		.catch(error => console.log(error));
});

module.exports = Router;
