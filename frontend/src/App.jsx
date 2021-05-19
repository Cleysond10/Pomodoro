import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Camera from "./components/Camera/index";
// import Button from "./components/Button/Button";

function App() {
  const [time, setTime] = useState(25);

  const timer = () => {
    if (time > 0) {
      timeout();
    }
    console.log(time);
  };

  const timeout = () => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  };

  return (
    <div>
      <Box border={1} p={20}>
        <p>WELCOME TO YOUR POMODORO APP!</p>
        <button type="submit" onClick={timer}>
          {" "}
          INICIAR POMODORO{" "}
        </button>
        <h1> {`Tempo Restante: ${time}`} </h1>
      </Box>
      <Box border={1} p={20}>
        <Camera></Camera>
      </Box>
    </div>
  );
}

export default App;
