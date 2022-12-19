import React from 'react'
import './Hamburger.css'

export const Hamburger = (props) => {
    const {burgerHandle} = props
  return (
    <React.Fragment>
       <button id="burger" className="hamburger" onclick={burgerHandle}>
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
        </button>
    </React.Fragment>
  )
}
