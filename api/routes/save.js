const route = require('express').Router()
const connection = require('../database/index.js')

route.get('/save', (req, res) => {
	const {fromArg,amount, toArg, result, date} = req.query
	connection.query(`INSERT INTO records VALUES(?, ?, ?, ?, ?, ?, ?)`, [null, 1, fromArg, amount, toArg, result, date], (err, results, fields)=>{
		if (err) throw err
		res.json({results: "saved record"});
	})
});

module.exports = route