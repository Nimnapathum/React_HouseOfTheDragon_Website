import './Members.css'
import mem1 from './../../assets/daemon.jpeg'
import mem2 from './../../assets/viserys.jpeg'
import mem3 from './../../assets/reay.jpeg'
import overlay from './../../assets/sigil.png'
import React from "react"

const Members = () => {
  return (
    <div className='programs' id='about'>
        <div className="program">
            <img src={mem1} alt="" />
            <div className="caption">
                <img src={overlay} alt=''/>
                <p>Daemon Targeryn</p>
            </div>
        </div>
        <div className="program">
            <img src={mem2} alt="" />
            <div className="caption">
                <img src={overlay} alt=''/> 
                <p>Viserys Targeryn</p>
            </div>
        </div>
        <div className="program">
            <img src={mem3} alt="" />
            <div className="caption">
                <img src={overlay} alt=''/>
                <p>Rheneyra Targeryn</p>
            </div>
        </div>
    </div>
  )
}

export default Members