import "./App.css";
import { useState } from "react";
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";

function App() {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [isErasing, setIsErasing] = useState(false);
  const [fontSize, setFontSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(40);

  function changeColor(color) {
    setCurrentColor(color);
  }
  function changeEraser(boolean) {
    boolean ? setIsErasing(true) : setIsErasing(false);
  }
  function changeFontSize(e) {
    setFontSize(e.target.value);
  }
  function changeEraserSize(e) {
    setEraserSize(e.target.value);
  }

  return (
    <>
      {/* <h1>DrawBoard App</h1> */}
      <div id="components">
        <ToolBar
          changeColor={changeColor}
          changeEraser={changeEraser}
          fontSize={fontSize}
          changeFontSize={changeFontSize}
          eraserSize={eraserSize}
          changeEraserSize={changeEraserSize}
        />
        <Canvas
          currentColor={currentColor}
          isErasing={isErasing}
          fontSize={fontSize}
          eraserSize={eraserSize}
        />
      </div>
    </>
  );
}

export default App;
