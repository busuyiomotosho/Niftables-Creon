import Image from "next/image";
import Video2 from "/public/images/Video2.png";
import { Suspense } from "react";

const Section3 = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto flex flex-col py-32 gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-monument-black text-center lg:text-left lg:text-5xl uppercase">
            Profiting Through
          </h2>
          <h3 className="text-3xl text-center lg:text-right lg:text-4xl uppercase bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            AI Innovation & Decentralization
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-2/3">
            <Suspense fallback={<p>Loading video...</p>}>
              <video
                loop
                muted
                autoPlay
                className="-z-[-3] object-cover h-full"
              >
                <source
                  src="https://epc1kohkf3ywv9pn.public.blob.vercel-storage.com/creon-logo-J10D54Ob3WofXF66Aonxd4JE9naADF.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Suspense>
            <div className="absolute -z-[-2] w-full h-full top-0 left-0 bg-gradient-to-b from-purple-500 to-blue-500 bg-blend-soft-light contrast-200 opacity-20"></div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/3 justify-evenly px-10 border-x border-gray-800">
            <div className="font-satoshi-bold">
              The dynamic community driven business model of the future.
            </div>
            <div>
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
