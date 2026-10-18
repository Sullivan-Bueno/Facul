import {
  createAttempt,
  findQuizById,
  findQuizWithQuestions,
} from "../models/quizModel.js";

function toPublicQuestions(quiz) {
  return (quiz?.questions ?? []).map((question) => ({
    id: question.id,
    question: question.enunciado,
    options: question.options.map((option) => ({
      id: option.id,
      text: option.texto,
    })),
  }));
}

export async function getExercises(req, res) {
  try {
    const quiz = await findQuizWithQuestions();
    res.status(200).json({ questions: toPublicQuestions(quiz) });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getExercisesById(req, res) {
  try {
    const quiz = await findQuizById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Questionário não encontrado" });
    }

    res.status(200).json({
      id: quiz.id,
      titulo: quiz.titulo,
      topicId: quiz.topicId,
      questions: toPublicQuestions(quiz),
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function checkAnswers(req, res) {
  try {
    const userAnswers = req.body.answers ?? {};
    const quiz = req.body.quizId
      ? await findQuizById(req.body.quizId)
      : await findQuizWithQuestions();

    if (!quiz) {
      return res.status(404).json({ message: "Questionário não encontrado" });
    }

    const answers = quiz.questions.map((question) => {
      const selected = question.options.find(
        (option) => option.id === userAnswers[question.id],
      );

      return {
        questionId: question.id,
        optionId: selected?.id ?? null,
        correta: Boolean(selected?.correta),
      };
    });

    const nota = answers.filter((answer) => answer.correta).length;
    const revisao = quiz.questions.map((question, index) => {
      const selected = question.options.find(
        (option) => option.id === userAnswers[question.id],
      );
      const gabarito = question.options.find((option) => option.correta);
      const letra = (option) => {
        const optionIndex = question.options.findIndex((item) => item.id === option?.id);
        return optionIndex >= 0 ? String.fromCharCode(65 + optionIndex) : "";
      };

      return {
        ordem: index + 1,
        enunciado: question.enunciado,
        resposta: selected ? `${letra(selected)}) ${selected.texto}` : null,
        gabarito: gabarito ? `${letra(gabarito)}) ${gabarito.texto}` : null,
        correta: Boolean(selected?.correta),
      };
    });

    await createAttempt({
      userId: req.userId,
      quizId: quiz.id,
      nota,
      answers,
    });

    res.status(200).json({ questoesCorretas: nota, nota, revisao });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
