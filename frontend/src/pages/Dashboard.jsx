import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { isAdmin } from "../lib/auth";

function formatDate(value) {
  return new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function rate(acertos, erros) {
  const total = acertos + erros;
  if (total === 0) return 0;
  return Math.round((acertos / total) * 100);
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
      return;
    }
    if (!isAdmin(cookies.token)) {
      navigate("/estudos");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response = await axios.get("http://localhost:3000/dashboard", {
          headers: { Authorization: `Bearer ${cookies.token}` },
        });
        setData(response.data);
        setStatus("ready");
      } catch (err) {
        if (err.response?.status === 403) {
          navigate("/estudos");
          return;
        }
        setStatus("error");
      }
    }

    if (cookies.token) {
      fetchDashboard();
    }
  }, [cookies.token]);

  const cards = data
    ? [
        { label: "Tentativas", value: data.resumo.tentativas },
        { label: "Acertos", value: data.resumo.acertos },
        { label: "Erros", value: data.resumo.erros },
        { label: "Taxa de acerto", value: `${data.resumo.taxa}%` },
      ]
    : [];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
          Acompanhamento
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">Painel dos alunos</h1>
        <p className="mt-3 max-w-2xl leading-6 text-[#777]">
          Os números saem das provas concluídas: cada acerto e cada erro fica
          ligado ao aluno.
        </p>

        {status === "loading" && (
          <p className="py-16 text-center text-[#777]">Carregando painel...</p>
        )}
        {status === "error" && (
          <p role="alert" className="py-16 text-center font-bold">
            Não foi possível carregar o painel.
          </p>
        )}

        {status === "ready" && data.resumo.tentativas === 0 && (
          <section className="mt-8 border-y border-[#e5e5e5] bg-white px-6 py-16 text-center">
            <h2 className="text-lg font-black">Nenhuma prova registrada</h2>
            <p className="mt-2 text-sm text-[#777]">
              Quando um aluno concluir uma prova, os acertos aparecem aqui.
            </p>
          </section>
        )}

        {status === "ready" && data.resumo.tentativas > 0 && (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card) => (
                <article key={card.label} className="border border-[#e5e5e5] bg-white px-5 py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a7b00]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-black">{card.value}</p>
                </article>
              ))}
            </section>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <section className="border border-[#e5e5e5] bg-white">
                <h2 className="border-b border-[#ededeb] px-5 py-4 text-lg font-black">
                  Alunos
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="text-xs uppercase tracking-[0.12em] text-[#999]">
                      <tr>
                        <th className="px-5 py-3 font-bold">Aluno</th>
                        <th className="px-3 py-3 font-bold">Provas</th>
                        <th className="px-3 py-3 font-bold">Acertos</th>
                        <th className="px-3 py-3 font-bold">Erros</th>
                        <th className="px-3 py-3 font-bold">Taxa</th>
                        <th className="px-5 py-3 font-bold">Última nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.alunos.map((aluno) => (
                        <tr key={aluno.id} className="border-t border-[#f0f0ee]">
                          <td className="px-5 py-4">
                            <p className="font-bold">{aluno.nome}</p>
                            <p className="text-xs text-[#999]">{aluno.usuario}</p>
                          </td>
                          <td className="px-3 py-4">{aluno.tentativas}</td>
                          <td className="px-3 py-4">{aluno.acertos}</td>
                          <td className="px-3 py-4">{aluno.erros}</td>
                          <td className="px-3 py-4">{rate(aluno.acertos, aluno.erros)}%</td>
                          <td className="px-5 py-4 font-bold">
                            {aluno.ultimaNota}/10
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="border border-[#e5e5e5] bg-white">
                <h2 className="border-b border-[#ededeb] px-5 py-4 text-lg font-black">
                  Questões mais erradas
                </h2>
                <ol className="divide-y divide-[#f0f0ee]">
                  {data.questoes.map((questao) => (
                    <li key={questao.id} className="px-5 py-4">
                      <p className="text-sm font-bold leading-6">{questao.enunciado}</p>
                      <p className="mt-1 text-xs text-[#777]">
                        {questao.erros} {questao.erros === 1 ? "erro" : "erros"} ·{" "}
                        {questao.acertos} {questao.acertos === 1 ? "acerto" : "acertos"}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <section className="mt-6 border border-[#e5e5e5] bg-white">
              <h2 className="border-b border-[#ededeb] px-5 py-4 text-lg font-black">
                Provas recentes
              </h2>
              <ul className="divide-y divide-[#f0f0ee]">
                {data.tentativas.map((tentativa) => (
                  <li
                    key={tentativa.id}
                    className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                  >
                    <div>
                      <p className="font-bold">{tentativa.aluno}</p>
                      <p className="text-xs text-[#999]">
                        {tentativa.quiz} · {formatDate(tentativa.createdAt)}
                      </p>
                    </div>
                    <p className="text-sm font-black">
                      {tentativa.nota}/{tentativa.total}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
