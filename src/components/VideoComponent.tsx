"use client";
import React, { useEffect, useState } from "react";
import { list } from "@vercel/blob";

interface VideoComponentProps {
  fileName: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ fileName }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const { blobs } = await list({
        prefix: fileName,
        limit: 1,
      });
      if (blobs.length > 0) {
        setVideoUrl(blobs[0].url);
      }
    };

    fetchVideoUrl();
  }, [fileName]);

  if (!videoUrl) {
    return <div>Loading video...</div>;
  }

  return (
    <video controls preload="none" aria-label="Video player">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
