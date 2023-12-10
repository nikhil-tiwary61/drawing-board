import "../styles/ToolBar.css";
import pen from "../assets/pen.png";
import eraser from "../assets/eraser.png";
import { HexColorPicker } from "react-colorful";

export default function ToolBar({
  changeColor,
  changeEraser,
  fontSize,
  changeFontSize,
  eraserSize,
  changeEraserSize,
  changeShape,
}) {
  return (
    <div className="toolbox">
      <h1>DrawBoard</h1>
      <HexColorPicker onChange={changeColor} />
      <button onClick={() => changeEraser(false)}>
        <img src={pen} alt="Pen" />
      </button>
      <div>
        <input
          type="range"
          min={1}
          max={30}
          value={fontSize}
          onChange={changeFontSize}
        />
        {fontSize}
      </div>
      <button onClick={() => changeEraser(true)}>
        <img src={eraser} alt="Eraser" />
      </button>
      <div>
        <input
          type="range"
          min={20}
          max={80}
          value={eraserSize}
          onChange={changeEraserSize}
        />
        {eraserSize}
      </div>
      <div>
        <button onClick={() => changeShape("FreeStyle")}>Line</button>
        <button onClick={() => changeShape("Rectangle")}>Rectangle</button>
        <button onClick={() => changeShape("Circle")}>Circle</button>
      </div>
    </div>
  );
}
