import React, { Component } from 'react';
import {connect} from "react-redux";
import {submit_user} from "../actions/userActions"

class SignupForm extends Component {
  state = {
      name: "",
      email: "",
      password: "",
      username: "",
      acknowledge: false,
      errors: []
  };

  handleInput = (e) => {
    if(e.target.name === "acknowledge"){
        this.setState({
            acknowledge: e.target.checked
        })
    } else {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const {name, password, email} = this.state;
      const userData = {
          name, 
          email,
          password,
          passwordConfirmation: password
      };
      console.log(userData);
      this.props.submitUser(userData).then(response => {
          if(this.props.user.errors){
              this.setState({
                  errors: this.props.user.errors
              })
          }
          if(!this.state.acknowledge){
              this.setState({
                  errors: this.state.errors.concat("Please agree to Terms and Conditions")
              })
          }
      })
  }

  errorDisplay = () => {
      const errorsList = this.state.errors
      if(errorsList.length > 0){
          return (
            <ul className="error-list">
               {errorsList.map((error, i) => {
                    return <li key={i}>{error}</li>
                })}
            </ul>
            )
      }
  }

  render() {
    return (
    <>
        {this.errorDisplay()}
        <form className="signup__right--form" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="full_name">Full Name <input type="text" name="name" id="full_name" placeholder="Full Name" onChange={e => this.handleInput(e)}/></label>
            <label htmlFor="email">Email <input type="text" name="email" id="email" placeholder="Email" onChange={e => this.handleInput(e)}/></label>
            <label htmlFor="username">Username <input type="text" name="username" id="username" placeholder="Username" onChange={e => this.handleInput(e)}/></label>
            <label htmlFor="password">Password <input type="password" name="password" id="password" placeholder="Password" onChange={e => this.handleInput(e)}/></label>
            <label htmlFor="acknowledge">
                <input type="checkbox" name="acknowledge" id="acknowledge" onChange={e => this.handleInput(e)}/>
                <p>Creating an account means you have read and accept our <a href="#">Privacy Policy</a> and <a href="#">Terms and Condition</a></p>
            </label>
            <button onClick={e => this.handleSubmit(e)}>Create an account</button>
        </form>
    </>
    )
  }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitUser: (data) => {
            return dispatch(submit_user(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
