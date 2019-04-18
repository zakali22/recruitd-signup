import React, { Component } from 'react';
import SignupForm from "./SignupForm";

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="signup__left">
          <img src="/images/top.png" alt="Top left image" id="imgLeft"/>
          <img src="/images/logo.png" alt="Recruitd image" className="signup__left--logo"/>
          <img src="/images/bottom.png" alt="Bottom right image" id="imgRight" />
        </div>
        <div className="signup__right">
          <div className="signup__right--container"> 
            <p>Already have an account? <a href="#" style={{"textDecoration": "underline", "fontSize": "1.5rem"}}>Sign in here</a></p>
            <hr />
            <SignupForm /> 
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
