import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prisma from "../src/config/prismaClient.js";
import exercises from "../Quiz.js";
import topicQuestions from "./topicQuestions.js";

const contentRoot = "/home/kaique/Documents/faculdade/conteudos do trabalho";
const materialStorage = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../storage/materiais",
);

const materialCatalog = [
  {
    topic: "Conjuntos Numéricos",
    slug: "conjuntos-numericos",
    resumo: "Conjuntos_Numéricos_e_Intervalos.pdf",
    infografico: "Conjuntos numéricos.png",
    youtube: "https://www.youtube.com/watch?v=KYS5YSiWZUs",
  },
  {
    topic: "As 4 Operações Básicas",
    slug: "operacoes-basicas",
    resumo: "Guia_das_4_Operações.pdf",
    infografico: "Guia_das_Operações_Matemáticas_Básicas.png",
    youtube: "https://www.youtube.com/watch?v=66wnPUOOqb8",
  },
  {
    topic: "Potenciação e Radiciação",
    slug: "potenciacao-radiciacao",
    resumo: "Guia_Supremo_de_Potenciação_e_Radiciação.pdf",
    infografico: "Resumo_de_Potenciação_e_Radiciação.png",
    youtube: "https://www.youtube.com/watch?v=W_RwmfrMiNM",
  },
  {
    topic: "Frações",
    slug: "fracoes",
    resumo: "Dominando_Frações.pdf",
    youtube: "https://www.youtube.com/watch?v=RM4-xgn-xik",
  },
  {
    topic: "Porcentagem",
    slug: "porcentagem",
    resumo: "Hackeando_a_Porcentagem.pdf",
    infografico: "Porcentagem.png",
    youtube: "https://youtu.be/vlP6Rzlb2Cg",
  },
  {
    topic: "Expressões Numéricas (Ordem)",
    slug: "expressoes-numericas",
    pasta: "expressao numerica",
    resumo: "O_Protocolo_de_Desarme.pdf",
    infografico: "Guia_de_Expressões_Numéricas.png",
    youtube: "https://youtu.be/gUHaOdyo-R0",
  },
  {
    topic: "Regra de 3",
    slug: "regra-de-3",
    pasta: "regra de 3",
    resumo: "Hackeando_a_Regra_de_Três.pdf",
    infografico: "Guia_da_Regra_de_Três.png",
    youtube: "https://youtu.be/e-NnflOd6MQ",
  },
  {
    topic: "Equação de 1º Grau",
    slug: "equacao-1-grau",
    resumo: "Desvendando_a_Equação_do_1º_Grau.pdf",
    infografico: "Infográfico__Equação_do_Primeiro_Grau.png",
    youtube: "https://youtu.be/Zip0AG9xfeA",
  },
  {
    topic: "Equação de 2º Grau",
    slug: "equacao-2-grau",
    resumo: "Hackeando_a_Equação_do_2º_Grau.pdf",
    infografico: "Guia_Completo_da_Equação_Quadrática.png",
    youtube: "https://youtu.be/IqnlIsnqe7Y",
  },
  {
    topic: "Funções",
    slug: "funcoes",
    resumo: "Guia_Visual_de_Funções.pdf",
    infografico: "Guia_Visual_Definitivo_das_Frações.png",
    youtube: "https://www.youtube.com/watch?v=jAMkLnmsM5o",
  },
  {
    topic: "Cinemática",
    area: "fisica",
    slug: "cinematica",
    pasta: "cinematica",
    resumo: "Hackeando_a_Cinemática_no_ENEM.pdf",
    infografico: "Mapa_conceitual_de_física_cinemática.png",
    youtube: "https://youtu.be/PsqRJWg4YSs",
  },
  {
    topic: "Mecânica",
    area: "fisica",
    slug: "mecanica",
    pasta: "mecanica",
    resumo: "Mapa_Definitivo_da_Mecânica.pdf",
    infografico: "Mapa_Conceitual_da_Mecânica_Clássica.png",
    youtube: "https://youtu.be/sVD9_J-ey4M",
  },
  {
    topic: "Elétrica",
    area: "fisica",
    slug: "eletrica",
    pasta: "eletrica",
    resumo: "Eletrostática_O_Universo_Invisível.pdf",
    infografico: "Guia_Visual_de_Eletrostática.png",
    youtube: "https://youtu.be/jMHIvvjFwRE",
  },
  {
    topic: "Ondulatória",
    area: "fisica",
    slug: "ondulatoria",
    pasta: "ondulatoria",
    resumo: "Ondulatória_para_o_ENEM.pdf",
    infografico: "Guia_de_Fenômenos_Ondulatórios_ENEM.png",
    youtube: "https://youtu.be/jMHIvvjFwRE",
  },
  {
    topic: "Calorimetria",
    area: "fisica",
    slug: "calorimetria",
    pasta: "calorimetria",
    resumo: "Guia_de_Sobrevivência_da_Calorimetria.pdf",
    infografico: "Infográfico_de_Calorimetria_e_Equações.png",
    youtube: "https://youtu.be/ff7-MGANMOA",
  },
  {
    topic: "Óptica",
    area: "fisica",
    slug: "optica",
    pasta: "optica",
    resumo: "Guia_Visual_de_Óptica.pdf",
    infografico: "Guia_Visual_de_Óptica_Geométrica.png",
    youtube: "https://www.youtube.com/watch?v=K9wdl9i-6Lg",
  },
];

const quizData = exercises.quiz;

const modules = [
  {
    nome: "Matemática",
    ordem: 1,
    topics: [
      "Conjuntos Numéricos",
      "As 4 Operações Básicas",
      "Potenciação e Radiciação",
      "Frações",
      "Porcentagem",
      "Expressões Numéricas (Ordem)",
      "Regra de 3",
      "Equação de 1º Grau",
      "Equação de 2º Grau",
      "Funções",
    ],
  },
  {
    nome: "Física",
    ordem: 2,
    topics: [
      "Cinemática",
      "Mecânica",
      "Elétrica",
      "Ondulatória",
      "Calorimetria",
      "Óptica",
    ],
  },
];

async function seedModules() {
  for (const module of modules) {
    let subject = await prisma.subject.findFirst({
      where: { nome: module.nome },
    });

    if (!subject) {
      subject = await prisma.subject.create({
        data: { nome: module.nome, ordem: module.ordem },
      });
    } else if (subject.ordem !== module.ordem) {
      await prisma.subject.update({
        where: { id: subject.id },
        data: { ordem: module.ordem },
      });
    }

    const existing = await prisma.topic.findMany({
      where: { subjectId: subject.id },
      select: { nome: true },
    });
    const names = new Set(existing.map((topic) => topic.nome));
    const missing = module.topics
      .map((nome, index) => ({
        nome,
        ordem: index + 1,
        subjectId: subject.id,
      }))
      .filter((topic) => !names.has(topic.nome));

    if (missing.length > 0) {
      await prisma.topic.createMany({ data: missing });
    }
  }
}

async function seedYoutube(topicId, url) {
  const existing = await prisma.material.findFirst({
    where: { topicId, tipo: "YOUTUBE" },
  });

  if (!existing) {
    await prisma.material.create({
      data: {
        tipo: "YOUTUBE",
        titulo: "Vídeo",
        url,
        ordem: 3,
        topicId,
      },
    });
    return;
  }

  if (existing.url !== url) {
    await prisma.material.update({
      where: { id: existing.id },
      data: { url },
    });
  }
}

async function seedMaterials() {
  for (const item of materialCatalog) {
    const topic = await prisma.topic.findFirst({ where: { nome: item.topic } });
    if (!topic) continue;

    if (item.youtube) {
      await seedYoutube(topic.id, item.youtube);
    }

    if (!item.slug) continue;

    const area = item.area ?? "matematica";
    const sourceDir = path.join(contentRoot, area === "fisica" ? "fisica" : "matematica", item.pasta ?? "");
    const destDir = path.join(materialStorage, area, item.slug);
    await fs.mkdir(destDir, { recursive: true });

    const files = [
      item.resumo && {
        tipo: "RESUMO",
        titulo: "Resumo",
        ordem: 1,
        source: item.resumo,
        dest: "resumo.pdf",
      },
      item.infografico && {
        tipo: "INFOGRAFICO",
        titulo: "Infográfico",
        ordem: 2,
        source: item.infografico,
        dest: "infografico.png",
      },
    ].filter(Boolean);

    for (const file of files) {
      await fs.copyFile(path.join(sourceDir, file.source), path.join(destDir, file.dest));
      const existing = await prisma.material.findFirst({
        where: { topicId: topic.id, tipo: file.tipo },
      });
      if (existing) continue;

      await prisma.material.create({
        data: {
          tipo: file.tipo,
          titulo: file.titulo,
          url: `/materiais/${area}/${item.slug}/${file.dest}`,
          ordem: file.ordem,
          topicId: topic.id,
        },
      });
    }
  }
}

async function seedTopicQuizzes() {
  for (const item of topicQuestions) {
    const topic = await prisma.topic.findFirst({ where: { nome: item.topic } });
    if (!topic) continue;

    const existing = await prisma.quiz.findUnique({ where: { topicId: topic.id } });
    if (existing) continue;

    await prisma.quiz.create({
      data: {
        titulo: item.topic,
        descricao: `Exercícios de ${item.topic}`,
        topicId: topic.id,
        questions: {
          create: item.questions.map((question, index) => ({
            enunciado: question.question,
            ordem: index + 1,
            options: {
              create: question.options.map((texto, optionIndex) => ({
                texto,
                correta: optionIndex === question.correct,
              })),
            },
          })),
        },
      },
    });
  }
}

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { usuario: "teste" },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        nome: "Aluno teste",
        usuario: "teste",
        senha: "123123123",
        papel: "ALUNO",
      },
    });
  }

  const existingAdmin = await prisma.user.findUnique({
    where: { usuario: "professor" },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        nome: "Professor",
        usuario: "professor",
        senha: "123123123",
        papel: "ADMIN",
      },
    });
  }

  const existingQuiz = await prisma.quiz.findFirst({
    where: { titulo: quizData.title },
  });

  if (!existingQuiz) {
    await prisma.quiz.create({
      data: {
        titulo: quizData.title,
        descricao: quizData.description,
        questions: {
          create: quizData.questions.map((question, index) => ({
            enunciado: question.question,
            ordem: index + 1,
            options: {
              create: question.options.map((option) => ({
                texto: option.text,
                correta: option.id === question.correctOptionId,
              })),
            },
          })),
        },
      },
    });
  }

  await seedModules();
  await seedMaterials();
  await seedTopicQuizzes();
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
