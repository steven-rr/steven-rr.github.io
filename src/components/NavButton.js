import React, {useState} from 'react'
import NavButtonCSS from './NavButton.module.css'




const NavButton = ({menuOpen, onClick, fade, onEnd}) => {
     

    return (
        <div className = {`${NavButtonCSS.menuButtn} ${fade ? NavButtonCSS.transition: ''}` } onClick={onClick}>
			<div className={`${NavButtonCSS.menuButtnTop}  ${menuOpen ? NavButtonCSS.open: NavButtonCSS.closed} ` } onTransitionEnd={onEnd} ></div>
		</div>
    )
}

export default NavButton





