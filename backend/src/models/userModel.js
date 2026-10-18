import prisma from "../config/prismaClient.js";

export function createUser({ nome, usuario, senha, papel = "ALUNO" }) {
  return prisma.user.create({
    data: { nome, usuario, senha, papel },
  });
}

export function findUserByUsuario(usuario) {
  return prisma.user.findUnique({ where: { usuario } });
}

export function findUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
