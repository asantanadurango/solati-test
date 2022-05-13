const reqGetRecords =async ()=>{
	const res = await fetch(`http://localhost:8080/records`)
	const data =  await res.json()
	return data
}

export default reqGetRecords