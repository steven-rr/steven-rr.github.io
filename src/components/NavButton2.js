import React, {useState} from 'react'
import NavButton2CSS from "./NavButton2.module.css"
const NavButton2 = ({menuOpen, onClick, fade, onEnd}) => {

    // const[state, setState] = useState({menuOpen: false, fade: false});
    // //toggle menu click state.
    //  const handleMenuClick = () => {
    //          setState( currentState => {
    //          return { ...currentState, menuOpen: !currentState.menuOpen}
    //          })
    // };

    return (
        <div className= {NavButton2CSS.navContainer}>
            <div className= {`${NavButton2CSS.menuButtnContainer}  `} onClick={onClick}  >
                <div className={NavButton2CSS.menuButtn}>
                    <div className= {`${NavButton2CSS.menuButtnTop} ${menuOpen ? NavButton2CSS.menuButtnTopActive : '' } `}> </div> 
                    <div className= {`${NavButton2CSS.menuButtnBottom}  ${menuOpen ? NavButton2CSS.menuButtnBottomActive : '' } `}> </div> 
                </div>
            </div>
        </div>
    )
}

export default NavButton2
