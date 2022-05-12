const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const reqApi = require("./services/index.js")
const sdk = require('api')('@fastforex/v1.2.0#3w4lfnkzlh2do7');

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
	const data = await reqApi()
	res.send('Hello World');
});
app.listen(PORT, () => {
console.log('Listen on port', PORT);
});