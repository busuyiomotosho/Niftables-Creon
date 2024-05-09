import Telegram from "/public/images/Telegram.svg";
import Twitter from "/public/images/Twitter.svg";
import Discord from "/public/images/Discord.svg";
import Nif from "/public/images/NIFTABLES.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pb-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between px-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-8">
          <div className="text-xs">© Creon 2023. All rights reserved.</div>
          <div className="flex space-x-2">
            <Link href="#">
              <Image
                src={Telegram}
                alt="Telegram Icon"
                width={34}
                height={34}
                className="hover:bg-blue-500 rounded-full cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Image
                src={Discord}
                alt="Discord Icon"
                width={34}
                height={34}
                className="hover:bg-blue-500 rounded-full cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Image
                src={Twitter}
                alt="Twitter Icon"
                width={34}
                height={34}
                className="hover:bg-blue-500 rounded-full cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="text-xs flex gap-1 items-center">
          Powered by
          <Image src={Nif} alt="Niftables Logo" width={100} height={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
