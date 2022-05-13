const reqDeleteRecords =async ()=>{
	const res = await fetch(`http://localhost:8080/delete`)
	const data =  await res.json()
	console.log(data)
	return data
}

export default reqDeleteRecords