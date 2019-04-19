import React, { Component } from 'react';
import SignupForm from "./SignupForm";
import {connect} from "react-redux";

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
            {!this.props.user.login_status ? (
              <>
                <p>Already have an account? <a href="#" style={{"textDecoration": "underline", "fontSize": "1.5rem"}}>Sign in here</a></p>
                <hr />
                <SignupForm />
              </>
            ) : (
              <>
                <div className="login_success">
                  <p>Thank you! You have successfully registered</p>
                </div>
              </>
            ) } 
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Signup);
