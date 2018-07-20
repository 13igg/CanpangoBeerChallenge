import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import 'semantic-ui-css/semantic.min.css';

import Index from './Views/index';
import beerDetails from './Views/beerDetails';
import addBeer from './Views/addBeer';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/beerdetails/:beerId" component={beerDetails} />        
        <Route path="/addbeer" component={addBeer} />  
  
        {/*<Route component={NotFound} status={404} /> */}
      </Switch>
    </Router>,
    document.getElementById('root'),
  );
registerServiceWorker();
