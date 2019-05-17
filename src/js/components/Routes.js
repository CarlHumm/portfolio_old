
// Dependancies
import React from 'react';
import {Route, Switch} from "react-router-dom";

// Page Components
import HomePage from './Home';
import SinglePage from './Single';
import NoMatch from './404';

const Routes = () => {
  return(
    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/projects/:slug" exact component={SinglePage}/>
    <Route component={NoMatch}/>
    </Switch>
  )
}

export default Routes;
