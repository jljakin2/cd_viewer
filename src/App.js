import { ReactDOM, render } from "react-dom";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import PointCloud from "./pointcloud";
export default function App() {
  return (
    <div id="canvas-container">
      <PointCloud />
    </div>
  )
}

render(<App />, document.getElementById("root"));