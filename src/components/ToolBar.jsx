export default function ToolBar({ changeColor }) {
  const colors = ["#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00"];

  return (
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
  );
}
