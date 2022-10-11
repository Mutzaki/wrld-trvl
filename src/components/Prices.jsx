import React from 'react'
import HeroImage from './HeroImage'
import {Link} from 'react-router-dom'
import '../styles/PricesCards.css'

const Prices = () => {
  return (
    <div>
      <HeroImage heading='Special Prices For New Members' text='Choose your trip.' />
      <div className='pricing'>
        <div className='card-container'>
          <div className='card'>
            <h3>-Basic-</h3>
            <span className='bar'></span>
            <p className='USD'>50k $</p>
            <p>-3 days trip-</p>
            <p>-Views-</p>
            <p>-meals included-</p>
            <p>-Private 1 room Quarters-</p>
            <Link to='/Contact-Us' className='btn'>Book</Link>
          </div>
          <div className='card'>
            <h3>-Suite-</h3>
            <span className='bar'></span>
            <p className='USD'>70k $</p>
            <p>-5 days trip-</p>
            <p>-Views-</p>
            <p>-meals included-</p>
            <p>-Private 3 rooms Quarters-</p>
            <Link to='/Contact-Us' className='btn'>Book</Link>
          </div>
          <div className='card'>
            <h3>-VIP-</h3>
            <span className='bar'></span>
            <p className='USD'>100k $</p>
            <p>-14 days trip-</p>
            <p>-Views-</p>
            <p>-meals included-</p>
            <p>-Private 4 rooms Quarters-</p>
            <Link to='/Contact-Us' className='btn'>Book</Link>
          </div>
        </div>
      </div>
     
    </div>
  
  )
}

export default Prices