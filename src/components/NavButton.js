import React , {useState} from 'react'
import './NavButton.css'




const NavButton = ({menuOpen, onClick, desktopMode, fade, onEnd}) => {
    return (
        <div className = {`menu-buttn ${menuOpen ? 'open': ''} ${fade ? 'transition': ''}` } onTransitionEnd={onEnd} onClick={onClick}>
			<div className={`menu-buttn-top ${fade ? 'transition': ''}` }></div>
		</div>
    )
}

export default NavButton



// import React , {useState} from 'react'
// import './NavButton.css'




// const NavButton = ({menuOpen, onClick, desktopMode}) => {
//     const [fade, setFade]=  useState(false);
    
//     return (
//         <div className = {`menu-buttn ${menuOpen ? 'open': ''} ${fade ? 'transition': ''}` } onClick={onClick} onTransitionEnd={() => {setFade(false); console.log("helloo",fade); }} >
// 			<div className={`menu-buttn-top ${desktopMode ? '': 'transition'}` }></div>
// 		</div>
//     )
// }

// export default NavButton

