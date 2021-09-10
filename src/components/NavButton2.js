import React, {useState} from 'react'
import NavButton2CSS from "./NavButton2.module.css"
const NavButton2 = () => {
    const[state, setState] = useState({menuOpen: false, fade: false});
    //toggle menu click state.
     const handleMenuClick = () => {
             setState( currentState => {
             return { ...currentState, menuOpen: !currentState.menuOpen}
             })
    };

    return (
        <div onClick={handleMenuClick} className= {`${NavButton2CSS.menuButtnContainer}  `}  >
            <div className={NavButton2CSS.menuButtn}>
                <div className= {`${NavButton2CSS.menuButtnTop} ${state.menuOpen ? NavButton2CSS.menuButtnTopActive : '' } `}> </div> 
                <div className= {`${NavButton2CSS.menuButtnBottom}  ${state.menuOpen ? NavButton2CSS.menuButtnBottomActive : '' } `}> </div> 
            </div>
        </div>
    )
}

export default NavButton2
