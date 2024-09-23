import React, { useState } from 'react'

const Counter = () => {

    const [currentNumber, setCurrentNumber] = useState(0);

    const increment = () => {
      setCurrentNumber(currentNumber + 1);
    }
  
    const decrement = () => {
      setCurrentNumber(currentNumber - 1);
    }
  
    const reset = () => {
      setCurrentNumber(0);
    }
  
    const switchSigns = () => {
      setCurrentNumber(-currentNumber)
    }  
  return (
    <div className='container'>
      <div className='container-content'>
        <div className='components'>

          <h2>
            Count :
          </h2>
          <h2 className='currentNumber'>{currentNumber}</h2>

          <div className='button-opr'>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Restart</button>
            <button onClick={switchSigns}>Switch Signs</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Counter;