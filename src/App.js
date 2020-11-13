import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth';
import Feed from './components/Feed';
import PostForm from './components/PostForm';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/createpost" component={PostForm}/>
        <Route path="/feed" component={Feed}/>
        <Route path="/users/:id" component={UserProfile}/>
      </Switch>
    </div>
  );
}

export default App;
