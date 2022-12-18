import React from 'react'
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';

import "bootstrap/dist/css/bootstrap.css";
import Home from './component/Home/Home';
import './App.css'

const App = () => {
  return (
    <>
    <Router>

         {/* <Navbar/> */}
         <Home/>
      {/* <Switch>
        <Route exact path ="/" >
        </Route>
      </Switch> */}

    </Router>
    </>
  )
}

export default App;