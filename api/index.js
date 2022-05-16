require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
// const reqApiConvert = require("./services/reqApiConvert.js")
// const connection = require('./database/index.js')
const router = require('./routes/index.js')

app.use(cors());
app.use(express.json());

app.use(router)
app.get('*', (req, res) => {
		res.json({results:"err 404 | page not found"});
});



app.listen(PORT, () => {
console.log('Listen on port', PORT);
});