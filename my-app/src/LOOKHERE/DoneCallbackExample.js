import { animated, useSpring } from "react-spring";
import { useState } from "react";

/**
 * you can use useSpring timing events,
 * like onStart, onChange, onRest, onPause, onResume, onDelayEnd, onProps
 */
export function DoneCallbackExample({ x, y }) {
  const [background, setBackground] = useState("green");

  const style = useSpring({
    width: "10vw",
    transform: `translate(${x}px, ${y}px)`,
    background: background,
    onRest: ({ transform }) => {
      console.log("done");
      setBackground("red");
    },
  });

  return (
    <>
      <animated.div style={style}>
        {background === "green" ? (
          "Animating!"
        ) : (
          <>
            Animation done: ran <code>onRest</code> callback.
          </>
        )}
      </animated.div>
    </>
  );
}
