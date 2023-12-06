import { useRef, useState } from "react";

export default function Canvas({ currentColor }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    setIsDrawing(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Get mouse coordinates
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    ctx.fillStyle = currentColor;
    ctx.fillRect(x, y, 5, 5);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    ctx.fillStyle = currentColor;
    ctx.fillRect(x, y, 5, 5);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      />
    </div>
  );
}
