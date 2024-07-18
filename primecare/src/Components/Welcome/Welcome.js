import React, { useState } from 'react'
import './Welcome.css'
import { Input } from '@mui/material' 

const Welcome = () => {
    const [name , setName] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

  return (
    <div className='welcome-cont'>
        <Input 
            type='text' 
            value={name} 
            onChange={handleNameChange}
            placeholder='Enter your name'
        >
            Input
        </Input>
        <p>Valar Morghullis, {name ? name : 'Guest'}!</p>
    </div>
  )
}

export default Welcome
