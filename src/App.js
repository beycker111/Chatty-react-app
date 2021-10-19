import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import { auth } from './services/firebase';
import PrivateRoute from './routers/PrivateRoute'
import PublicRoute from './routers/PublicRoute'

class App extends Component{

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }


  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat} />
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup} />
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login} />
        </Switch>
      </Router>
    );
  }
}

/*
function App() {
  return this.state.loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat} />
        <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup} />
        <PublicRoutete path="/login" authenticated={this.state.authenticated} component={Login} />
      </Switch>
    </Router>
  );
}
*/

export default App;
