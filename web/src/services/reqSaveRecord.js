const reqSavedRecord = async({fromArg, amount, toArg, result})=>{
	console.log(result)
	const date = new Date().toLocaleString();
	const res = await fetch(`http://localhost:8080/save?fromArg=${fromArg}&amount=${amount}&toArg=${toArg}&result=${result}&date=${date}`)
	const data =  await res.json()
	return data
}

export default reqSavedRecord