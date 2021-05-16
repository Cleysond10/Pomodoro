import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "./components/Button/Button";

function App() {
  const [time, setTime] = useState(25);

  const timer = () => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    console.log(time);
  };

  return (
    <Box border={1} p={20}>
      <p>WELCOME TO YOUR POMODORO APP!</p>
      <Button type="button" onClick={timer()}>
        {" "}
        INICIAR POMODORO{" "}
      </Button>
      <h1> {`Tempo Restante: ${time}`} </h1>
    </Box>
  );
}

export default App;
