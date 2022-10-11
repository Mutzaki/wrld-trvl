import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = ({links}) => {
  return (
   <ul className="navBar">
     {links.map((l, i) => {
        return(
            <NavLink key={i} to={l.route} className={({ isActive }) => isActive ? "isActive" : ""}>
                {l.text}
            </NavLink>
        )
     })}
   </ul>
  )
}

export default Nav