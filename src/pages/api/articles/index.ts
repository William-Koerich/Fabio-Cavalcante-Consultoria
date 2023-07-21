import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

interface IRequest {
  title: string;
  content: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  const { title, content }: IRequest = req.body;

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  return res.status(200).json({
    message: "Artigo cadastro com sucesso",
  });
}
