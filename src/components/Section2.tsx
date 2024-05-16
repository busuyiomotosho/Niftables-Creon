import { Suspense, memo } from "react";
import Image from "next/image";
import Overlay from "/public/images/dark-shape.png";

interface ListItem {
  item: string;
}

const list: ListItem[] = [
  {
    item: "Pre-launch investment opportunities for upcoming AI projects",
  },
  {
    item: "Free and early access to Creon built AI projects",
  },
  {
    item: "Higher allocation limits on the Creon AI Launchpad",
  },
  {
    item: "Revenue share distribution from Creon built AI projects",
  },
];

const ListComponent = memo(({ list }: { list: ListItem[] }) => (
  <div className="flex flex-col gap-4">
    {list.map((item, index) => (
      <div
        className="max-w-max border border-gray-900 rounded-md py-1 px-4 inline-block mb-4"
        key={index}
      >
        <p className="text-base font-satoshi-light">{item.item}</p>
      </div>
    ))}
  </div>
));

ListComponent.displayName = "ListComponent";

const Section2 = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row py-32 gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <h2 className="text-4xl lg:text-5xl uppercase">
            Creon Pass <br /> NFT
          </h2>
          <hr className="h-px my-2 border-0 bg-gray-900" />
          <div className="text-lg font-satoshi-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            <p>
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </p>
          </div>
          <ListComponent list={list} />
          <div className="flex">
            <button
              className="relative overflow-hidden inline-flex min-h-12 py-3 px-32 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-500 transition-all duration-500 ease-in-out group"
              aria-label="Buy Creon Pass"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-in-out bg-blue-500 group-hover:h-full group-hover:py-3">
                Buy Creon Pass
              </span>
              <span className="relative w-full h-full transition-all duration-500 ease-in-out group-hover:h-0 group-hover:mt-[-6rem]">
                Buy Creon Pass
              </span>
            </button>
          </div>
        </div>
        <div className="relative md:w-1/2">
          <Suspense fallback={<p>Loading video...</p>}>
            <video loop muted autoPlay className="-z-[-3] object-cover h-full">
              <source
                src="https://epc1kohkf3ywv9pn.public.blob.vercel-storage.com/nft-video-lH2h42zn3tUe608KXolo45RbF7vU9o.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Suspense>
          <Image
            src={Overlay}
            alt="Video Display"
            className="absolute top-0 left-0 object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
