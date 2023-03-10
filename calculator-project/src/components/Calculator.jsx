import React from 'react'
import { useState } from 'react'

export default function Calculator () {
    const [input,setInput] = useState("");
    const [result,setResult]=useState("")
    const changehandler = e=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <center>
        <input type="text" value={input} name="input" onChange={changehandler}/>
        <br />
        <br />
        <button onClick={()=>setResult(eval(input))}>Result</button>
        <br />
        <br />
        <h4>Result is:{result}</h4>
        <button className='buttons' onClick={() => setInput(input+'1')}>1</button>
        <button className='buttons' onClick={() => setInput(input+'2')}>2</button>
        <button  className='buttons' onClick={() => setInput(input+'3')}>3</button>
        <button className='buttons'  onClick={() => setInput(input+'4')}>4</button>
        <button className='buttons' onClick={() => setInput(input+'5')}>5</button><br />
        
        <button className='buttons' onClick={() => setInput(input+'6')}>6</button>
        <button className='buttons' onClick={() => setInput(input+'7')}>7</button>
        <button className='buttons' onClick={() => setInput(input+'8')}>8</button>
        <button className='buttons' onClick={() => setInput(input+'9')}>9</button>
        <button className='buttons'  onClick={() => setInput(input+'0')}>0</button><br />

        <button className='buttons' onClick={() => setInput(input+'+')}>+</button>
        <button className='buttons' onClick={() => setInput(input+'-')}>-</button>
        <button className='buttons'  onClick={() => setInput(input+'*')}>*</button>
        <button className='buttons' onClick={() => setInput(input+'/')}>/</button>
        <button className='buttons'  onClick={() => {setInput('');setResult(0)}}>clr</button><br />
        <br />
      </center>

    </div>
  )
}
