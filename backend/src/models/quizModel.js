import prisma from "../config/prismaClient.js";

const quizWithQuestions = {
  questions: {
    orderBy: { ordem: "asc" },
    include: { options: { orderBy: { id: "asc" } } },
  },
};

export function findQuizWithQuestions() {
  return prisma.quiz.findFirst({
    orderBy: { createdAt: "asc" },
    include: quizWithQuestions,
  });
}

export function findQuizById(id) {
  return prisma.quiz.findUnique({
    where: { id },
    include: quizWithQuestions,
  });
}

export function createAttempt({ userId, quizId, nota, answers }) {
  return prisma.attempt.create({
    data: {
      userId,
      quizId,
      nota,
      answers: { create: answers },
    },
  });
}
