import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useRef } from "react";

export default function ParallaxText({
  children,
  baseVelocity = 100,
  direction,
}) {
  const basex = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-1000, 1000],
    [-30, 30]
  );

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(basex, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveby = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveby += directionFactor.current * moveby * velocityFactor.get();

    basex.set(basex.get() + moveby);
  });

  return (
    <motion.div
      initial={{ x: direction, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 2,
          duration: 1,
          easings: "eas",
        },
      }}
      className="m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]"
    >
      <motion.div
        style={{ x }}
        className="flex text-[#fff] font-secondary flex-nowrap whitespace-nowrap text-6xl font-semibold uppercase md:text-6xl"
      >
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}
        </motion.span>
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}
        </motion.span>
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}
        </motion.span>
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
