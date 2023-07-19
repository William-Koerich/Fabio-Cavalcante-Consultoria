import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { HeroSection } from "@/components/pages/article/HeroSection";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function Article({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <>
      <Header />
      <HeroSection
        title={"Donec sit amet sapien sed tortor pulvinar dapibus velet"}
      />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;

  if (!slug) {
    return {
      props: {},
    };
  }

  return {
    props: {},
    revalidate: 60 * 60 * 24, //24 hours
  };
};
