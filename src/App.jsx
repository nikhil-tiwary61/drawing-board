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
      {/* <h1>DrawBoard App</h1> */}
      <div id="components">
        <ToolBar changeColor={changeColor} />
        <Canvas currentColor={currentColor} />
      </div>
    </>
  );
}

export default App;
