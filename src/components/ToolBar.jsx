import "../styles/ToolBar.css";
import pen from "../assets/pen.png";
import eraser from "../assets/eraser.png";
import freestyle_line from "../assets/freestyle-line.png";
import straight_line from "../assets/straight-line.png";
import empty_rectangle from "../assets/empty-rectangle.png";
import empty_circle from "../assets/empty-circle.png";
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
          <img src={freestyle_line} alt="Line" />
        </button>
        <button
          onClick={() => {
            changeShape("Straight Line");
            changeTool("Pen");
          }}
        >
          <img src={straight_line} alt="Straight Line" />
        </button>
        <button
          onClick={() => {
            changeShape("Rectangle");
            changeTool("Pen");
          }}
        >
          <img src={empty_rectangle} alt="Rectangle" />
        </button>
        <button
          onClick={() => {
            changeShape("Circle");
            changeTool("Pen");
          }}
        >
          <img src={empty_circle} alt="Circle" />
        </button>
      </div>
    </div>
  );
}
