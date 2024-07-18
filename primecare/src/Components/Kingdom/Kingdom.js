import './Kingdom.css'
import left from './../../assets/left-arrow.png'
import right from './../../assets/right-arrow.png'
import c1 from './../../assets/c1.jpeg'
import c2 from './../../assets/c2.jpeg'
import c3 from './../../assets/c3.jpeg'
import c4 from './../../assets/c4.jpeg'
import c5 from './../../assets/c5.jpeg'
import React , { useRef } from 'react'

const Kingdom = () => {
    const slider = useRef()
    let tX = 0;

    const slideForward = () =>{
        if(tX > -50){
            tX -= 40
        }
        slider.current.style.transform = `translateX(${tX}%)`
    }
    const slideBackward = () =>{
        if(tX < 0){
            tX += 40
        }
        slider.current.style.transform = `translateX(${tX}%)`
    }
  return (
    <div className='kingdom'>
        <img src={left} alt='' className='prev-btn' onClick={slideBackward}></img>
        <img src={right} alt='' className='next-btn' onClick={slideForward}></img>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={c1} alt="" />
                            <h3>Figure 1</h3>
                            <span>Legacy</span>
                        </div>
                        <p>The castle is characterized by its dragon-themed architecture, with towers and walls shaped like dragons and gargoyles, reflecting its Targaryen heritage. Dragonstone served as the ancestral seat of House Targaryen after they fled the Doom of Valyria and before Aegon the Conqueror launched his campaign to conquer the Seven Kingdoms.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={c2} alt="" />
                            <h3>Figure 2</h3>
                            <span>Legacy</span>
                        </div>
                        <p>The castle is characterized by its dragon-themed architecture, with towers and walls shaped like dragons and gargoyles, reflecting its Targaryen heritage. Dragonstone served as the ancestral seat of House Targaryen after they fled the Doom of Valyria and before Aegon the Conqueror launched his campaign to conquer the Seven Kingdoms.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={c3} alt="" />
                            <h3>Figure 3</h3>
                            <span>Legacy</span>
                        </div>
                        <p>The castle is characterized by its dragon-themed architecture, with towers and walls shaped like dragons and gargoyles, reflecting its Targaryen heritage. Dragonstone served as the ancestral seat of House Targaryen after they fled the Doom of Valyria and before Aegon the Conqueror launched his campaign to conquer the Seven Kingdoms.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={c4} alt="" />
                            <h3>Figure 4</h3>
                            <span>Legacy</span>
                        </div>
                        <p>The castle is characterized by its dragon-themed architecture, with towers and walls shaped like dragons and gargoyles, reflecting its Targaryen heritage. Dragonstone served as the ancestral seat of House Targaryen after they fled the Doom of Valyria and before Aegon the Conqueror launched his campaign to conquer the Seven Kingdoms.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={c5} alt="" />
                            <h3>Figure 5</h3>
                            <span>Legacy</span>
                        </div>
                        <p>The castle is characterized by its dragon-themed architecture, with towers and walls shaped like dragons and gargoyles, reflecting its Targaryen heritage. Dragonstone served as the ancestral seat of House Targaryen after they fled the Doom of Valyria and before Aegon the Conqueror launched his campaign to conquer the Seven Kingdoms.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Kingdom