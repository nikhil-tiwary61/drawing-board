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
  shape,
  changeShape,
  tool,
  changeTool,
}) {
  const handleToolChange = (tool, shape = null) => {
    changeTool(tool);
    changeShape(shape);
  };
  return (
    <div className="toolbox">
      <h1>DrawBoard</h1>
      <HexColorPicker onChange={changeColor} />
      <button
        className={tool === "Pen" ? "active" : ""}
        onClick={() => handleToolChange("Pen", "FreeStyle")}
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
        className={tool === "Eraser" ? "active" : ""}
        onClick={() => handleToolChange("Eraser")}
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
          className={shape === "FreeStyle" ? "active" : ""}
          onClick={() => handleToolChange("Pen", "FreeStyle")}
        >
          <img src={freestyle_line} alt="Line" />
        </button>
        <button
          className={shape === "Straight Line" ? "active" : ""}
          onClick={() => handleToolChange("Pen", "Straight Line")}
        >
          <img src={straight_line} alt="Straight Line" />
        </button>
        <button
          className={shape === "Rectangle" ? "active" : ""}
          onClick={() => handleToolChange("Pen", "Rectangle")}
        >
          <img src={empty_rectangle} alt="Rectangle" />
        </button>
        <button
          className={shape === "Circle" ? "active" : ""}
          onClick={() => handleToolChange("Pen", "Circle")}
        >
          <img src={empty_circle} alt="Circle" />
        </button>
      </div>
    </div>
  );
}
