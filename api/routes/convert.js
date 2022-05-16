const route = require('express').Router()
const reqApiConvert = require("../services/reqApiConvert.js")

route.get('/convert', async (req, res) => {
	const {from, to, amount} = req.query
	const data = await reqApiConvert(from, to, amount)
	res.json(data);
});

module.exports = route