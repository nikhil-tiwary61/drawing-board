import "./App.css";
import { useState } from "react";
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";

function App() {
  const [currentColor, setCurrentColor] = useState("#000000");

  function changeColor(color) {
    setCurrentColor(color);
    console.log(`the color was changed to ${color}`);
  }

  return (
    <>
      <div>
        <h1>DrawBoard App</h1>
        <Canvas currentColor={currentColor} />
        <ToolBar changeColor={changeColor} />
      </div>
    </>
  );
}

export default App;
