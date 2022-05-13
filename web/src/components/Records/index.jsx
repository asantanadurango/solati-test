import reqGetRecords from "../../services/reqGetRecords";
import { useEffect, useState } from 'react';
import reqDeleteRecords from './../../services/reqDeleteRecords';
import { NavLink } from "react-router-dom";

const Index = () => {
	const [records, setRecords]=useState([])
	const [deleting, setDeleting]=useState(false)

// const handleDeleteRecords =()=>{

// }
	
useEffect(() => {
	const reqRecords = async _ =>{
			const res = await reqGetRecords()
			setRecords(res)
	}
	reqRecords()
}, [deleting]);

		return records.length > 0 ? (<ul>
			{records.map(r=><li key={r.id}>
					<h4>From {r.fromArg} </h4>
					<h4>Amount {r.amount} </h4>
					<h4>To {r.toArg} </h4>
					<h4>Result {r.result} </h4>
					<h4>Date {r.date} </h4>
			</li> 
			)}
			<button onClick={async()=>{
				await reqDeleteRecords()
				setDeleting(!deleting)
			}}> Delete </button>
		</ul>) : <h4>No hay resultados para mostrar</h4>
	
		
	
}

export default Index;
