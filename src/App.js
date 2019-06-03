import React, { Component } from 'react';
import './App.css';

const formValid = formErrors => {
  let valid = true;

   Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
   });
   return valid;
}
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null, 
      fromErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }


  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state.fromErrors)) {
      console.log(`
      
      --SUBMITTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `)
    } else {
      console.error('FORM INVALID - SHOW ERROR MESSAGE')
    }
  };


  render() {
  return (
    <div className="wrapper">
      <div className="form-validation">
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                className="" 
                placeholder="First Name Here" 
                name="firstName" 
                noValidate 
                onChange={this.handleChange}/>
          </div> 
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                className="" 
                placeholder="Last Name Here" 
                name="lastName" 
                noValidate 
                onChange={this.handleChange}/>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                className="" 
                placeholder="Email Here" 
                name="email" 
                noValidate 
                onChange={this.handleChange}/>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input 
                type="text" 
                className="" 
                placeholder="Password Here" 
                type="password"
                name="password" 
                noValidate 
                onChange={this.handleChange}/>
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have An Acoount?</small>

          </div>
        </form> 
      </div>
    </div>
  );
}
}

export default App;
