import "./App.css";
import { useReducer } from "react";
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";

const initialState = {
  currentColor: "#000000",
  isErasing: false,
  fontSize: 5,
  eraserSize: 40,
  shape: "FreeStyle",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, currentColor: action.payload };
    case "CHANGE_ERASER":
      return { ...state, isErasing: action.payload };
    case "CHANGE_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "CHANGE_ERASER_SIZE":
      return { ...state, eraserSize: action.payload };
    case "CHANGE_SHAPE":
      return { ...state, shape: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeColor(color) {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  }
  function changeEraser(boolean) {
    dispatch({ type: "CHANGE_ERASER", payload: boolean });
  }
  function changeFontSize(e) {
    dispatch({ type: "CHANGE_FONT_SIZE", payload: e.target.value });
  }
  function changeEraserSize(e) {
    dispatch({ type: "CHANGE_ERASER_SIZE", payload: e.target.value });
  }
  function changeShape(val) {
    dispatch({ type: "CHANGE_SHAPE", payload: val });
  }

  return (
    <>
      <div id="components">
        <ToolBar
          changeColor={changeColor}
          changeEraser={changeEraser}
          fontSize={state.fontSize}
          changeFontSize={changeFontSize}
          eraserSize={state.eraserSize}
          changeEraserSize={changeEraserSize}
          changeShape={changeShape}
        />
        <Canvas
          currentColor={state.currentColor}
          isErasing={state.isErasing}
          fontSize={state.fontSize}
          eraserSize={state.eraserSize}
          shape={state.shape}
        />
      </div>
    </>
  );
}

export default App;
