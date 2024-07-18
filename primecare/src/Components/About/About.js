import './About.css'
import rayray from './../../assets/pic1.jpeg'
import play from './../../assets/play.png'
import React from "react"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={rayray} alt='' className='about-img'/>
            <img src={play} alt='' className='play-img' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>The Targeryen History</h3>
            <h2>Conquered and ruled the Seven Kingdoms of Westeros</h2>
            <p>House Targaryen, one of the most prominent families in `Game of Thrones,`` is known for their dragonlord ancestry and their long reign over the Seven Kingdoms of Westeros.</p>
            <p>Originating from Valyria, they fled to Dragonstone before the Doom of Valyria. Aegon the Conqueror, along with his sister-wives Visenya and Rhaenys, united the Seven Kingdoms under Targaryen rule. Their lineage is marked by the distinctive silver hair and purple eyes, and their ability to tame and ride dragons, a power that solidified their dominance</p>
            <p> The Targaryen motto, `Fire and Blood,`` reflects their tumultuous and often fiery history.</p>
        </div>
    </div>
  )
}

export default About