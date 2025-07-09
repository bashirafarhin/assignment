"use client";

import React, { ReactNode, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HorizontalScrollerProps {
  children: ReactNode[];
  itemWidth?: number;
  gap?: number;
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  itemWidth = 300,
  gap = 24,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      setDragWidth(scrollWidth - offsetWidth);
    }
  }, [children]);

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white dark:from-black z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white dark:from-black z-10 pointer-events-none" />
      <motion.div
        className="overflow-x-auto overflow-y-hidden hide-scrollbar cursor-grab active:cursor-grabbing px-2"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          ref={containerRef}
          className="flex w-fit px-4 py-4 items-center"
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{ width: itemWidth, marginRight: gap }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HorizontalScroller;
