export const canvasReducer = (state, action) => {
  switch (action.type) {
    case "START_DRAWING":
      return {
        ...state,
        isDrawing: true,
        prevPosition: { x: action.payload.x, y: action.payload.y },
      };
    case "DRAW":
      return {
        ...state,
        prevPosition: { x: action.payload.x, y: action.payload.y },
      };
    case "END_DRAWING":
      return { ...state, isDrawing: false };
    case "CLEAR_DRAWING":
      return { ...state, isDrawing: false };
    default:
      return state;
  }
};

export const initialState = {
  isDrawing: false,
  prevPosition: { x: 0, y: 0 },
};
