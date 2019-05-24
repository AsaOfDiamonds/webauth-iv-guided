import React from "react";
import axios from "axios";


class Login extends React.Component {
  state = {
    username: 'sam',
    password: 'pass'
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input 
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
            <div>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  //class methods
  handleInputChange = event => {
    const {name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    // the endpoint could come from an environment variable
    //const endpoint = `${process.env.API URL}/api/auth/login`;
    const endpoint = 'http://localhost:5000/api/auth/login';

    axios.post(endpoint, this.state)
    .then(res => {
      //this is the new part - local storage
      localStorage.setItem('jwt', res.data.token);
    })
    .catch (err => {
      console.error(err);
    })
  }

}

export default Login;