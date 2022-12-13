import React, { useContext, useRef } from "react";
import { GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import BaseContext from "../context/Creator";

const LoginComponent = () => {

    const context = useContext(BaseContext);
    const {socialLogins , loginWithEmailAndPass} = context;

    const emailRef = useRef();
    const passRef = useRef();

    const continueWithEmail = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value.trim();
        const pass = passRef.current.value.trim();
        console.log("Login");
        loginWithEmailAndPass(email , pass)
    }
  return (
    <>
      {/* <div className="socialLogins">
        <div className="googleLoginBtn" onClick={()=>socialLogins("google")}>Continue With Google</div>
        <div className="facebookLoginBtn" onClick={()=>socialLogins("fb")}>Continue With Facebook</div>
        <div className="twitterLoginBtn" onClick={()=>socialLogins("twitter")}>Continue With Twitter</div>
      </div>
      <h3 className="orSeparator">OR</h3>
      <form className="emailLoginForm" onSubmit={continueWithEmail}>
        <input type="email" ref={emailRef} name="email" id="email" placeholder="email" required/>
        <input type="password" ref={passRef} name="password" id="password" placeholder="password" required/>
        <input type="submit" value="Login" className="startAuthBtn"/>
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
            <button className="formFieldButton">Sign In</button>{" "}
            {/* <Link to="/" className="formFieldLink">
              Create an account
            </Link> */}
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <GoogleLoginButton onClick={() => socialLogins("google")} />
            </div>

            <div className="instagramButton">
              <TwitterLoginButton onClick={() => socialLogins("twitter")} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
