import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth';
import Feed from './components/Feed';
import Form from './components/Form';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/createpost" component={Form}/>
        <Route path="/feed" component={Feed}/>
      </Switch>
    </div>
  );
}

export default App;
