import { useState } from "react"



function Counter() {
    
    const [count,setCount] =useState(0)
    const [saveValue,setSaveValue] =useState(0)
    


    function increment() {
        setCount(count+1) 
    }
  
    function reset() {
        setCount(0) 
    }

    
    function decrement() {
        setCount(count-1) 
    }
  
    function save() {
        setSaveValue(count) 
    }
  

    return (
      <>
        <h1>People Entered:</h1>
        <h2>{count}</h2>

        <div className="btn">
        <button id="increment-btn" onClick={increment}>INCREMENT</button>
        <button id="reset-btn" onClick={reset}>RESET</button>
        <button id="decrement-btn" onClick={decrement}>DECREMENT</button>
        </div>
        <div className="save-btn">
        <button id="save-btn" onClick={save}>SAVE</button>
        <h2>{saveValue}</h2>
        </div>
      </>
    )
  }
  
  export default Counter
  