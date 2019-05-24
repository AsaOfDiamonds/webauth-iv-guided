import React from "react";
import axios from "axios";

//tell axios where to find the api
axios.defaults.baseURL = 'http://localhost/api';

// interceptors can execute code before a request happens, or when a response comes in

axios.interceptors.request.use(
  function(options) {
    // this function has access to the request options passed to axios
    //if we do axios.get('/api', reqOptions)
    //axios will pass the reqOptions object ass the first argument
    // to this function
    // read the token from localStorage and attach it to the request as teh auth header

    options.headers.authorization = localStorage.getItem('jwt'); //
    // now any component rednered by this HoC will attach the token automatically

    return options; // we must return the modified options back to axios
  },
  function(error) {
    //do something with the error
    return Promise.reject(error);
 });

 export default function(Component) {
   return class Authenticated extends React.Component {
     render() {
       const token = localStorage.getItem('jwt');

       const notLoggedIn = <div>Please login to see the users</div>;
       //if there is no token, then show a message to the user

       return <div>
       {token ? <Component {...this.props} /> : notLoggedIn}
       </div>;
     }
   }
 }