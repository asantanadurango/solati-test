import reqGetRecords from "../../services/reqGetRecords";
import { useEffect, useState } from 'react';
import reqDeleteRecords from './../../services/reqDeleteRecords';
import './styles.css'

const Index = () => {
	const [records, setRecords]=useState([])
	const [deleting, setDeleting]=useState(false)
	
useEffect(() => {
	const reqRecords = async _ =>{
			const res = await reqGetRecords()
			setRecords(res)
	}
	reqRecords()
}, [deleting]);

		return <div className='containerRecords'>
			{
		 		records.length > 0 ? 
					(<>
					<table className="recordsTable">
						<thead>
							<tr>
								<th>From</th>
								<th>$</th>
								<th>To</th>
								<th>$</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{records.map(r=><tr key={r.id}>
								<td>{r.fromArg} </td>
								<td>{r.amount} </td>
								<td>{r.toArg} </td>
								<td>{r.result} </td>
								<td>{r.date} </td>
							</tr> 
							)}
						</tbody>
					</table>
					<button className='btnDelete' onClick={async()=>{
						await reqDeleteRecords()
						setDeleting(!deleting)
					}}> Delete </button>
					</>)
							: <h4 className='titleNotResults'>There are no results to show</h4>
			}

		</div>
		
	
		
	
}

export default Index;
