import ProductCard from "./ProductCard";

interface Product {
  title: string;
  subtitle: string;
  image: string;
  excerpt: string;
}

const products: Product[] = [
  {
    title: "Token",
    subtitle: "The Gateway token to the world of AI",
    image: "/images/blog1.png",
    excerpt:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    title: "Revenue",
    subtitle: "Driving income and growth through decentralization",
    image: "/images/blog2.png",
    excerpt:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
  },
  {
    title: "Launchpad",
    subtitle: "Driving the future of AI Innovation",
    image: "/images/blog3.png",
    excerpt:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
  },
];

const Products = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center py-32 gap-8 px-0 sm:px-6 lg:px-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
            excerpt={product.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
