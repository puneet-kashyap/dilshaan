import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Albums from './Components/Albums/Albums'
import Inquiry from './Components/Inquiry/Inquiry'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/Albums' component={Albums}/>
      <Route exact path='/Bookings' component={Inquiry}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route path="*" render={() => (<Redirect to="/"/>)} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
