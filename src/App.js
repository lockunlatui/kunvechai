import React, { useEffect } from "react";
import { messaging } from "./firebase/push-notification";

import { Home } from "@kun-containers";

function App() {
  useEffect(() => {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log("token", token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", message =>
      console.log(message)
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Home />
    </div>
  );
}

export default App;
