import Button from "./components/Button";

function App() {
  const cronometro = () => {
    setInterval(document.getElementById("counter"), 1500000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>WELCOME TO YOUR POMODORO APP!</p>
        <Button onClick={cronometro()} />
        <div>
          <h1 id="counter"></h1>
        </div>
      </header>
    </div>
  );
}

export default App;
