import { useEffect, useRef, useState } from "react";

export default function Canvas({ currentColor }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setPrevPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Get mouse coordinates
    const currentX = e.nativeEvent.offsetX;
    const currentY = e.nativeEvent.offsetY;

    ctx.beginPath();
    ctx.moveTo(prevPosition.x, prevPosition.y);
    ctx.lineTo(currentX, currentY);

    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 5; //to be changed into dynamic value
    ctx.stroke();

    setPrevPosition({ x: currentX, y: currentY });
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      />
    </div>
  );
}
