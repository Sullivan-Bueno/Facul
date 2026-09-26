import prisma from "../config/prismaClient.js";

// Único papel de usuário existente por enquanto: aluno (ver seção 8.3 do plano).

export function createUser({ nome, email, senha }) {
  return prisma.user.create({
    data: { nome, email, senha },
  });
}

export function findUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

export function findUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
