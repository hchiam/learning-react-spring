import { useSpring, animated } from "react-spring";

/**
 * use useSpring hook for perf and and ergonomics
 * (as opposed to using render props)
 */
export function MovingBoxViaHook({ x, y }) {
  const style = useSpring({
    loop: { reverse: true },
    config: { duration: 3000 },
    from: {
      opacity: 0,
      // transform: `translate(0, 0)`,
      x: 0,
      y: 0,
    },
    to: {
      opacity: 1,
      // transform: `translate(${x}px, ${y}px)`,
      x: Number(x),
      y: Number(y),
    },
  });

  return (
    <animated.div style={style}>
      I move via <code>useSpring</code> hook.
    </animated.div>
  );
}
