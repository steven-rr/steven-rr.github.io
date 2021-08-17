import React from 'react'
import './NavButton.modules.css'




const NavButton = ({menuOpen, onClick, fade, onEnd}) => {
    return (
        <div className = {`menu-buttn ${menuOpen ? 'open': ''} ${fade ? 'transition': ''}` } onTransitionEnd={onEnd} onClick={onClick}>
			<div className={`menu-buttn-top ${fade ? 'transition': ''}` }></div>
		</div>
    )
}

export default NavButton





