import React from "react"
import { NavLinks } from "./NavLinks/NavLinks"
// import './MobileNavbar.css'

const MobileNavbar = (props) => {
  const {openBurger, setOpenBurger} = props

  const burgerHandle = () => {
    setOpenBurger(!openBurger)
  }
  return (
  <div className="mobile_nav">
  {openBurger ? <NavLinks/> : null }
  <button className="hamburger" onClick={() => burgerHandle()}>
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
    </button>
    
  </div>
  
  )
}

export default MobileNavbar;