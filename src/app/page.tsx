import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Products from "@/components/Products";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col">
      <Hero />
      <Section2 />
      <Section3 />
      <Vision />
      <Products />
      <Blog />
      <Footer />
    </main>
  );
}
