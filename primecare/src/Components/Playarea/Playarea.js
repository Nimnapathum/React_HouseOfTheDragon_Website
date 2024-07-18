import React, { useState } from 'react'
import './Playarea.css'
import { Button } from '@mui/material'

const Playarea = () => {

    const [ count , setCount] = useState(0)
    const opacity = Math.min(Math.max(count / 10, 0), 1);
    
  return (
    <>
    <div className='ground'>
        <div className='block'>
            <p>Count : {count}</p>
            {count > 10 ? (<Button onClick={() => setCount(count + 1)}>
                Add
            </Button>
            ) : null}
            
            {count < -1 ? (
            <Button onClick={() => setCount(count - 1)}>
            Sub
            </Button>
            ) : null}
            
            <h1 style={{opacity}}>Opacity</h1>
        </div>   
        <div className='block'> 
            <h1 className='gradient'>Dracarys</h1>    
        </div>         
    </div>
    <div className='ground'>
        <div className='block'> 
            <h1 className='welcome-message'>Dracarys</h1>    
        </div>   
    </div>
    </>
    

  )
}

export default Playarea