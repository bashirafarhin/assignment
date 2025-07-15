import React from "react";

export default function Loader() {
  return (
    <span className="relative flex size-20 mx-auto">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex size-20 rounded-full bg-[#50C878]"></span>
    </span>
  );
}