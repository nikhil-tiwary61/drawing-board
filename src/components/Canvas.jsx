import "../styles/Canvas.css";
import { useEffect, useReducer, useRef } from "react";
import { canvasReducer, initialState } from "../reducers/canvasReducer";

export default function Canvas({
  currentColor,
  isErasing,
  fontSize,
  eraserSize,
  shape,
}) {
  const canvasRef = useRef(null);
  const startXRef = useRef(null);
  const startYRef = useRef(null);
  const [state, dispatch] = useReducer(canvasReducer, initialState);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ////making line smooth
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    //resize canvas window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.8;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleStartDrawing = (e) => {
    dispatch({
      type: "START_DRAWING",
      payload: { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
    });
    startXRef.current = e.nativeEvent.offsetX;
    startYRef.current = e.nativeEvent.offsetY;
  };

  const handleDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (state.isDrawing) {
      const currentX = e.nativeEvent.offsetX;
      const currentY = e.nativeEvent.offsetY;

      dispatch({
        type: "DRAW",
        payload: { x: currentX, y: currentY },
      });
      if (shape == "FreeStyle") {
        drawLine(ctx, currentX, currentY);
      }
    }
  };

  const handleEndDrawing = (e) => {
    const currentX = e.nativeEvent.offsetX;
    const currentY = e.nativeEvent.offsetY;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (shape === "Rectangle") {
      drawRectangle(
        ctx,
        startXRef.current,
        startYRef.current,
        currentX,
        currentY
      );
    } else if (shape === "Circle") {
      drawCircle(ctx, startXRef.current, startYRef.current, currentX, currentY);
    }
    if (state.isDrawing) {
      dispatch({ type: "END_DRAWING" });
    }
  };

  const handleOutOfCanvas = () => {
    dispatch({ type: "END_DRAWING" });
  };

  const drawLine = (ctx, x, y) => {
    ctx.beginPath();
    ctx.moveTo(state.prevPosition.x, state.prevPosition.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
    ctx.lineWidth = isErasing ? eraserSize : fontSize;
    ctx.stroke();
  };

  const drawRectangle = (ctx, startX, startY, endX, endY) => {
    ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
    ctx.lineWidth = isErasing ? eraserSize : fontSize;
    ctx.beginPath();
    ctx.rect(startX, startY, endX - startX, endY - startY);
    ctx.stroke();
  };

  const drawCircle = (ctx, startX, startY, endX, endY) => {
    ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
    ctx.lineWidth = isErasing ? eraserSize : fontSize;
    const radius = Math.sqrt(
      Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
    );
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dispatch({ type: "CLEAR_DRAWING" });
  };

  const printCanvas = () => {
    const canvas = canvasRef.current.toDataURL();

    const windowContent = "<!DOCTYPE html>";
    const printWindow = window.open("", "_blank");

    printWindow.document.open();
    printWindow.document.write(
      `${windowContent}<html><head><title>Print Canvas</title></head><body><img src="${canvas}" /></body></html>`
    );
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className={`${isErasing ? "eraser" : "pen"} canvas`}
        onMouseDown={handleStartDrawing}
        onMouseMove={handleDrawing}
        onMouseUp={handleEndDrawing}
        onMouseOut={handleOutOfCanvas}
      />
      <button onClick={clearCanvas}>Clear Canvas</button>
      <button onClick={printCanvas}>Print Canvas</button>
    </div>
  );
}
