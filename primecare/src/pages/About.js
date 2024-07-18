import React , {useEffect, useState} from 'react'
import Dragons from "./../Components/Dragons/Dragons"
import Footer from "./../Components/Footer/Footer"
import Kingdom from "./../Components/Kingdom/Kingdom"
import Members from "./../Components/Members/Members"
import Title from "./../Components/Title/Title"
import Video from "./../Components/Video/Video"
import './About.css'

const About = () => {
    const [playState , setPlayState] = useState(false)

    const [isSmallScreen , setIsSmallScreen] = useState(window.innerWidth < 500)
    useEffect(()=>{
      const handleResize = () =>{
        setIsSmallScreen(window.innerWidth < 1000)
      }
      window.addEventListener('resize' , handleResize)
      return()=>{
        window.removeEventListener('resize' , handleResize)
      }
    },[])

  return (
    <div className={isSmallScreen? '' : 'common'}>
        <div className="container">
          <Title subtitle='The targeryns' title='The golden trio' />
          <Members />
          <Title subtitle='the fury of the house' title='The Dragons' />
          <Dragons />
          <Title subtitle='The kingdom' title='The Dragonstone' />
          <Kingdom />
          <Footer />
        </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default About