import Navbar from "./components/Navbar"
import NavButton from "./components/NavButton"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Work from "./pages/Work"
import {library} from '@fortawesome/fontawesome-svg-core'
import React , {useState} from 'react'

import {fab} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
library.add(fab, faFacebookF)


function App() 
{
  const name = 'Steven'
  // set menu open state.
  const [menuOpen, setMenuOpen] = useState(false);

  //toggle menu click state.
  const handleMenuClick = () => {
         setMenuOpen(prevState =>
            {
                 return !prevState;
             })
          console.log("hi")
          console.log(menuOpen)
            
     }
  
  // initialize desktop mode. 
  const desktopModeInit = () => {
      var desktopMode = true;
      if(window.innerWidth > 800)
      {
          desktopMode = true;
      }
      else
      {
          desktopMode = false;
      }
      return desktopMode;
  };
  
  // set desktkopMode.
  const [desktopMode, setDesktopMode] = useState(desktopModeInit);
  
  // add event listener and toggler.
  window.addEventListener('resize', desktopModeToggle);
  function desktopModeToggle()
  {
      
      if(window.innerWidth > 800)
      {
          setDesktopMode(() => {
              return true;
          })
      }
      else
      {
          setDesktopMode( () => {
              return false;
          })
      }
      return desktopMode;
  };

  return (
    <Router>
      <div className="App">
        <NavButton 
          menuOpen={menuOpen}
          onClick = {handleMenuClick}
          desktopMode = {desktopMode}
        />
        <Navbar/>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/about"  component = {About} />
          <Route path="/contact"  component = {Contact} />
          <Route path="/skills"  component = {Skills} />
          <Route path="/work"  component = {Work} />

        </Switch>
             </div>
    </Router>
  );
}

export default App;
