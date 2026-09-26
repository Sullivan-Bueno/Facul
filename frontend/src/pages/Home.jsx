import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"

const courses = [
  {
    number: "01",
    title: "Fundamentos da álgebra",
    detail: "Equações, expressões e padrões",
    lessons: "8 aulas",
    color: "bg-[#dce9d3]",
    symbol: "x²",
  },
  {
    number: "02",
    title: "Geometria em perspectiva",
    detail: "Formas, medidas e espaço",
    lessons: "6 aulas",
    color: "bg-[#f4dfd3]",
    symbol: "△",
  },
  {
    number: "03",
    title: "Números em movimento",
    detail: "Frações, razões e proporções",
    lessons: "5 aulas",
    color: "bg-[#dce8eb]",
    symbol: "⅓",
  },
];

const Home = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies();

    useEffect(() => {
        if (!cookies.token || cookies.token == undefined) {
            navigate("/login")
        }
    })
  return (
    <main className="min-h-screen bg-[#f6f7f1] text-[#1f332d]">
      <header className="border-b border-[#e3e8df] bg-[#f6f7f1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <a href="/" className="text-xl font-black tracking-tight">
            soma <span className="text-[#e36b4f]">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#64766e] sm:flex">
            <a href="#aulas" className="text-[#1f332d]">
              Minhas aulas
            </a>
            <a href="#cursos" className="transition hover:text-[#1f332d]">
              Explorar
            </a>
          </nav>
          <a
            href="/login"
            className="rounded-md border border-[#cbd6ca] px-4 py-2 text-sm font-bold transition hover:border-[#1f332d]"
          >
            Entrar
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-10 sm:pt-14">
        <section
          id="aulas"
          className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-stretch"
        >
          <div className="flex min-h-85 flex-col justify-between overflow-hidden rounded-lg bg-[#dce9d3] p-7 sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">
                Seu espaço de aprendizagem
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.08] sm:text-5xl">
                Olá, estudante<span className="text-[#e36b4f]">.</span>
                <br />
                Vamos descobrir algo novo?
              </h1>
            </div>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-5">
              <p className="max-w-sm text-sm leading-6 text-[#496057]">
                Um pouco de prática hoje é um grande salto amanhã. Sua próxima
                aula já está esperando.
              </p>
              <a
                href="#cursos"
                className="inline-flex items-center gap-3 rounded-md bg-[#1f332d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#304d41]"
              >
                Ver minhas aulas <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-lg bg-[#1f332d] p-7 text-white sm:p-9">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b9cdbd]">
                  Seu ritmo
                </p>
                <p className="mt-3 text-3xl font-black">Muito bem!</p>
              </div>
              <span aria-hidden="true" className="text-4xl text-[#f2a181]">
                ✳
              </span>
            </div>
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-[#d2ded5]">Progresso semanal</span>
                <span className="font-bold">3 de 5 aulas</span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-[#496057]"
                role="progressbar"
                aria-label="Progresso semanal"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="h-full w-3/5 rounded-full bg-[#f2a181]" />
              </div>
              <p className="mt-4 text-sm leading-6 text-[#b9cdbd]">
                Você está construindo uma ótima sequência. Continue assim.
              </p>
            </div>
          </aside>
        </section>

        <section id="cursos" className="pt-14 sm:pt-16">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e36b4f]">
                Aprenda fazendo
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Suas trilhas de matemática
              </h2>
            </div>
            <p className="text-sm text-[#64766e]">
              Escolha por onde continuar <span aria-hidden="true">↓</span>
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {courses.map((course) => (
              <a
                key={course.number}
                href="/login"
                className="group overflow-hidden rounded-lg border border-[#e2e7df] bg-white transition hover:-translate-y-1 hover:border-[#b9cdbd] hover:shadow-lg hover:shadow-[#1f332d]/5"
              >
                <div
                  className={`flex h-36 items-center justify-between px-6 ${course.color}`}
                >
                  <span className="text-sm font-bold text-[#547064]">
                    TRILHA {course.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-6xl font-black text-[#1f332d]/75"
                  >
                    {course.symbol}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#e36b4f]">
                    {course.lessons}
                  </p>
                  <h3 className="mt-2 text-lg font-black">{course.title}</h3>
                  <p className="mt-1 text-sm text-[#64766e]">{course.detail}</p>
                  <p className="mt-6 text-sm font-bold text-[#1f332d] group-hover:text-[#e36b4f]">
                    Acessar trilha <span aria-hidden="true">↗</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
