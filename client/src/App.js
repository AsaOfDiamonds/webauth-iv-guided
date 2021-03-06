import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Login from './login/login';
import Users from './users/Users';

class App extends React.Component {
  render() {
    return (
      <div>
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp; | &nbsp;
          <button onClick={this.logout}>Logout</button>
        </nav>
      </header>

      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </div>
    )
  }

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }
}

export default withRouter(App);




