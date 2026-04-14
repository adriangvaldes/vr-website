import * as React from "react";

type NextImageProps = {
  src: string | { src: string };
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  unoptimized?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  style?: React.CSSProperties;
};

export default function Image({ src, alt, width, height, fill: _fill, unoptimized: _u, sizes: _s, priority: _p, ...rest }: NextImageProps) {
  const resolvedSrc = typeof src === "object" && "src" in src ? src.src : src;
  return <img src={resolvedSrc} alt={alt} width={width} height={height} {...rest} />;
}
