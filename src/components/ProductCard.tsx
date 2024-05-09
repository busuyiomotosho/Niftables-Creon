import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  excerpt: string;
};

const ProductCard = ({ title, subtitle, image, excerpt }: Props) => {
  return (
    <div className="relative w-full md:w-[38%] p-2">
      <div className="z-[3] absolute top-[-0.02rem] right-[2rem] font-satoshi-bold uppercase text-black bg-white rounded-full text-xs px-1 py-1 ml-1">
        coming soon
      </div>
      <div className="relative min-w-[27rem] bg-gray-900/60 min-h-[42rem] p-6 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-72">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="text-4xl font-monument uppercase">{title}</h2>
            <div className="text-lg font-satoshi-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              {subtitle}
            </div>
          </div>
          <div className="-ml-8 absolute top-40 overflow-hidden">
            <Image
              src={image}
              alt={`Image for ${title}`}
              width={423}
              height={234}
              className="hover:scale-110 duration-500"
            />
          </div>
          <div className="grid text-lg font-satoshi-light">{excerpt}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
