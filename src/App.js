import React, { Component } from 'react';
import './App.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)
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
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
 console.log ("Name: ", name );
 console.log("value: ", value);
    switch (name) {

      case "firstName":
        formErrors.firstName = 
        value.length < 3 && value.length > 0 
        ? "minimum 3 characters required"
        : "";
        break; 
        case "lastName":
        formErrors.lastName = 
        value.length < 3 && value.length > 0 
        ? "minimum 3 characters required"
        : "";
        break; 
        case "email":
        formErrors.email = 
        emailRegex.test(value) && value.length > 0 
        ? ""
        : "invalid email address"
        break;
        case "password":
        formErrors.password = 
        value.length < 6 && value.length > 0 
        ? "minimum 6 characters required"
        : "";
        break; 
        default:
        break; 

    }
    }


  render() {
  return (
    <div className="wrapper">
      <div className="form-validation">
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input 
                className="" 
                placeholder="First Name Here" 
                name="firstName" 
                noValidate 
                onChange={this.handleChange}/>
          </div> 
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input 
                className="" 
                placeholder="Last Name Here" 
                name="lastName" 
                noValidate 
                onChange={this.handleChange}/>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input 
                className="" 
                placeholder="Email Here" 
                name="email" 
                noValidate 
                onChange={this.handleChange}/>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input 
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
