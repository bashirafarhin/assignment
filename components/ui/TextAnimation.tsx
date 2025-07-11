"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextAnimationProps {
  text: string; // support \n for line breaks
  className?: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"], // white when inside view, gray outside
  });

  const color = useTransform(scrollYProgress, [0, 1], ["rgb(107 114 128)", "#ffffff"]);

  const lines = text.split("\n"); // break into lines using \n

  return (
    <div
    ref={ref}
    className={`flex flex-col items-center space-y-2 text-center ${className}`}
  >
    {lines.map((line, i) => (
      <div key={i} className="flex flex-wrap justify-center gap-x-2">
        {line.split(" ").map((word, j) => (
          <motion.span key={j} style={{ color }} className="inline-block">
            {word}
          </motion.span>
        ))}
      </div>
    ))}
  </div>
  );
};

export default TextAnimation;