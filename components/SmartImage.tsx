import Image from "next/image";
import { useMemo, useState } from "react";

const WHITELISTED_DOMAINS = [
  "media.cnn.com",
  "bbc.co.uk",
  "static01.nyt.com",
  "i.guim.co.uk",
  "cdn.vox-cdn.com",
  "deadline.com",
  "npr.brightspotcdn.com"
];

// Replace with your own fallback image (local or external)
const FALLBACK_IMAGE = "/fallback.jpg"; // must exist in your public folder

function isWhitelisted(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return WHITELISTED_DOMAINS.includes(hostname);
  } catch {
    return false;
  }
}

interface SmartImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const SmartImage = ({
  src,
  alt = "",
  width = 500,
  height = 300,
  className,
}: SmartImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const isOptimizable = useMemo(() => isWhitelisted(src), [src]);

  const handleError = () => setImgSrc(FALLBACK_IMAGE);

  if (isOptimizable) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        onError={handleError}
        className={className}
      />
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      onError={handleError}
      className={className}
    />
  );
};

export default SmartImage;