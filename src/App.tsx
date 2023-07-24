import { StrictMode } from "react";
import "./App.css";

import { useRegisterSW } from "virtual:pwa-register/react";

const intervalMS = 10 * 1000;

function App() {
  useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          console.log("checking for new version...");
          r.update();
        }, intervalMS);
    },
  });

  return (
    <StrictMode>
      <h1>Loaded: {new Date().toUTCString()}</h1>
    </StrictMode>
  );
}

export default App;
