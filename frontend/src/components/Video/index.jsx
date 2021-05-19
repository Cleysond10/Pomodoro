import React from "react";

export default function Camera() {
  const webcamElement = document.getElementById("webcam");
  const canvasElement = document.getElementById("canvas");

  const startCam = () => {};

  return (
    <div>
      <h1>Start your Camera</h1>

      <video id="webcam" autoplay playsinline width="200" height="100"></video>
      <canvas id="canvas" class="d-none"></canvas>

      <button id="startbutton" onClick={startCam()}>
        {" "}
        TAKE PHOTO{" "}
      </button>
    </div>
  );
}
