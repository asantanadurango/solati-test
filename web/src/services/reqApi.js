const reqApi = async(from = "USD", to="COP", amount="1")=>{
	const urlApi = `http://localhost:8080/convert?from=${from}&to=${to}&amount=${amount}`
	const res = await fetch(urlApi)
	const data = await res.json()
	return data
}

export default reqApi



