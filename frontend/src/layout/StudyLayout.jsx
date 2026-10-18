import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const StudyLayout = () => {
  const navigate = useNavigate();
  const { subjectId, topicId } = useParams();
  const [cookies] = useCookies(["token"]);
  const [subjects, setSubjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
    }
    // Só na entrada da área de estudo. Sair leva para a homepage, sem passar de novo pelo login.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await axios.get("http://localhost:3000/subjects");
        setSubjects(response.data);
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    }

    if (cookies.token) {
      fetchSubjects();
    }
  }, [cookies.token]);

  const activeSubject =
    subjects.find((subject) => subject.id === subjectId) ??
    subjects.find((subject) =>
      subject.topics.some((topic) => topic.id === topicId),
    ) ??
    subjects[0];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <Header />
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl">
        <aside className="hidden w-72 shrink-0 border-r border-[#e5e5e5] bg-white lg:block">
          <div className="sticky top-[4.5rem] px-5 py-8">
            <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-[#9a7b00]">
              Módulos
            </p>
            <nav className="mt-4 grid gap-1" aria-label="Módulos">
              {subjects.map((subject) => (
                <NavLink
                  key={subject.id}
                  to={`/modulos/${subject.id}`}
                  className={`border-l-4 px-3 py-3 text-left text-sm font-bold transition ${
                    activeSubject?.id === subject.id
                      ? "border-[#f4c400] bg-[#fff8d6] text-[#303030]"
                      : "border-transparent text-[#666] hover:bg-[#f7f7f5] hover:text-[#303030]"
                  }`}
                >
                  {subject.nome}
                  <span className="mt-0.5 block text-xs font-medium text-[#999]">
                    {subject.topics.length} conteúdos
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {subjects.length > 0 && (
            <div className="border-b border-[#e5e5e5] bg-white px-4 py-3 lg:hidden">
              <div className="grid grid-cols-2 gap-2" role="tablist" aria-label="Módulos">
                {subjects.map((subject) => (
                  <NavLink
                    key={subject.id}
                    to={`/modulos/${subject.id}`}
                    className={`flex h-11 items-center justify-center px-3 text-sm font-bold ${
                      activeSubject?.id === subject.id
                        ? "bg-[#303030] text-white"
                        : "border border-[#e5e5e5] text-[#666]"
                    }`}
                  >
                    {subject.nome}
                  </NavLink>
                ))}
              </div>
            </div>
          )}

          {status === "loading" && (
            <p className="px-6 py-16 text-center text-[#777]">Carregando módulos...</p>
          )}
          {status === "error" && (
            <p role="alert" className="px-6 py-16 text-center font-bold">
              Não foi possível carregar os módulos.
            </p>
          )}
          {status === "ready" && (
            <Outlet context={{ subjects, activeSubject }} />
          )}
        </div>
      </div>
    </main>
  );
};

export default StudyLayout;
