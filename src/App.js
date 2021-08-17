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


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
library.add(fab, faFacebookF)


function App() 
{
  // reset state when clicking a link in nav bar.
  const [value, setValue]=  useState(0);
  const submitHandler = e =>
  {
    setState( currentState => {
      return { ...currentState, fade: false, menuOpen: false}
    })
    setValue(value=> value+1);
    console.log("WOW")
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
    <Router>
      <div className="App">
        <NavButton 
          menuOpen={state.menuOpen}
          onClick={handleMenuClick}
          fade={state.fade}
          onEnd={onTransitionEnd}
        />
        <Navbar
          fade = {state.fade}
          menuOpen={state.menuOpen}
          onClick ={submitHandler}
        />
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
