import React, {useState} from 'react'
import Nav from './Nav'
import '../styles/navBar.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  



  return (
   
    <div className='header'>
      <Link to='/'><h1 className='logo'> SPACE TRVL</h1></Link>
        <header>
          
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                   <Nav links={[
                     {route:"/", text:" Home"},
                     {route:"/Shop", text:" Shop"},
                     {route:"/Prices", text:" Prices"},
                     {route:"/Contact-Us", text:" Contact-Us"},
                   ]}  className ='btn'/>
             </li>
         </ul>
        </header>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}></FaBars>)}
          
        </div>
        </div>
        
      
  )
}

export default Header