import "./App.css";
import { useState } from "react";
import { MovingBoxViaHook } from "./LOOKHERE/MovingBoxViaHook";
import { MovingBoxViaRenderProps } from "./LOOKHERE/MovingBoxViaRenderProps";
import { InterpolationExample } from "./LOOKHERE/InterpolationExample";
import { OrchestrationTrail } from "./LOOKHERE/OrchestrationTrail";
import { OrchestrationChain } from "./LOOKHERE/OrchestrationChain";
import { DoneCallbackExample } from "./LOOKHERE/DoneCallbackExample";

function App() {
  // const [y, setY] = useState(300);
  // const [y2, setY2] = useState(400);
  const [y, setY] = useState(0);
  const [y2, setY2] = useState(0);
  const [x, setX] = useState(0);
  setTimeout(() => {
    setY(300);
    setY2(400);
    setX(400);
  }, 1000);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  window.addEventListener("mousemove", (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  });
  return (
    <div className="App">
      <MovingBoxViaHook x="0" y={y}></MovingBoxViaHook>
      <MovingBoxViaRenderProps x="0" y={y2}></MovingBoxViaRenderProps>
      <InterpolationExample isOpen={true} />
      <OrchestrationTrail count="10" x={mouseX} y={mouseY} />
      <OrchestrationChain x={x} y={50} />
      <DoneCallbackExample x="10" y={y} />
    </div>
  );
}

export default App;
