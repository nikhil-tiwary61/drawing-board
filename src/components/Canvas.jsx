import { useRef, useState } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const [currentColor, setCurrentColor] = useState("#000000");

  const handleDraw = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Get mouse coordinates
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    ctx.fillStyle = currentColor;
    ctx.fillRect(x, y, 5, 5);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseMove={handleDraw}
      />
    </div>
  );
}
