import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ArrowRight, BookOpen, ChartColumn, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import { isAdmin } from "../lib/auth";

const steps = [
  {
    icon: GraduationCap,
    title: "Entre na conta",
    text: "O aluno acessa com usuário e senha e passa a ter as trilhas de Matemática e Física.",
  },
  {
    icon: BookOpen,
    title: "Escolha o conteúdo",
    text: "A barra lateral troca o módulo. Cada conteúdo abre a própria página de estudo.",
  },
  {
    icon: ChartColumn,
    title: "Acompanhe os acertos",
    text: "Cada prova concluída entra no painel: quem acertou, quem errou e qual questão pesa mais.",
  },
];

const Landing = () => {
  const [cookies] = useCookies(["token"]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await axios.get("http://localhost:3000/subjects");
        setSubjects(response.data);
      } catch {
        setSubjects([]);
      }
    }

    fetchSubjects();
  }, []);

  const loggedIn = Boolean(cookies.token);
  const admin = isAdmin(cookies.token);

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-12">
        <section className="grid overflow-hidden bg-[#303030] text-white lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#f4c400]">
              Plataforma de estudo
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-[0.98] sm:text-6xl">
              Transforme
              <br />
              dúvidas em
              <br />
              <span className="text-[#f4c400]">soluções.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#bdbdbd]">
              Matemática e Física organizadas por conteúdo. O aluno estuda no
              módulo, e o painel mostra onde os acertos acontecem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={loggedIn ? "/estudos" : "/login"}
                className="inline-flex h-12 items-center gap-2 bg-[#f4c400] px-5 font-bold text-[#303030] transition hover:bg-[#dfb300]"
              >
                {loggedIn ? "Continuar estudando" : "Começar agora"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              {admin && (
                <Link
                  to="/dashboard"
                  className="inline-flex h-12 items-center px-5 font-bold text-white ring-1 ring-white/30 transition hover:bg-white/10"
                >
                  Ver o painel
                </Link>
              )}
            </div>
          </div>
          <div className="relative flex min-h-64 items-center justify-center border-t border-white/10 bg-[#282828] px-8 py-12 lg:border-l lg:border-t-0">
            <div className="relative z-10 flex items-center gap-3 text-3xl font-bold sm:gap-5 sm:text-4xl">
              <span>x²</span>
              <span className="text-[#f4c400]">+</span>
              <span>2x</span>
              <span className="text-[#f4c400]">=</span>
              <span className="text-[#f4c400]">?</span>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
            Trilhas
          </p>
          <h2 className="mt-2 text-3xl font-black">Escolha um módulo</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {subjects.map((subject) => (
              <article key={subject.id} className="border border-[#e5e5e5] bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a7b00]">
                  {subject.topics.length} conteúdos
                </p>
                <h3 className="mt-2 text-2xl font-black">{subject.nome}</h3>
                <ul className="mt-5 grid gap-2 text-sm text-[#666]">
                  {subject.topics.slice(0, 4).map((topic) => (
                    <li key={topic.id}>{topic.nome}</li>
                  ))}
                </ul>
                <Link
                  to={loggedIn ? `/modulos/${subject.id}` : "/login"}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#303030] hover:text-[#9a7b00]"
                >
                  Abrir trilha
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="border border-[#e5e5e5] bg-white p-6">
              <step.icon aria-hidden="true" className="h-6 w-6 text-[#9a7b00]" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#999]">
                0{index + 1}
              </p>
              <h2 className="mt-1 text-lg font-black">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#777]">{step.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Landing;
