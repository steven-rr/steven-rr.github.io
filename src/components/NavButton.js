import React, {useState} from 'react'
import './NavButton.modules.css'




const NavButton = ({menuOpen, onClick, fade, onEnd}) => {
     

    return (
        <div className = {`menu-buttn ${fade ? 'transition': ''}` } onClick={onClick}>
			<div className={`menu-buttn-top  ${menuOpen ? 'open': 'closed'} ` } onTransitionEnd={onEnd} ></div>
		</div>
    )
}

export default NavButton





