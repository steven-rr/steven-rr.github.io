import Navbar from "./components/Navbar"
import NavButton from "./components/NavButton"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Timeline from "./pages/Timeline"
import Projects from "./pages/Projects"
import Footer from "./pages/Footer"
import Technologies from "./pages/Technologies"

import {library} from '@fortawesome/fontawesome-svg-core'
import React , {useState} from 'react'

import {fab} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
library.add(fab, faFacebookF)


function App() 
{
  // reset any relevant state when clicking a link in nav bar.
  const [value, setValue]=  useState(0);
  const submitHandler = e =>
  {
    setValue(currentValue=> currentValue+1);
    console.log("WOW")
  }


  return (
    <Router>
      <div className="App">
        <Home></Home>
        <About></About>
        <Timeline></Timeline>
        <Projects></Projects>
        <Technologies></Technologies>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
