import React from "react";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[5]">
        <BackgroundVideo src="https://epc1kohkf3ywv9pn.public.blob.vercel-storage.com/main-background-video-TYvmZvZdSzD2iW5TpfmaY2Ho8fVOHw.mp4" />
        <div className="absolute -z-[-2] w-full h-full top-0 left-0 bg-gradient-to-b from-purple-500 via-blue-500 to-black bg-blend-soft-light contrast-200 opacity-20"></div>
      </div>
      <div className="max-w-screen-xl h-screen mx-auto flex items-end px-4 sm:px-6 lg:px-8">
        <div className="pb-32 flex flex-col gap-6">
          <h1 className="text-3xl uppercase sm:text-4xl md:text-4xl lg:text-5xl">
            The world&apos;s first <br /> platform for Tokenizing
            <br /> AI blockchain projects
          </h1>
          <div className="max-w-max text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            <hr className="h-px my-2 border-0 bg-gradient-to-r from-blue-500 to-purple-500" />
            <p>Hold the Creon Pass NFT and earn passive income from AI Tools</p>
            <hr className="h-px my-2 border-0 bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
