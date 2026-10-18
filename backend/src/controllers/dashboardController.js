import { findAttemptsForDashboard } from "../models/dashboardModel.js";

export async function getDashboard(req, res) {
  try {
    const attempts = await findAttemptsForDashboard();

    const alunos = new Map();
    const questoes = new Map();
    let acertos = 0;
    let erros = 0;

    for (const attempt of attempts) {
      const acertosDaTentativa = attempt.answers.filter((answer) => answer.correta).length;
      const errosDaTentativa = attempt.answers.length - acertosDaTentativa;
      acertos += acertosDaTentativa;
      erros += errosDaTentativa;

      if (!alunos.has(attempt.userId)) {
        alunos.set(attempt.userId, {
          id: attempt.user.id,
          nome: attempt.user.nome,
          usuario: attempt.user.usuario,
          tentativas: 0,
          acertos: 0,
          erros: 0,
          ultimaNota: attempt.nota,
          ultimaEm: attempt.createdAt,
        });
      }

      const aluno = alunos.get(attempt.userId);
      aluno.tentativas += 1;
      aluno.acertos += acertosDaTentativa;
      aluno.erros += errosDaTentativa;

      for (const answer of attempt.answers) {
        if (!questoes.has(answer.question.id)) {
          questoes.set(answer.question.id, {
            id: answer.question.id,
            enunciado: answer.question.enunciado,
            acertos: 0,
            erros: 0,
          });
        }
        const questao = questoes.get(answer.question.id);
        if (answer.correta) {
          questao.acertos += 1;
        } else {
          questao.erros += 1;
        }
      }
    }

    const respostas = acertos + erros;

    res.status(200).json({
      resumo: {
        tentativas: attempts.length,
        acertos,
        erros,
        taxa: respostas === 0 ? 0 : Math.round((acertos / respostas) * 100),
      },
      alunos: [...alunos.values()].sort((a, b) => b.erros - a.erros || b.acertos - a.acertos),
      questoes: [...questoes.values()]
        .sort((a, b) => b.erros - a.erros || a.acertos - b.acertos)
        .slice(0, 8),
      tentativas: attempts.slice(0, 10).map((attempt) => ({
        id: attempt.id,
        aluno: attempt.user.nome,
        quiz: attempt.quiz.titulo,
        nota: attempt.nota,
        total: attempt.answers.length,
        createdAt: attempt.createdAt,
      })),
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
