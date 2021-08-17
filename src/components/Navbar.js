import React, {useState} from 'react'
import SRicon from '../SR-icon.png'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import NavButton from './NavButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







const Navbar = ({onClick}) => {
    
      // reset state when clicking a link in nav bar.
    const handleOnClick = () =>
    {
        onClick();
        setState( currentState => {
            return { ...currentState, fade: false, menuOpen: false}
            })
    }

    // set menu bar state.
    const[state, setState] = useState({menuOpen: false, fade: true});

    //toggle menu click state.
    const handleMenuClick = () => {
            setState( currentState => {
            return { ...currentState, fade: true, menuOpen: !currentState.menuOpen}
            })
        };
    // when transition ends, end transition (set fade to false)
    const onTransitionEnd = (e) => {
            if(e.pseudoElement == "::after")
            {
                setState(currentState => {
                return {...currentState, fade: false}
                })
            }
            
            }; 


    return (
        <div>
        <nav className={`navMenu ${state.menuOpen ? 'open' : '' } ${state.fade ? 'transition': ''}`}>
            {/*insert steve website icon here*/}
             <div className="nav-SR-icon">
                <Link to="/"  className="nav-SR-icon-a">
                    <img className="nav-SR-icon-img" src={SRicon}/>  
                </Link>     
            </div>

            {/*insert nav bar main items here*/}
            <div className="nav-main">
                <ul className = "nav-main-ul">
                    <li className = "nav-main-li"><NavLink  exact to="/"  activeClassName="nav-main-a-active" className="nav-main-a" onClick={handleOnClick}> HOME </NavLink></li>
                    <li className = "nav-main-li"><NavLink  to="/about"  activeClassName="nav-main-a-active" className="nav-main-a" onClick={handleOnClick}> ABOUT </NavLink></li>
                    <li className = "nav-main-li"><NavLink  to="/skills" activeClassName="nav-main-a-active" className="nav-main-a" onClick={handleOnClick}> SKILLS </NavLink></li>
                    <li className = "nav-main-li"><NavLink  to="/work"  activeClassName="nav-main-a-active" className="nav-main-a" onClick={handleOnClick}> WORK </NavLink></li>
                    <li className = "nav-main-li-end"><NavLink to="/contact" activeClassName="nav-main-a-active" className="nav-main-a" onClick={handleOnClick}> CONTACT </NavLink></li>
                </ul>

            </div>
            


            {/*insert social media items here*/}
			<div className = "social-media-main">
				<ul className = "social-media-main-ul">
					<li className= "social-media-main-li"><a className="social-media-main-a" href = "https://www.facebook.com/stevenator9001/" ><FontAwesomeIcon icon={['fab','facebook-f']} size='lg'/></a></li>
                    <li className= "social-media-main-li"><a className="social-media-main-a" href = "https://github.com/steven-rr" ><FontAwesomeIcon icon={['fab','github']} size='lg'/></a></li>
					<li className= "social-media-main-li"><a className="social-media-main-a" href = "https://www.linkedin.com/in/steven-rivadeneira" ><FontAwesomeIcon icon={['fab','linkedin-in']} size='lg'/></a></li>
					<li className= "social-media-main-li"><a className="social-media-main-a" href = "https://www.instagram.com/steven__rr/" ><FontAwesomeIcon icon={['fab','instagram']} size='lg'/></a></li>
				</ul>
			</div>
        </nav>
        {/* implement the nav button */}
        <NavButton 
                menuOpen={state.menuOpen}
                onClick={handleMenuClick}
                fade={state.fade}
                onEnd={onTransitionEnd}
        />
       </div>
)
}

export default Navbar