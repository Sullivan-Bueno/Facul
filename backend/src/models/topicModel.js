import prisma from "../config/prismaClient.js";

export function findTopicById(id) {
  return prisma.topic.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      ordem: true,
      subject: { select: { id: true, nome: true } },
      materials: {
        orderBy: { ordem: "asc" },
        select: { id: true, tipo: true, titulo: true, url: true, ordem: true },
      },
      quiz: { select: { id: true } },
    },
  });
}
