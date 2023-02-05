import React from 'react'
import MobileNavbar from '../MobileNavbar';
import LargerScreenNav from '../LargerScreenNav';
import './Navbar.css';

export const Navbar = (props) => {
    const {openBurger, setOpenBurger} = props
  return (
<React.Fragment >
    <nav> 
        <div>
          <h3 className='logo'>Deenah</h3>
        </div>
        <LargerScreenNav/>
        <MobileNavbar openBurger={openBurger} setOpenBurger = {setOpenBurger}/>
    </nav>
</React.Fragment>
  )
}



export default Navbar
