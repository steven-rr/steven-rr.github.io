import React , {useState} from 'react'
import './NavButton.css'



const NavButton = ({menuOpen, onClick, desktopMode}) => {
    return (
        <div className = {`menu-buttn ${menuOpen ? 'open': ''} ${desktopMode ? '': 'transition'}` } onClick={onClick} >
			<div className={`menu-buttn-top ${desktopMode ? '': 'transition'}` }></div>
		</div>
    )
}

export default NavButton

