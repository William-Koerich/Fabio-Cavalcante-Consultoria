import * as S from "@/styles/pages/Home";
import Head from "next/head";
import { Header } from "@/components/global/Header";
import { Partners } from "@/components/pages/home/Partners";
import { Form } from "@/components/pages/home/Form";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <Header />
        <HeroSection />
        <Partners />
        <ServiceSection />
        <Form />
      </S.Main>
    </>
  );
}
