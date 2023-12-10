import "../styles/ToolBar.css";
import pen from "../assets/pen.png";
import eraser from "../assets/eraser.png";
import { HexColorPicker } from "react-colorful";

export default function ToolBar({
  changeColor,
  fontSize,
  changeFontSize,
  eraserSize,
  changeEraserSize,
  changeShape,
  changeTool,
}) {
  return (
    <div className="toolbox">
      <h1>DrawBoard</h1>
      <HexColorPicker onChange={changeColor} />
      <button
        onClick={() => {
          changeTool("Pen");
          changeShape("FreeStyle");
        }}
      >
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
      <button
        onClick={() => {
          changeTool("Eraser");
          changeShape(null);
        }}
      >
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
        <button
          onClick={() => {
            changeShape("FreeStyle");
            changeTool("Pen");
          }}
        >
          Line
        </button>
        <button
          onClick={() => {
            changeShape("Straight Line");
            changeTool("Pen");
          }}
        >
          Straight Line
        </button>
        <button
          onClick={() => {
            changeShape("Rectangle");
            changeTool("Pen");
          }}
        >
          Rectangle
        </button>
        <button
          onClick={() => {
            changeShape("Circle");
            changeTool("Pen");
          }}
        >
          Circle
        </button>
      </div>
    </div>
  );
}
