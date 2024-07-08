import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import POIList from './components/POI/POIList';
import EventList from './components/Events/EventList';
import VideoList from './components/Videos/VideoList';
import Donation from './components/Donation';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/pois" component={POIList} />
        <Route path="/events" component={EventList} />
        <Route path="/videos" component={VideoList} />
        <Route path="/donate" component={Donation} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
