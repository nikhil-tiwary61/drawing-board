export const drawLine = (
  ctx,
  startX,
  startY,
  endX,
  endY,
  isErasing,
  currentColor,
  fontSize,
  eraserSize
) => {
  ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
  ctx.lineWidth = isErasing ? eraserSize : fontSize;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};

export const drawRectangle = (
  ctx,
  startX,
  startY,
  endX,
  endY,
  isErasing,
  currentColor,
  fontSize,
  eraserSize
) => {
  ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
  ctx.lineWidth = isErasing ? eraserSize : fontSize;
  ctx.beginPath();
  ctx.rect(startX, startY, endX - startX, endY - startY);
  ctx.stroke();
};

export const drawCircle = (
  ctx,
  startX,
  startY,
  endX,
  endY,
  isErasing,
  currentColor,
  fontSize,
  eraserSize
) => {
  ctx.strokeStyle = isErasing ? "#ffffff" : currentColor;
  ctx.lineWidth = isErasing ? eraserSize : fontSize;
  const radius = Math.sqrt(
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
  );
  ctx.beginPath();
  ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
  ctx.stroke();
};
