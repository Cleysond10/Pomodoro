import React, { useState } from "react";
import Box from "@material-ui/core/Box";

function Camera() {
  const [source, setSource] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <div className="camera">
      <h1>Capture your image</h1>
      {source && (
        <Box display="flex" justifyContent="center" border={1}>
          <img src={source} alt={"snap"}></img>
        </Box>
      )}
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
    </div>
  );
}
export default Camera;
