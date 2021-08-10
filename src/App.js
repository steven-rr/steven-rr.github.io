import Navbar from "./components/Navbar"
import NavButton from "./components/NavButton"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Work from "./pages/Work"
import {library} from '@fortawesome/fontawesome-svg-core'

import {fab} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
library.add(fab, faFacebookF)


function App() 
{
  const name = 'Steven'
  return (
    <Router>
      <div className="App">
        <NavButton/>
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
