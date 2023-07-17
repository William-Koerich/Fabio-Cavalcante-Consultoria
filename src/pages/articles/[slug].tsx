import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Article {
  id: string;
}

interface IProps {
  article: Article;
}

export function Article({ article }: IProps) {
  return <>{article}</>;
}

export const getStaticProps: GetStaticProps<{ article: Article }> = async (
  ctx
) => {
  const { slug } = ctx.params as Params;
  return {
    props: {
      article: {
        id: slug,
      },
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
