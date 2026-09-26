import prisma from "../config/prismaClient.js";

export function findAllSubjects() {
  return prisma.subject.findMany();
}

export function findSubjectById(id) {
  return prisma.subject.findUnique({ where: { id } });
}

export function createSubject({ nome, descricao }) {
  return prisma.subject.create({
    data: { nome, descricao },
  });
}
