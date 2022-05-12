const sdk = require('api')('@fastforex/v1.2.0#3w4lfnkzlh2do7');
const reqApi = async(from = "USD", to="COP", amount="1.00")=>{
	const url = `/convert?from=${from}&to=${to}&amount=${amount}&`
	await sdk.auth('&'+'c557fd0d93-1328870570-rbs52n')
	return sdk.get(url)
  .then(res => res)
  .catch(err => console.error(err));
}

module.exports = reqApi



