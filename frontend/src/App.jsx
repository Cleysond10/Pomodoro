import { Container } from "@material-ui/core";
import Button from "./components/Button/Button";

function App() {
  const timeout = 1500000;

  const timer = () => {
    for (let time = timeout; time > 0; time--) {
      console.log(time);
    }
  };

  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <p>WELCOME TO YOUR POMODORO APP!</p>
          <Button onClick={timer} />
          <div id="counter"></div>
        </header>
      </div>
    </Container>
  );
}

export default App;
