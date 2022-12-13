import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  TwitterAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/router"
import BaseContext from "./Creator";

const ContextProvider = ({ children }) => {
  const [User, setUser] = useState({});
  const route = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const socialLogins = (method) => {
    if (method === "google") {
      const provider = new GoogleAuthProvider();
      openPopup(provider);
    } else if (method === "fb") {
      alert("coming soong");
      return;

      // TODO : Create Facebook Login
      const provider = new FacebookAuthProvider();
      openPopup(provider);
    } else if (method === "twitter") {
      alert("coming soong");
      return;

      // TODO : Create Twitter Login
      const provider = new TwitterAuthProvider();
      openPopup(provider);
    } else {
      console.log("wrong method");
      return;
    }
  };

  const openPopup = (pro) => {
    signInWithPopup(auth, pro)
      .then((res) => {
        setUser(res.user);
        route.push("/user/profile")
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  const loginWithEmailAndPass = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((cred) => {
        setUser(cred.user);
        route.push("/user/profile")
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  const signUpWithEmailAndPass = (email , pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((cred) => {
        setUser(cred.user);
        route.push("/user/profile")
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };


  const logOut = async()=>{
    route.push("/")
    await auth.signOut();
  }
  return (
    <BaseContext.Provider value={{ socialLogins, User, loginWithEmailAndPass , logOut ,signUpWithEmailAndPass}}>
      {children}
    </BaseContext.Provider>
  );
};

export default ContextProvider;
