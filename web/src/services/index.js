const reqApi = async(from = "USD", to="COP", amount="1")=>{
	console.log(amount)
	const urlApi = `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=c557fd0d93-1328870570-rbs52n`
	console.log(urlApi)
	const res = await fetch(urlApi)
	const data = await res.json()
	return data
}

export default reqApi



