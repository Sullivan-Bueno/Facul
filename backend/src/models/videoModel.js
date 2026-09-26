import prisma from "../config/prismaClient.js";

// Vídeo hospedado no YouTube (não-listado): guardamos só o `videoId`,
// nunca o arquivo em si (ver seção 5.1/8.1 do plano).

export function findVideosBySubject(subjectId) {
  return prisma.video.findMany({
    where: { subjectId },
    orderBy: { ordem: "asc" },
  });
}

export function findVideoById(id) {
  return prisma.video.findUnique({ where: { id } });
}

export function createVideo({ titulo, descricao, videoId, topico, ordem, subjectId }) {
  return prisma.video.create({
    data: { titulo, descricao, videoId, topico, ordem, subjectId },
  });
}
