"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  duration = 4000,
}) {
  return (
    <button
      className="relative overflow-hidden p-[2px] w-30 h-15"
      style={{ borderRadius }}
    >
      <div className="absolute inset-0">
        <MovingBorder duration={duration} rx="20" ry="20">
          <div className="h-16 w-16 rounded-md bg-sky-500 blur-xl opacity-100" />
        </MovingBorder>
      </div>
      <div
        className="relative flex items-center justify-center w-full h-full bg-black text-white text-lg font-semibold"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </button>
  );
}

export const MovingBorder = ({ children, duration = 4000, rx, ry }) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full"
      >
        <rect
          ref={pathRef}
          fill="none"
          stroke="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
