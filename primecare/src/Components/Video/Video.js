import './Video.css'
import vid from './../../assets/vid1.mp4'
import React , { useRef } from 'react'

const Video = ({playState , setPlayState}) => {
    const player = useRef(null)

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={vid} autoPlay muted controls></video>
    </div>
  )
}

export default Video