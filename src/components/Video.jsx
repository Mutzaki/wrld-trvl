import React from 'react'
import '../styles/Video.css'
import {Link} from 'react-router-dom'
import spaceVideo from '../assets/space.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>Explore. Travel.</h1>
            <p>World's first ever civilian space travel.</p>
        
        <div>
            <Link to='/Prices' className='btn'>Prices</Link>
            <Link to='/Contact-Us' className='btn btn-light'>Launch</Link>
        </div>
    </div>
    </div>
  )
}

export default Video