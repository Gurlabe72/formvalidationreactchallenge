import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
                name="password" 
                noValidate 
                onChange={this.handleChange}/>
          </div>
        </form> 
      </div>
    </div>
  );
}
}

export default App;
