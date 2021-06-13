import React, { useState } from "react";

export default function Timer() {
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
      <p>WELCOME TO YOUR POMODORO APP!</p>
      <button type="submit" data-testid="button_test" onClick={timer}>
        {" "}
        INICIAR POMODORO{" "}
      </button>
      <h1> {`Tempo Restante: ${time}`} </h1>
    </div>
  );
}
