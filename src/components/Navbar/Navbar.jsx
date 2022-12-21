import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
import { NavLinks } from '../NavLinks/NavLinks'
import './Navbar.css';

export const Navbar = (props) => {
    const {openBurger, burgerHandle} = props
  return (
<React.Fragment>
    <nav> 
        <div>
          <h3 className='logo'>Deenah</h3>
        </div>
        {openBurger ? <NavLinks/> : null}
        {/* <NavLinks/> */}
        <Hamburger burgerHandle = {burgerHandle}/>
    </nav>
</React.Fragment>
  )
}
