import { HeroSection } from "@/components/pages/blog/HeroSection";
import { Header } from "@/components/global/Header";
import { NewsSection } from "@/components/pages/blog/NewsSection";
import { Footer } from "@/components/global/Footer";
import { Articles } from "@/components/pages/blog/Articles";

export default function Blog() {
  return (
    <>
      <Header />
      <HeroSection />
      <NewsSection />
      <Articles />
      <Footer />
    </>
  );
}
