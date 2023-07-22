import { GetStaticProps } from "next";

import { HeroSection } from "@/components/pages/blog/HeroSection";
import { Header } from "@/components/global/Header";
import { NewsSection } from "@/components/pages/blog/NewsSection";
import { Footer } from "@/components/global/Footer";
import { Articles } from "@/components/pages/blog/Articles";
import { Article } from "@/interfaces/articles";

interface IProps {
  articles: Article;
}

export default function Blog({ articles }: IProps) {
  return (
    <>
      <Header />
      <HeroSection title={"Blog"} />
      <NewsSection />
      <Articles />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
    revalidate: 10,
  };
};
