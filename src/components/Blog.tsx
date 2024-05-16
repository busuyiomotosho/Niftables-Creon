import Image from "next/image";
import Background from "/public/images/lower-background.png";
import BlogCard from "./BlogCard";
import BackgroundVideo from "./BackgroundVideo";

interface Posts {
  title: string;
  image: string;
  excerpt: string;
}

const Blog = () => {
  const posts: Posts[] = [
    {
      title: "AI Prospects, Market Size, and Development Pace",
      image: "/images/ai.png",
      excerpt:
        "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
    },
    {
      title: "AI Tools and Market",
      image: "/images/robot.png",
      excerpt:
        "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
    },
    {
      title: "AI, Crypto, and NFT Market",
      image: "/images/nft.png",
      excerpt:
        "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[5]">
        <BackgroundVideo src="https://epc1kohkf3ywv9pn.public.blob.vercel-storage.com/roadmap-video-sFkdiirfaIXJWqXdD83RSqYKp3bOsz.mp4" />
        <div className="absolute -z-[-2] w-full h-full top-0 left-0 bg-gradient-to-b from-black to-transparent bg-blend-soft-light contrast-200 opacity-20"></div>
        {/* <Image
          src={Background}
          alt="Hero Background"
          className="object-cover w-full h-full"
        /> */}
      </div>
      <div className="max-w-screen-xl h-full mx-auto flex flex-col pt-32 pb-16 space-y-4">
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            image={post.image}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
