import { ArrowLeft, BookOpen, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";

const Exercises = ({
  exercises = [{ id: "1" }, { id: "2" }, { id: "3" }],
}) => {

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <header className="sticky top-0 z-20 border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-10">
          <Link
            to="/"
            aria-label="Voltar ao início do RESOLVE+"
            className="flex items-center gap-2"
          >
            <img src="/Icon.png" width={42} height={42} alt="" />
            <span className="text-xl font-black">
              RESOLVE<span className="text-[#f4c400]">+</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#666] transition hover:text-[#303030]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">Voltar ao início</span>
            <span className="sm:hidden">Voltar</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-12">
        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
              Biblioteca de estudos
            </p>
            <h1 className="text-3xl font-black sm:text-4xl">Exercícios</h1>
            <p className="mt-3 max-w-2xl leading-6 text-[#777]">
              Consulte os enunciados e as alternativas disponíveis.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 border border-[#e5e5e5] bg-white px-4 py-2.5 text-sm font-bold">
            <BookOpen aria-hidden="true" className="h-4 w-4 text-[#9a7b00]" />
            {exercises.length} {exercises.length === 1 ? "questão" : "questões"}
          </div>
        </section>

        {exercises.length === 0 ? (
          <section className="border-y border-[#e5e5e5] bg-white px-6 py-16 text-center sm:py-20">
            <CircleHelp
              aria-hidden="true"
              className="mx-auto h-9 w-9 text-[#b5a454]"
            />
            <h2 className="mt-4 text-lg font-black">
              Nenhum exercício disponível
            </h2>
            <p className="mt-2 text-sm text-[#777]">
              Os exercícios recebidos aparecerão aqui.
            </p>
          </section>
        ) : (
          <ol className="divide-y divide-[#e8e8e5] border-y border-[#e5e5e5] bg-white">
            {exercises.map((exercise, index) => (
              <li key={exercise.id} className="px-5 py-6 sm:px-8 sm:py-7">
                <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] sm:gap-10">
                  <div className="flex min-w-0 gap-4 items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#fff7d3] text-sm font-black text-[#826900]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex justify-center items-center h-full">
                      <Link
                        to={`/test/${exercise.id}`}
                        className="text-base font-bold leading-7 sm:text-lg transition-all ease-in hover:text-[#f4c400] cursor-pointer"
                      >
                        Questionario {index + 1}
                      </Link>
                    </div>
                  </div>

                  {exercise.options?.length > 0 && (
                    <ul className="grid content-start gap-2 pl-13 sm:pl-0">
                      {exercise.options.map((option, optionIndex) => (
                        <li
                          key={option.id}
                          className="flex min-h-10 items-start gap-3 border border-[#ededeb] px-3 py-2.5 text-sm leading-5 text-[#666]"
                        >
                          <span className="shrink-0 text-xs font-black text-[#999]">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span>{option.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
};

export default Exercises;
