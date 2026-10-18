import prisma from "../config/prismaClient.js";

export function findAllSubjects() {
  return prisma.subject.findMany({
    orderBy: { ordem: "asc" },
    select: {
      id: true,
      nome: true,
      ordem: true,
      topics: {
        orderBy: { ordem: "asc" },
        select: { id: true, nome: true, ordem: true },
      },
    },
  });
}

export function findSubjectById(id) {
  return prisma.subject.findUnique({ where: { id } });
}

export function createSubject({ nome, descricao }) {
  return prisma.subject.create({
    data: { nome, descricao },
  });
}
