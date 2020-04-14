import React, { Component } from 'react';
import 'bootstrap';
import Menu from './components/Menu';
import Gfacturation from './components/Gfacturation';
import Gstock from './components/Gstock';
import Gtresorerie from './components/Gtresorerie';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Creecompte from './components/Creecompte';
import Entreprise from './components/Entreprise';

class App extends Component{
  render(){
    return (
      <Router> 
        <Menu/>  
        <Route path="/gfacturation" component={Gfacturation}/>        
        <Route path="/gstock" component={Gstock}/>
        <Route path="/gtresorerie" component={Gtresorerie}/>
        <Route path="/creecompte" component={Creecompte}/>        
        <Route path="/entreprise" component={Entreprise}/>
      </Router>
    );
  }
}

export default App;
