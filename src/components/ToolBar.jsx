export default function ToolBar({
  changeColor,
  changeEraser,
  fontSize,
  changeFontSize,
}) {
  const colors = ["#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00"];

  return (
    <div className="toolbox">
      <div className="toolbar">
        <span>Colors:</span>
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
      <button onClick={() => changeEraser(false)}>Pen</button>
      <button onClick={() => changeEraser(true)}>Eraser</button>
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
    </div>
  );
}
