import { animated, useTrail } from "react-spring";

/**
 * you can stagger the same transition across multiple elements,
 * creating a trail using useTrail,
 * with react-spring's characteristic behaviour
 */
export function OrchestrationTrail({ x, y, count }) {
  const trail = useTrail(count, {
    position: "absolute",
    x: Number(x),
    y: Number(y),
  });

  return trail.map((style, i) => (
    <animated.div style={style}>
      {i + 1} with <code>useTrail</code>
    </animated.div>
  ));
}
