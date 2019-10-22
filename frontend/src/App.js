// Task 19: Capstone Project - Compulsory Task 1 - Frontend - App.js

// This App.js file acts as a container for the Home, Music, Books, and Favourite Components.


// --- Imports ---

import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"

// --- Components ---

import homeLogo from './components/images/homeLogo.png';
import Home from './components/Home'
import Music from './components/Music'
import Books from './components/Books'
import Favourites from './components/Favourites'

// --- Rendered in App ---

class App extends React.Component {
  render(){
    return (
      <div>
      <Router>

        {/* -- Header -- */}

        <header id="homeHeader">
            <div id="homeHeaderContent">
                <h1 id="title">iMedia</h1>
                <h2 id="subTitle">The #1 music and e-book search engine</h2>
                <br/>
                <img id="homeLogo" src={homeLogo} alt="homeLogo"/>
              </div>
        </header>
        <div>

        {/* -- Navbar -- */}

          <nav id="navbar">
            <ul>
              <li>
                <Link className="navLink" to={'/Home'}>Home</Link>
              </li>
              <li>
                <Link className="navLink" to={'/Music'}>Search Music</Link>
              </li>
              <li>
                <Link className="navLink" to={'/Books'}>Search Books</Link>
              </li>
              <li>
                <Link className="navLink" to={'/Favourites'}>Favourites</Link>
              </li>
            </ul>
          </nav>

          {/* -- Routes to render components -- */}

          <Switch>
            <Route path='/Home' component={Home}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Books' component={Books}/>
            <Route path='/Favourites' component={Favourites}/>
            <Redirect from='/' to='/Home' />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
