import { useState, useEffect } from 'react'
import reqApi from '../../services/reqApi.js'
import './styles.css'
import changeIcon from '../../assets/changeIcon.png'
import reqSaveRecord from '../../services/reqSaveRecord.js'
function Home() {
  const [toFrom, setToFrom] = useState({to:"USD", from:"COP"})
  const [amount, setAmount] = useState(0)
  const [result, setResult] = useState(0)


  const handleToFrom =()=>{
    if(toFrom.from === "USD"){
      setToFrom({from:"COP", to:"USD"})
    }else{
      setToFrom({from:"USD", to:"COP"})
    }
  }

  const handleChangeAmount =(e)=> setAmount(e.target.value)

  const handleSaveRecord = async({fromArg, amount, toArg, result})=>
  {
    const data = await reqSaveRecord({fromArg, amount, toArg, result})
    console.log(data)
  } 

  useEffect(() => {
    // console.log("oe")
    if(isNaN(amount) || amount==false) return
    const handleConvert = async(from, to, amount) =>{
      const data = await reqApi(from, to, amount)
      const result = data.result.COP ? data.result.COP : data.result.USD
      setResult(result)
    }
    handleConvert(toFrom.from, toFrom.to, amount)

  }, [amount, toFrom]);

  return (
    <div className='home'>
          <div className="labels">
            <span>{toFrom.from}</span>
            <button onClick={handleToFrom}><img className='changeIcon' src={changeIcon} /> </button>
            <span>{toFrom.to}</span>
          </div>

        <form className='form'>
          <h3>Convert</h3>
          <div className='boxAmount'>
          <input className='inpAmount' type="text" id="inpAmount" onChange={(e)=>{
            handleChangeAmount(e)
          }}
            placeholder="0"
           /> <label htmlFor='inpAmount'>${toFrom.from}</label>
          </div>
          <div className="boxResult">
            <span>{isNaN(amount) ? "please enter a valid value": (`Result: ${result} ${toFrom.to}`)}</span>
          </div>
         

          <button type='button' onClick={()=>{
            handleSaveRecord({fromArg:toFrom.from, amount, toArg:toFrom.to, result})
          }}>Save Record</button>
        </form>

    </div>
  )
}

export default Home
