import React, { Component } from 'react';


class SignupForm extends Component {
  state = {
      full_name: "",
      email: "",
      password: "",
      username: ""
  };

  handleInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form className="signup__right--form" >
        <label htmlFor="full_name">Full Name <input type="text" name="full_name" id="full_name" placeholder="Full Name" onChange={e => this.handleInput(e)}/></label>
        <label htmlFor="email">Email <input type="text" name="email" id="email" placeholder="Email" onChange={e => this.handleInput(e)}/></label>
        <label htmlFor="username">Username <input type="text" name="username" id="username" placeholder="Username" onChange={e => this.handleInput(e)}/></label>
        <label htmlFor="password">Password <input type="password" name="password" id="password" placeholder="Password" onChange={e => this.handleInput(e)}/></label>
        <label htmlFor="acknowledge">
            <input type="checkbox" name="acknowledge" id="acknowledge" />
            <p>Creating an account means you have read and accept our <a href="#">Privacy Policy</a> and <a href="#">Terms and Condition</a></p>
        </label>
        <button>Create an account</button>
      </form>
    )
  }
}

export default SignupForm;
