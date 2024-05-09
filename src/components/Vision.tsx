import Image from "next/image";
import Creon from "/public/images/CREON1.png";
import Accordion from "./Accordion";

interface Accordion {
  title: string;
  icon: string;
  iconActive: string;
  description: string;
  active: boolean;
}

const visions: Accordion[] = [
  {
    title: "Profitability and Growth",
    icon: "/images/profit-icon.svg",
    iconActive: "/images/profit-icon-a.svg",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    active: true,
  },
  {
    title: "Transparent & Fair Decentralized Earnings",
    icon: "/images/trans-icon.svg",
    iconActive: "/images/trans-icon-a.svg",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    active: false,
  },
  {
    title: "Launching the future",
    icon: "/images/fut-icon.svg",
    iconActive: "/images/fut-icon-a.svg",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    active: false,
  },
  {
    title: "Limitless Possibilities of AI & Crypto",
    icon: "/images/lim-icon.svg",
    iconActive: "/images/lim-icon-a.svg",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    active: false,
  },
];

const Vision = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row py-32 gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 w-full md:w-7/12">
          <h3 className="text-2xl font-monument lg:text-3xl leading-5xl uppercase">
            Our vision is to support the innovation of AI blockchain projects{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              while prioritizing communities and democratizing profits
            </span>
          </h3>
          <div>
            <Image
              src={Creon}
              alt="Video Display"
              className="object-cover h-full relative w-full"
            />
          </div>
        </div>
        <div className="relative w-full md:w-5/12">
          <div>
            {visions.map((vision, index) => (
              <Accordion
                key={index}
                title={vision.title}
                icon={vision.icon}
                iconActive={vision.iconActive}
                id={`vision-${index}`}
                active={vision.active}
              >
                {vision.description}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
