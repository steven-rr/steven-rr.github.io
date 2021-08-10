import React , {useState} from 'react'
import SRicon from '../SR-icon.png'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







const Navbar = ({fade, menuOpen, onClick}) => {
    return (
        <nav className={`navMenu ${menuOpen ? 'open' : '' } ${fade ? 'transition': ''}`}>
            {/*insert steve website icon here*/}
             <div className="nav-SR-icon">
                <Link to="/"  className="nav-SR-icon-a">
                    <img className="nav-SR-icon-img" src={SRicon}/>  
                </Link>     
            </div>

            {/*insert nav bar main items here*/}
            <div className="nav-main">
                <ul className = "nav-main-ul">
                    <li className = "nav-main-li"><NavLink  exact to="/"  activeClassName="nav-main-a-active" className="nav-main-a" onClick={onClick}> HOME </NavLink></li>
                    <li className = "nav-main-li"><NavLink  to="/about"  activeClassName="nav-main-a-active" className="nav-main-a" onClick={onClick}> ABOUT </NavLink></li>
                    <li className = "nav-main-li"><NavLink  to="/skills" activeClassName="nav-main-a-active" className="nav-main-a" onClick={onClick}> SKILLS </NavLink></li>
                    <li className = "nav-main-li"><NavLink  to="/work"  activeClassName="nav-main-a-active" className="nav-main-a" onClick={onClick}> WORK </NavLink></li>
                    <li className = "nav-main-li-end"><NavLink to="/contact" activeClassName="nav-main-a-active" className="nav-main-a" onClick={onClick}> CONTACT </NavLink></li>
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
       
)
}

export default Navbar