"use client";

import { useState, useEffect } from "react";
const FALLBACK_IMAGE = "/fallback.jpeg";
console.log(FALLBACK_IMAGE);

interface SmartImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const SmartImage = ({
  src,
  alt = "image",
  width = 500,
  height = 300,
  className = "",
}: SmartImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [, setSafeToUseImage] = useState(false);

  useEffect(() => {
    try {
      const { hostname } = new URL(src);
      const WHITELISTED_DOMAINS = [
        "media.cnn.com",
        "bbc.co.uk",
        "static01.nyt.com",
        "i.guim.co.uk",
        "cdn.vox-cdn.com",
        "deadline.com",
        "npr.brightspotcdn.com",
      ];

      if (WHITELISTED_DOMAINS.some(domain => hostname.endsWith(domain))) {
        setSafeToUseImage(true);
      }
    } catch {
      setSafeToUseImage(false);
    }
  }, [src]);

  const handleError = () => {
    if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
  };

  // Use plain <img> everywhere to avoid crashing
  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      loading="lazy"
      className={className}
    />
  );
};

export default SmartImage;