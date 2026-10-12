import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, ArrowRight, Check, CircleCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(`http://localhost:3000/exercises/`);
        setQuestions(response.data.questions);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = questions.length
    ? (answeredCount / questions.length) * 100
    : 0;

  function selectAnswer(questionId, optionId) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: optionId,
    }));
  }

  async function sendAnswers(answers) {
    const response = await axios.post(
      "http://localhost:3000/exercises/checkanswers",
      {
        answers,
      },
    );
    console.log(response.data);
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <header className="sticky top-0 z-20 border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-10">
          <Link
            to="/"
            aria-label="Voltar ao início"
            className="flex items-center gap-2"
          >
            <img src="/Icon.png" width={42} height={42} alt="" />
            <span className="text-xl font-black tracking-tight">
              RESOLVE<span className="text-[#f4c400]">+</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold text-[#666] transition hover:text-[#303030]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">Sair da prova</span>
            <span className="sm:hidden">Sair</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-12">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
            Avaliação online
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            Prova de conhecimentos gerais
          </h1>
          <p className="mt-3 max-w-2xl leading-6 text-[#777]">
            Responda às questões e acompanhe seu progresso durante a prova.
          </p>
        </div>

        {isLoading ? (
          <div className="border-y border-[#e5e5e5] bg-white px-6 py-12 text-center text-[#777]">
            Carregando questões...
          </div>
        ) : error ? (
          <div
            role="alert"
            className="border-y border-[#e5e5e5] bg-white px-6 py-12 text-center"
          >
            <p className="font-bold">Não foi possível carregar a prova.</p>
            <p className="mt-2 text-sm text-[#777]">
              Verifique sua conexão e tente novamente.
            </p>
          </div>
        ) : questions.length === 0 ? (
          <div className="border-y border-[#e5e5e5] bg-white px-6 py-12 text-center text-[#777]">
            Nenhuma questão disponível no momento.
          </div>
        ) : isSubmitted ? (
          <section className="mx-auto max-w-2xl border-y border-[#e5e5e5] bg-white px-6 py-12 text-center sm:px-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[#fff8d6] text-[#9a7b00]">
              <CircleCheck aria-hidden="true" className="h-8 w-8" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
              Prova concluída
            </p>
            <h2 className="mt-2 text-3xl font-black">Respostas registradas</h2>
            <p className="mt-3 text-[#777]">
              Você respondeu {answeredCount} de {questions.length} questões.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 bg-[#303030] px-5 font-bold text-white transition hover:bg-[#1f1f1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4c400]"
            >
              Revisar respostas
            </button>
          </section>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="min-w-0 border-y border-[#e5e5e5] bg-white p-6 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#777]">
                  Questão {currentIndex + 1}{" "}
                  <span className="px-1 text-[#c5c5c5]">/</span>{" "}
                  {questions.length}
                </p>
                {answers[currentQuestion.id] && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#517337]">
                    <Check aria-hidden="true" className="h-4 w-4" />
                    Respondida
                  </span>
                )}
              </div>

              <div className="mt-5 h-1 w-full bg-[#ededeb]">
                <div
                  className="h-full bg-[#f4c400] transition-[width]"
                  style={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <h2 className="mt-8 text-xl font-bold leading-8 sm:text-2xl sm:leading-9">
                {currentQuestion.question}
              </h2>

              <div className="mt-7 grid gap-3">
                {currentQuestion.options.map((option, optionIndex) => {
                  const isSelected = answers[currentQuestion.id] === option.id;

                  return (
                    <label
                      key={option.id}
                      className={`flex min-h-14 cursor-pointer items-center gap-4 border px-4 py-3 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#f4c400] ${
                        isSelected
                          ? "border-[#303030] bg-[#fffbea]"
                          : "border-[#e5e5e5] hover:border-[#b8b8b8]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option.id}
                        checked={isSelected}
                        onChange={() =>
                          selectAnswer(currentQuestion.id, option.id)
                        }
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? "border-[#303030]" : "border-[#bdbdbd]"
                        }`}
                      >
                        {isSelected && (
                          <span className="h-2.5 w-2.5 rounded-full bg-[#f4c400]" />
                        )}
                      </span>
                      <span className="flex-1 text-sm font-medium leading-6 sm:text-base">
                        <span className="mr-3 text-xs font-bold uppercase text-[#999]">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        {option.text}
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#ededeb] pt-6">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((index) => Math.max(0, index - 1))
                  }
                  disabled={currentIndex === 0}
                  className="inline-flex h-11 items-center gap-2 px-3 text-sm font-bold text-[#666] transition hover:text-[#303030] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((index) =>
                      Math.min(questions.length - 1, index + 1),
                    )
                  }
                  disabled={currentIndex === questions.length - 1}
                  className="inline-flex h-11 items-center gap-2 bg-[#303030] px-5 text-sm font-bold text-white transition hover:bg-[#1f1f1f] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Próxima
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </section>

            <aside className="border-y border-[#e5e5e5] bg-white p-6 sm:p-7 lg:sticky lg:top-24">
              <h2 className="text-lg font-black">Seu progresso</h2>
              <p className="mt-1 text-sm text-[#777]">
                {answeredCount} de {questions.length} respondidas
              </p>
              <div
                className="mt-4 h-2 bg-[#ededeb]"
                role="progressbar"
                aria-label="Questões respondidas"
                aria-valuemin={0}
                aria-valuemax={questions.length}
                aria-valuenow={answeredCount}
              >
                <div
                  className="h-full bg-[#f4c400] transition-[width]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-7 grid grid-cols-5 gap-2">
                {questions.map((question, index) => {
                  const isAnswered = Boolean(answers[question.id]);
                  const isCurrent = currentIndex === index;

                  return (
                    <button
                      key={question.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Ir para questão ${index + 1}${isAnswered ? ", respondida" : ", não respondida"}`}
                      aria-current={isCurrent ? "step" : undefined}
                      className={`aspect-square border text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4c400] ${
                        isCurrent
                          ? "border-[#303030] bg-[#303030] text-white"
                          : isAnswered
                            ? "border-[#f4c400] bg-[#fff8d6] text-[#303030]"
                            : "border-[#e5e5e5] text-[#777] hover:border-[#999]"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#ededeb] pt-5 text-xs text-[#777]">
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 bg-[#303030]" /> Atual
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 border border-[#f4c400] bg-[#fff8d6]" />{" "}
                  Respondida
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(true);
                  sendAnswers(answers);
                }}
                className="mt-7 flex h-12 w-full items-center justify-center gap-2 border border-[#303030] px-4 text-sm font-bold transition hover:bg-[#303030] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4c400]"
              >
                <Check aria-hidden="true" className="h-4 w-4" />
                Concluir prova
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Test;
