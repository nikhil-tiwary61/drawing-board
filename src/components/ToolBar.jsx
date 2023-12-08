import pen from "../assets/pen.png";
import eraser from "../assets/eraser.png";

export default function ToolBar({
  changeColor,
  changeEraser,
  fontSize,
  changeFontSize,
  eraserSize,
  changeEraserSize,
}) {
  const colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#800080",
    "#000000",
    "#C0C0C0",
    "#808080",
    "#800000",
    "#FFC0CB",
    "#FFD700",
    "#00FF00",
    "#00FFFF",
    "#000080",
    "#FF00FF",
    "#FF6347",
    "#A52A2A",
    "#D2691E",
    "#FF8C00",
    "#006400",
    "#8B008B",
    "#4B0082",
    "#008080",
    "#8A2BE2",
  ];

  return (
    <div className="toolbox">
      <div>Colors:</div>
      <div className="toolbar">
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className="color-option"
              style={{ background: color }}
              onClick={() => changeColor(color)}
            />
          );
        })}
      </div>
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
    </div>
  );
}
