import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
    <Switch>
      <Route exact path='/' component={App}/>
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
