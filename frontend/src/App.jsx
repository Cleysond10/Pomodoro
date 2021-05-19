import React from "react";
import Box from "@material-ui/core/Box";
import Timer from "./components/Timer";
import Camera from "./components/Camera/index";

function App() {
  return (
    <div>
      <Box border={1} p={20}>
        <Timer></Timer>
      </Box>
      <Box border={1} p={20}>
        <Camera></Camera>
      </Box>
    </div>
  );
}

export default App;
