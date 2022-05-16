const route = require('express').Router();
const connection = require('../database/index.js')

route.get('/records', (req, res) => {
	connection.query(`SELECT * FROM records WHERE state=1`, (err, results, fields)=>{
		if (err) throw err
		res.json(results);
	})
});

module.exports = route