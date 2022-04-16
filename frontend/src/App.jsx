import React from "react";
import Box from "@material-ui/core/Box";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div>
      <Box border={1} p={20}>
        <Timer></Timer>
      </Box>
    </div>
  );
}

export default App;
