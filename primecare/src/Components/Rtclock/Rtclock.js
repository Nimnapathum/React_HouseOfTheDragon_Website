import React ,{ useState , useEffect} from 'react'
import './Rtclock.css'

const Rtclock = () => {
    const [currentTime , setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (date) => {
        return date.toLocaleTimeString()
    }
  return (
    <div className='clock'>
        {formatTime(currentTime)}
    </div>
  )
}

export default Rtclock