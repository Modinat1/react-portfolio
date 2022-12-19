import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
import { NavLinks } from '../NavLinks/NavLinks'
import './Navbar.css'
export const Navbar = (props) => {
    const {openBurger, burgerHandle} = props
  return (
<React.Fragment>
    <nav id="navbar"> 
        <div>
          <h3>Deenah</h3>
        </div>
        {openBurger ? <NavLinks/> : null}
        <Hamburger burgerHandle = {burgerHandle}/>
    </nav>
</React.Fragment>
  )
}
