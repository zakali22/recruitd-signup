import React, { Component } from 'react'

class SignupForm extends Component {
  render() {
    return (
      <form className="signup__right--form">
        <label htmlFor="full_name">Full Name <input type="text" name="full-name" id="full-name" placeholder="Full Name"/></label>
        <label htmlFor="email">Email <input type="text" name="email" id="email" placeholder="Email"/></label>
        <label htmlFor="username">Username <input type="text" name="username" id="username" placeholder="Username"/></label>
        <label htmlFor="password">Password <input type="password" name="password" id="password" placeholder="Password"/></label>
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
