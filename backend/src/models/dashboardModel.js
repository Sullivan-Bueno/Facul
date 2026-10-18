import prisma from "../config/prismaClient.js";

export function findAttemptsForDashboard() {
  return prisma.attempt.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { id: true, nome: true, usuario: true } },
      quiz: { select: { titulo: true } },
      answers: {
        select: {
          correta: true,
          question: { select: { id: true, enunciado: true } },
        },
      },
    },
  });
}
