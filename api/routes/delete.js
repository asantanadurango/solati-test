const route = require('express').Router();
const connection = require('../database/index.js')

route.get('/delete', (req, res) => {
	connection.query(`UPDATE records set state=0`, (err, results, fields)=>{
		if (err) throw err
		res.json({results:"deleted record"});
	})
});

module.exports = route