import Image from "next/image";
import pic from "/public/images/ai.png";

type Props = {
  title: string;
  image: string;
  excerpt: string;
};

const BlogCard = ({ title, image, excerpt }: Props) => {
  return (
    <div className="relative w-full p-4">
      <div className="relative w-full bg-gray-900/60 min-h-40 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-4 p-8 w-full md:w-2/3">
            <h2 className="text-4xl font-monument uppercase">{title}</h2>
            <div className="grid text-lg font-satoshi-light">{excerpt}</div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <Image
              src={image}
              alt={`Image for ${title}`}
              width={433}
              height={302}
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
