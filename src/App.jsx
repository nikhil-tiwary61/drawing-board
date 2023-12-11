import "./App.css";
import { useReducer } from "react";
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";

const initialState = {
  color: "#000000",
  fontSize: 5,
  eraserSize: 40,
  tool: "Pen",
  shape: "FreeStyle",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "CHANGE_ERASER_SIZE":
      return { ...state, eraserSize: action.payload };
    case "CHANGE_SHAPE":
      return { ...state, shape: action.payload };
    case "CHANGE_TOOL":
      return { ...state, tool: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeColor(color) {
    dispatch({ type: "CHANGE_COLOR", payload: color });
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
  function changeTool(val) {
    dispatch({ type: "CHANGE_TOOL", payload: val });
  }

  return (
    <>
      <div id="components">
        <ToolBar
          changeColor={changeColor}
          fontSize={state.fontSize}
          changeFontSize={changeFontSize}
          eraserSize={state.eraserSize}
          changeEraserSize={changeEraserSize}
          shape={state.shape}
          changeShape={changeShape}
          tool={state.tool}
          changeTool={changeTool}
        />
        <Canvas
          color={state.color}
          fontSize={state.fontSize}
          eraserSize={state.eraserSize}
          tool={state.tool}
          shape={state.shape}
        />
      </div>
    </>
  );
}

export default App;
