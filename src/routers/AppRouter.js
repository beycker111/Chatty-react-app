import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
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
