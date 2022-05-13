const sdk = require('api')('@fastforex/v1.2.0#3w4lfnkzlh2do7');

const reqApi = async(from = "USD", to="COP", amount="0")=>{
	await sdk.auth('c557fd0d93-1328870570-rbs52n');
	 return sdk.get('/convert', {from, to, amount})
	.then(res => res)
	.catch(err => console.error(err));
}

module.exports = reqApi



