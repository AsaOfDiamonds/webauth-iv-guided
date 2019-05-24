import React from 'react';
import axios from "axios";

//let's use that HoC
import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
state = {
  users: [],
};

render() {
  return(
    <div>
    <h2>List of Users</h2>

    <ul>
      {this.state.users.map(u => (
        <li key={u.id}>{u.username}</li>
      ))}
    </ul>
  </div>
  )
  
}
componentDidMount() {
  axios.get('/users')
  .then(res => {
    this.setState({ users: res.data });
  })
}

}

export default requiresAuth(Users);