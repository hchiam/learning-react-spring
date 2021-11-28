import { useSpring, animated } from "react-spring";

/**
 * use things like spring.progress.interpolate
 * to get direct access to useSpring values?
 * some kind of escape hatch?
 */
export function InterpolationExample({ isOpen }) {
  const spring = useSpring({ progress: isOpen ? 1 : 0 });

  return (
    <animated.div
      style={{
        background: spring.progress.interpolate(
          // note: interpolate is deprecated
          (p) => `rgba(210, 57, 77, ${p})`
        ),
      }}
    >
      Interpolation example.
    </animated.div>
  );
}
