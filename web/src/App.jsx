import { useState, useEffect } from 'react'
import reqApi from './services/index.js'
import './App.css'

function App() {
  const [toFrom, setToFrom] = useState({to:"USD", from:"COP"})
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(4104.05)


  const handleToFrom =()=>{
    if(toFrom.from === "USD"){
      setToFrom({from:"COP", to:"USD"})
    }else{
      setToFrom({from:"USD", to:"COP"})
    }
  }

  useEffect(() => {
    console.log("use")
   const handleConverte = async(from, to, amount) =>{
      const data = await reqApi(from, to, String(amount))
      const result = data.result.COP ? data.result.COP : data.result.USD
      setResult(result)
  }
    handleConverte(toFrom.from, toFrom.to, amount)

  }, [amount]);

  return (
    <div className='App'>
          <div className="labels">

            <span>{toFrom.from}</span>
            <button onClick={handleToFrom}>change</button>
            <span>{toFrom.to}</span>
          </div>
        <form>
          <label htmlFor="inpAmount">Converte</label>
          <div className='inpConverte'>

          <input type="text" name="" id="inpAmount" onChange={(e)=>{
            setAmount(e.target.value)
          }}
            defaultValue="1"
           /> <span>${toFrom.from}</span>
          </div>
            <hr />
          <label htmlFor="inpResult">Result</label>
          <span>{`${result} ${toFrom.to}`}</span>
         

          {/* <button type='button'>Convertir</button> */}
        </form>

    </div>
  )
}

export default App
