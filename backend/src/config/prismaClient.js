import { PrismaClient } from "@prisma/client";

// Instância única do Prisma Client, reutilizada por toda a camada de models.
const prisma = new PrismaClient();

export default prisma;
