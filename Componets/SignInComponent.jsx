import React, { useContext, useRef } from 'react'
import { GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import BaseContext from '../context/Creator';

const SignInComponent = () => {

    const emailRef = useRef();
    const passRef = useRef();


    const context = useContext(BaseContext);

    const {signUpWithEmailAndPass , socialLogins} = context;

    const continueWithEmail = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value.trim();
        const password = passRef.current.value.trim();

        signUpWithEmailAndPass(email , password)
    }
  return (
    <>
      {/* <div className="socialLogins">
        <div className="googleLoginBtn">Continue With Google</div>
        <div className="facebookLoginBtn">Continue With Facebook</div>
        <div className="twitterLoginBtn">Continue With Twitter</div>
      </div>
      <h3 className="orSeparator">OR</h3>
      <form className="emailLoginForm" onSubmit={continueWithEmail}>
        <input type="email" ref={emailRef} name="email" id="email" placeholder="email" required/>
        <input type="password" ref={passRef} name="password" id="password" placeholder="new password" required/>
        <input type="submit" value="Create Account" className="startAuthBtn"/>
      </form> */}


<div className="formCenter">
        <form className="formFields" onSubmit={continueWithEmail}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              ref={emailRef}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              ref={passRef}
            />
          </div>

          <div className="formField">
            <button type='submit' className="formFieldButton">Create Account</button>{" "}
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <GoogleLoginButton onClick={() => socialLogins("google")} >
              <span>Sign In With Google</span>
              </GoogleLoginButton>
            </div>

            <div className="instagramButton">
              <TwitterLoginButton onClick={() => socialLogins("twitter")} >
                <span>Sign In With Google</span>
              </TwitterLoginButton>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignInComponent