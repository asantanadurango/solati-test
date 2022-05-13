const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const reqApiConvert = require("./services/reqApiConvert.js")
const connection = require('./database/index.js')

app.use(cors());
app.use(express.json());

app.get('/convert?', async (req, res) => {
	const {from, to, amount} = req.query
	const data = await reqApiConvert(from, to, amount)
	res.json(data);
});

app.get('/save?', (req, res) => {
	console.log(req.query)
	const {fromArg,amount, toArg, result, date} = req.query
	console.log(fromArg)
	connection.query(`INSERT INTO records VALUES(?, ?, ?, ?, ?, ?, ?)`, [null, 1, fromArg, amount, toArg, result, date], (err, results, fields)=>{
		if (err) throw err
		res.json({results: "saved record"});
	})
});

app.get('/records?', (req, res) => {
	connection.query(`SELECT * FROM records WHERE state=1`, (err, results, fields)=>{
		if (err) throw err
		res.json(results);
	})
});

app.get('/delete?', async (req, res) => {
	connection.query(`UPDATE records set state=0`, (err, results, fields)=>{
		if (err) throw err
		res.json({results:"deleted record"});
	})
});

app.listen(PORT, () => {
console.log('Listen on port', PORT);
});