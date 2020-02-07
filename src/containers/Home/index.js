import React, { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { helloThunk }from "./redux/thunk";
// import  images from "@kun-utils/images"
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Header } from "@kun-containers";

const Home = ({}) => {
  const dispatch = useDispatch();

  const [code, setCode] = useState('');

  const runHelloThunk = useCallback(() => {
    dispatch(helloThunk());
  },[dispatch]);

  const onShowCaptcha = () => {
    
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          'size': 'vinvisible',
          'callback': function(response) {
              console.log("success", response);
          },
          'expired-callback': function() {
              console.log("expired-callback");
          }
      });
  
      recaptchaVerifier.render().then(function(widgetId) {
          window.recaptchaWidgetId = widgetId;
      });

      firebase.auth().signInWithPhoneNumber('+84968343185', window.recaptchaVerifier)
      .then(function (confirmationResult) {
       console.log('confirmationResult', confirmationResult)
        window.confirmationResult = confirmationResult;
      }).catch(function (error) {
        console.log('error', error)
      });
  
  }

  useEffect(() => {
    runHelloThunk();
  }, [runHelloThunk]);

  const onVerify = () => {
    var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
    firebase.auth().signInWithCredential(credential);
  }

  return (
    <div>
      <Header />
      <div className="" id="recaptcha-container"></div>
      <button onClick={onShowCaptcha}>Send OTP</button>
      <input onChange={(e) => setCode(e.target.value)} type="text" placeholder="Enter OTP" />
      <button onClick={onVerify}> Verify</button>
      <h1>Kun Ve Chai</h1>
    </div>
  );
};

export default Home;
