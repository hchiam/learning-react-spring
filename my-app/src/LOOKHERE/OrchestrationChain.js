import { animated, useSpring } from "react-spring";
import { useChain, useSpringRef } from "react-spring";
// import { useRef } from "react";

/**
 * you can chain animations to happen one after the other
 * with useChain([ref1, ref2, ...])
 * with ref1, ref2, etc. being references to different animations.
 *
 * remember to useSpringRef instead of useRef!
 */
export function OrchestrationChain({ x, y }) {
  const firstRef = useSpringRef(); // not useRef!
  const spring1 = useSpring({
    transform: `translate(${x}px, ${y}px)`,
    ref: firstRef,
  });

  const secondRef = useSpringRef(); // not useRef!
  const spring2 = useSpring({
    transform: `translate(${x}px, ${y}px)`,
    ref: secondRef,
  });

  useChain([firstRef, secondRef]);

  return (
    <>
      <animated.div style={spring1}>
        Spring1 chained with <code>useChain</code> and <code>useSpringRef</code>
        .
      </animated.div>
      <animated.div style={spring2}>
        Spring2 chained with <code>useChain</code> and <code>useSpringRef</code>
        .
      </animated.div>
    </>
  );
}
