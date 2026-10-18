import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Header from "../layout/Header";
import { isAdmin } from "../lib/auth";

const CreateUser = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [created, setCreated] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
      return;
    }
    if (!isAdmin(cookies.token)) {
      navigate("/estudos");
    }
  }, [cookies.token, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setCreated(null);
    setSending(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/user",
        { nome, usuario, senha },
        { headers: { Authorization: `Bearer ${cookies.token}` } },
      );
      setCreated(response.data);
      setNome("");
      setUsuario("");
      setSenha("");
    } catch (err) {
      if (err.response?.status === 403) {
        navigate("/estudos");
        return;
      }
      setError(err.response?.data?.message ?? "Não foi possível criar o usuário.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <Header />
      <div className="mx-auto max-w-xl px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00]">
          Administração
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">Novo aluno</h1>
        <p className="mt-3 leading-6 text-[#777]">
          A conta criada entra como aluno e segue direto para a área de estudo.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 border border-[#e5e5e5] bg-white p-6 sm:p-8">
          <Input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            id="nome"
            type="text"
            autoComplete="name"
            placeholder="Nome do aluno"
          >
            Nome
          </Input>
          <Input
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
            id="usuario"
            type="text"
            autoComplete="off"
            placeholder="aluno1"
          >
            Usuário
          </Input>
          <Input
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            id="senha"
            type="password"
            autoComplete="new-password"
            placeholder="Senha inicial"
          >
            Senha
          </Input>

          {error && (
            <p role="alert" className="text-sm font-bold text-[#9a3b3b]">
              {error}
            </p>
          )}
          {created && (
            <p role="status" className="text-sm font-bold text-[#517337]">
              {created.nome} entrou com o usuário {created.usuario}.
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="mt-2 flex h-12 items-center justify-center bg-[#303030] px-5 font-bold text-white transition hover:bg-[#1f1f1f] disabled:opacity-60"
          >
            {sending ? "Criando..." : "Criar aluno"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateUser;
