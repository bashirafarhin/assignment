import React from "react";

const Loader = () => {
  return (
    <span className="relative flex size-15">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex size-15 rounded-full bg-[#50C878]"></span>
    </span>
  );
};

export default Loader;
