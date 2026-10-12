import quiz from "../../Quiz.js";

export function getExercises(req, res) {
  const questions = quiz.quiz.questions.map(({ id, question, options }) => ({
    id,
    question,
    options,
  }));

  try {
    res.status(200).json({ questions });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export function checkAnswers(req, res) {
  const userAnswers = req.body.answers;
  const correctAnswers = Object.fromEntries(
    quiz.quiz.questions.map(({ id, correctOptionId }) => [id, correctOptionId]),
  );

  let nota = 0;

  for (let i = 0; i < 10; i++) {
    if (userAnswers[i] == correctAnswers[i]) {
      nota += 1;
    }
  }

  try {
    res.status(200).json({ questoesCorretas: nota, nota });
  } catch (err) {
    res.status(400).json({ message: `${err.message}` });
  }
}
