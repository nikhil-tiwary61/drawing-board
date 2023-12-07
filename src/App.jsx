import "./App.css";
import { useState } from "react";
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";

function App() {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [isErasing, setIsErasing] = useState(false);

  function changeColor(color) {
    setCurrentColor(color);
  }
  function changeEraser(boolean) {
    boolean ? setIsErasing(true) : setIsErasing(false);
  }

  return (
    <>
      {/* <h1>DrawBoard App</h1> */}
      <div id="components">
        <ToolBar changeColor={changeColor} changeEraser={changeEraser} />
        <Canvas currentColor={currentColor} isErasing={isErasing} />
      </div>
    </>
  );
}

export default App;
