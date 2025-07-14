"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface TextAnimationProps {
  text: string; // support \n for line breaks
  className?: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end 10%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  const lines = text.split("\n");

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center space-y-2 text-center ${className}`}
    >
      {lines.map((line, i) => (
        <div key={i} className="flex flex-wrap justify-center gap-x-2">
          {line.split(" ").map((word, j) => (
            <motion.span
              key={j}
              style={{ opacity: springOpacity }}
              className="inline-block text-gray-500 dark:text-white transition-colors duration-300"
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextAnimation;