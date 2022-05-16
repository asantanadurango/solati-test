const sdk = require('api')('@fastforex/v1.2.0#3w4lfnkzlh2do7');

const reqApi = async(from = "USD", to="COP", amount="0")=>{
	await sdk.auth(process.env.API_KEY_FOREST);
	 return sdk.get('/convert', {from, to, amount})
	.then(res => res)
	.catch(err => console.error(err));
}

module.exports = reqApi



