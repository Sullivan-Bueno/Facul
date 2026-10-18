import { Link, useOutletContext, useParams } from "react-router-dom";

const Home = () => {
  const { subjectId } = useParams();
  const { subjects, activeSubject } = useOutletContext();
  const subject = subjects.find((item) => item.id === subjectId) ?? activeSubject;

  if (!subject) {
    return (
      <p className="px-6 py-16 text-center text-[#777]">
        Nenhum módulo disponível.
      </p>
    );
  }

  if (subjectId && subject.id !== subjectId) {
    return (
      <p className="px-6 py-16 text-center font-bold">Módulo não encontrado.</p>
    );
  }

  return (
    <div className="px-6 py-8 sm:px-10 sm:py-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
        Módulo
      </p>
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">{subject.nome}</h1>
      <p className="mt-3 max-w-2xl leading-6 text-[#777]">
        Escolha um conteúdo para estudar. Os exercícios ficam dentro de cada conteúdo.
      </p>

      <ol className="mt-8 divide-y divide-[#e8e8e5] border-y border-[#e5e5e5] bg-white">
        {subject.topics.map((topic) => (
          <li key={topic.id}>
            <Link
              to={`/topicos/${topic.id}`}
              className="flex items-center gap-4 px-5 py-5 transition hover:bg-[#fffdf3] sm:px-8"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#fff7d3] text-sm font-black text-[#826900]">
                {String(topic.ordem).padStart(2, "0")}
              </span>
              <span className="text-base font-bold sm:text-lg">{topic.nome}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
