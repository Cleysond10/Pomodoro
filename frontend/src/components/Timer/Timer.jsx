import React, { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(25);

  const handleTime = (count) => {
    setTimeout(() => {
      if(count > 0){
        setTime(count - 1);
        return handleTime(count - 1);
      }
    }, 1000);
  }
  
  return (
    <div>
      <p>WELCOME TO YOUR POMODORO APP!</p>
      <button type="submit" data-testid="button_test" onClick={() => handleTime(time)}>
        {" "}
        INICIAR POMODORO{" "}
      </button>
      <h1> {`Tempo Restante: ${time}`} </h1>
    </div>
  );
}
