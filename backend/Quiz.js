const exercises = {
  quiz: {
    id: 1,
    title: "Conhecimentos Gerais",
    description: "Questionário de conhecimentos gerais com 10 questões.",
    questions: [
      {
        id: 1,
        question: "Qual é a capital do Brasil?",
        options: [
          {
            id: 1,
            text: "São Paulo",
          },
          {
            id: 2,
            text: "Brasília",
          },
          {
            id: 3,
            text: "Rio de Janeiro",
          },
          {
            id: 4,
            text: "Belo Horizonte",
          },
        ],
        correctOptionId: 2,
      },
      {
        id: 2,
        question: "Quanto é 12 × 8?",
        options: [
          {
            id: 5,
            text: "86",
          },
          {
            id: 6,
            text: "96",
          },
          {
            id: 7,
            text: "108",
          },
          {
            id: 8,
            text: "112",
          },
        ],
        correctOptionId: 6,
      },
      {
        id: 3,
        question: "Qual planeta é conhecido como Planeta Vermelho?",
        options: [
          {
            id: 9,
            text: "Vênus",
          },
          {
            id: 10,
            text: "Júpiter",
          },
          {
            id: 11,
            text: "Marte",
          },
          {
            id: 12,
            text: "Saturno",
          },
        ],
        correctOptionId: 11,
      },
      {
        id: 4,
        question:
          "Qual linguagem é executada nativamente pelos navegadores web?",
        options: [
          {
            id: 13,
            text: "Python",
          },
          {
            id: 14,
            text: "Java",
          },
          {
            id: 15,
            text: "C#",
          },
          {
            id: 16,
            text: "JavaScript",
          },
        ],
        correctOptionId: 16,
      },
      {
        id: 5,
        question: "Qual é o maior planeta do Sistema Solar?",
        options: [
          {
            id: 17,
            text: "Terra",
          },
          {
            id: 18,
            text: "Júpiter",
          },
          {
            id: 19,
            text: "Netuno",
          },
          {
            id: 20,
            text: "Saturno",
          },
        ],
        correctOptionId: 18,
      },
      {
        id: 6,
        question: "Qual estrutura de dados segue o princípio LIFO?",
        options: [
          {
            id: 21,
            text: "Fila",
          },
          {
            id: 22,
            text: "Pilha",
          },
          {
            id: 23,
            text: "Árvore",
          },
          {
            id: 24,
            text: "Grafo",
          },
        ],
        correctOptionId: 22,
      },
      {
        id: 7,
        question: "Qual é o resultado de 2⁵?",
        options: [
          {
            id: 25,
            text: "10",
          },
          {
            id: 26,
            text: "16",
          },
          {
            id: 27,
            text: "32",
          },
          {
            id: 28,
            text: "64",
          },
        ],
        correctOptionId: 27,
      },
      {
        id: 8,
        question:
          "Qual protocolo é utilizado para acessar páginas web de forma segura?",
        options: [
          {
            id: 29,
            text: "FTP",
          },
          {
            id: 30,
            text: "HTTP",
          },
          {
            id: 31,
            text: "HTTPS",
          },
          {
            id: 32,
            text: "SMTP",
          },
        ],
        correctOptionId: 31,
      },
      {
        id: 9,
        question: "Qual destes é um banco de dados relacional?",
        options: [
          {
            id: 33,
            text: "PostgreSQL",
          },
          {
            id: 34,
            text: "Redis",
          },
          {
            id: 35,
            text: "MongoDB",
          },
          {
            id: 36,
            text: "Memcached",
          },
        ],
        correctOptionId: 33,
      },
      {
        id: 10,
        question: "O que significa a sigla API?",
        options: [
          {
            id: 37,
            text: "Application Programming Interface",
          },
          {
            id: 38,
            text: "Advanced Programming Internet",
          },
          {
            id: 39,
            text: "Application Process Integration",
          },
          {
            id: 40,
            text: "Advanced Protocol Interface",
          },
        ],
        correctOptionId: 37,
      },
    ],
  },
};

export default exercises;