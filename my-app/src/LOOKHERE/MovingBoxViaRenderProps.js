import { Spring, animated } from "react-spring";

/**
 * use render props for slightly easier data access
 * (compared to the useSpring hook method)
 */
export function MovingBoxViaRenderProps({ x, y }) {
  return (
    <Spring
      loop={{ reverse: true }}
      config={{ duration: 3000 }}
      // from={{ opacity: 0, transform: `translate(0, 0)` }}
      // to={{ opacity: 1, transform: `translate(${x}px, ${y}px)` }}
      from={{ opacity: 0, x: 0, y: 0 }}
      to={{ opacity: 1, x: Number(x), y: Number(y) }}
    >
      {(style) => (
        <animated.div style={style}>
          I move via <code>Spring</code> render props like <code>from</code> and{" "}
          <code>to</code>.
        </animated.div>
      )}
    </Spring>
  );
}
