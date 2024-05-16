import React from "react";

interface BackgroundVideoProps {
  src: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  loop = true,
  muted = true,
  autoPlay = true,
}) => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={src}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      style={{ zIndex: -5 }} // Ensure the video is behind other content
    />
  );
};

export default BackgroundVideo;
