import { useEffect, useReducer, useRef } from "react";
import { canvasReducer, initialState } from "../reducers/canvasReducer";

export default function Canvas({
  currentColor,
  isErasing,
  fontSize,
  eraserSize,
}) {
  const canvasRef = useRef(null);
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
  };

  const handleDrawing = (e) => {
    if (state.isDrawing) {
      const currentX = e.nativeEvent.offsetX;
      const currentY = e.nativeEvent.offsetY;

      dispatch({
        type: "START_DRAWING",
        payload: { x: currentX, y: currentY },
      });
      drawLine(currentX, currentY);
    }
  };

  const handleEndDrawing = () => {
    if (state.isDrawing) {
      dispatch({ type: "END_DRAWING" });
    }
  };

  const drawLine = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(state.prevPosition.x, state.prevPosition.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
    ctx.lineWidth = isErasing ? eraserSize : fontSize;
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
    <div>
      <canvas
        ref={canvasRef}
        className={isErasing ? "eraser" : "pen"}
        onMouseDown={handleStartDrawing}
        onMouseMove={handleDrawing}
        onMouseUp={handleEndDrawing}
        onMouseOut={handleEndDrawing}
      />
      <button onClick={clearCanvas}>Clear Canvas</button>
      <button onClick={printCanvas}>Print Canvas</button>
    </div>
  );
}
